// Saves the checkboxes on any page with a task list (daily checklists, stretch goals, capstone tasks)
// in the student's own browser (localStorage), and adds a bar with progress, Reset, and Copy as Markdown.
// Nothing leaves the browser.

const STORAGE_PREFIX = 'java-academy-checklist:'
const BAR_CLASS = 'checklist-bar'

type Saved = Record<string, boolean>

function storageKey(path: string): string {
  return STORAGE_PREFIX + path.replace(/\.html$/, '').replace(/\/$/, '')
}

function load(path: string): Saved {
  try {
    return JSON.parse(localStorage.getItem(storageKey(path)) || '{}')
  } catch {
    return {}
  }
}

function save(path: string, saved: Saved): void {
  try {
    localStorage.setItem(storageKey(path), JSON.stringify(saved))
  } catch {
    // Private window or storage blocked: the checks still work, they just aren't remembered.
  }
}

// Headings end with VitePress's anchor link (a zero-width space), so drop it along with extra spaces.
const clean = (text: string | null | undefined) => (text || '').replace(/​/g, '').replace(/\s+/g, ' ').trim()

function itemText(li: Element): string {
  return clean(li.querySelector('label')?.textContent ?? li.textContent)
}

// Each item is saved by its heading and text, not its position, so editing a published checklist
// never moves a check onto a different item. Repeated items under one heading get #2, #3, …
function itemKeys(items: Element[]): string[] {
  const seen: Record<string, number> = {}
  return items.map((li) => {
    let heading = ''
    for (const h of headingsBefore(li)) heading = clean(h.textContent)
    const base = heading + ' › ' + itemText(li)
    seen[base] = (seen[base] || 0) + 1
    return seen[base] === 1 ? base : base + ' #' + seen[base]
  })
}

function headingsBefore(li: Element): Element[] {
  const doc = li.closest('.vp-doc')
  if (!doc) return []
  return [...doc.querySelectorAll('h2, h3')].filter(
    (h) => h.compareDocumentPosition(li) & Node.DOCUMENT_POSITION_FOLLOWING,
  )
}

function toMarkdown(doc: Element): string {
  const lines: string[] = []
  const title = clean(doc.querySelector('h1')?.textContent)
  if (title) lines.push('# ' + title, '')
  // Headings are written only when items follow them; an h2 whose items sit under its h3s still comes first.
  let pendingH2 = ''
  let pendingH3 = ''
  for (const el of doc.querySelectorAll('h2, h3, li.task-list-item')) {
    if (el.tagName === 'H2') {
      pendingH2 = '## ' + clean(el.textContent)
      pendingH3 = ''
      continue
    }
    if (el.tagName === 'H3') {
      pendingH3 = '### ' + clean(el.textContent)
      continue
    }
    for (const heading of [pendingH2, pendingH3]) {
      if (!heading) continue
      if (lines.length && lines[lines.length - 1] !== '') lines.push('')
      lines.push(heading, '')
    }
    pendingH2 = pendingH3 = ''
    const checked = (el.querySelector('input[type=checkbox]') as HTMLInputElement | null)?.checked
    lines.push(`- [${checked ? 'x' : ' '}] ${itemText(el)}`)
  }
  return lines.join('\n') + '\n'
}

async function copyText(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const area = document.createElement('textarea')
    area.value = text
    document.body.appendChild(area)
    area.select()
    document.execCommand('copy')
    area.remove()
  }
}

export function setupChecklist(path: string): void {
  const doc = document.querySelector('.vp-doc')
  if (!doc) return
  doc.querySelector('.' + BAR_CLASS)?.remove()

  const items = [...doc.querySelectorAll('li.task-list-item')]
  if (items.length === 0) return

  const boxes = items.map((li) => li.querySelector('input[type=checkbox]') as HTMLInputElement)
  const keys = itemKeys(items)
  const saved = load(path)
  boxes.forEach((box, i) => (box.checked = !!saved[keys[i]]))

  const bar = document.createElement('div')
  bar.className = BAR_CLASS
  bar.innerHTML =
    '<div class="checklist-bar-row">' +
    '<span class="checklist-count"></span>' +
    '<span class="checklist-actions">' +
    '<button type="button" class="checklist-copy">Copy as Markdown</button>' +
    '<button type="button" class="checklist-reset">Reset</button>' +
    '</span></div>' +
    '<div class="checklist-track"><div class="checklist-fill"></div></div>'

  const count = bar.querySelector('.checklist-count') as HTMLElement
  const fill = bar.querySelector('.checklist-fill') as HTMLElement
  const update = () => {
    const done = boxes.filter((b) => b.checked).length
    count.textContent = `${done} of ${boxes.length} done`
    fill.style.width = `${(done / boxes.length) * 100}%`
    bar.classList.toggle('all-done', done === boxes.length)
  }

  boxes.forEach((box) =>
    box.addEventListener('change', () => {
      const current: Saved = {}
      boxes.forEach((b, i) => {
        if (b.checked) current[keys[i]] = true
      })
      save(path, current)
      update()
    }),
  )

  const copyButton = bar.querySelector('.checklist-copy') as HTMLButtonElement
  copyButton.addEventListener('click', async () => {
    await copyText(toMarkdown(doc))
    copyButton.textContent = 'Copied!'
    setTimeout(() => (copyButton.textContent = 'Copy as Markdown'), 2000)
  })

  bar.querySelector('.checklist-reset')!.addEventListener('click', () => {
    if (!confirm('Uncheck everything on this page?')) return
    boxes.forEach((b) => (b.checked = false))
    save(path, {})
    update()
  })

  const h1 = doc.querySelector('h1')
  if (h1) h1.after(bar)
  else doc.prepend(bar)
  update()
}
