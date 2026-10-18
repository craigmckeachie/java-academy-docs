import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import taskLists from 'markdown-it-task-lists'

// Sidebar sections, in display order. Each handout picks one with `section:` in its front matter.
const SECTIONS = ['Daily Checklists', 'Stretch Goals', 'Handouts', 'Reference', 'Setup', 'Operating Systems']
// Sections sorted by file name instead of `order`/title:
// newest first (week-3-stretch-goals above week-2…), or oldest first (newest day at the bottom).
const NEWEST_FIRST = ['Stretch Goals']
const OLDEST_FIRST = ['Daily Checklists']
// Page folders on the site (filled by scripts/docs.sh): /checklists/…, /stretch-goals/…, /handouts/…
const PAGE_DIRS = ['checklists', 'stretch-goals', 'handouts']
const dirPath = (dir: string) => path.resolve(__dirname, '..', dir)

// Off-site resources listed in a sidebar section, after its handouts (so they sit next to the
// highest-`order` pages, e.g. the methods pages at order 900). External links open in a new tab.
const EXTERNAL_LINKS: Record<string, { text: string; link: string }[]> = {
  // e.g. Reference: [{ text: 'Some Off-Site Visual', link: 'https://…' }],
}

interface Page {
  title: string
  section: string
  order: number
  file: string
  dir: string
}

function readFrontMatter(text: string): Record<string, string> {
  const match = text.match(/^---\n([\s\S]*?)\n---/)
  const data: Record<string, string> = {}
  if (!match) return data
  for (const line of match[1].split('\n')) {
    const pair = line.match(/^(\w+):\s*(.*)$/)
    if (pair) data[pair[1]] = pair[2].replace(/^["']|["']$/g, '')
  }
  return data
}

function buildSidebar() {
  const files = PAGE_DIRS.flatMap((dir) =>
    fs.existsSync(dirPath(dir))
      ? fs.readdirSync(dirPath(dir)).filter((f) => f.endsWith('.md')).map((file) => ({ dir, file }))
      : [],
  )

  const pages: Page[] = files.map(({ dir, file }) => {
    const text = fs.readFileSync(path.join(dirPath(dir), file), 'utf8')
    const fm = readFrontMatter(text)
    const heading = text.match(/^#\s+(.+)$/m)?.[1]
    return {
      title: fm.title || heading || file.replace(/\.md$/, ''),
      section: SECTIONS.includes(fm.section) ? fm.section : 'Handouts',
      order: Number(fm.order ?? 100),
      file,
      dir,
    }
  })

  return SECTIONS.map((section) => {
    const items = pages
      .filter((p) => p.section === section)
      .sort((a, b) =>
        NEWEST_FIRST.includes(section)
          ? b.file.localeCompare(a.file, undefined, { numeric: true })
          : OLDEST_FIRST.includes(section)
            ? a.file.localeCompare(b.file, undefined, { numeric: true })
            : a.order - b.order || a.title.localeCompare(b.title),
      )
      .map((p) => ({ text: p.title, link: `/${p.dir}/${p.file.replace(/\.md$/, '')}` }))
    items.push(...(EXTERNAL_LINKS[section] ?? []).map((l) => ({ ...l, target: '_blank', rel: 'noopener' })))
    return { text: section, items }
  }).filter((group) => group.items.length > 0)
}

// "Today's Checklist" = the earliest daily checklist dated today or later (so on a weekend it's
// Monday's), or the newest one if they're all in the past. Worked out at build time; the deploy
// workflow also rebuilds every weekday morning so this stays current without a new publish.
const TIME_ZONE = 'America/New_York'

function todaysChecklistLink(): string {
  const today = new Date().toLocaleDateString('en-CA', { timeZone: TIME_ZONE }) // YYYY-MM-DD
  const dates = fs.existsSync(dirPath('checklists'))
    ? fs.readdirSync(dirPath('checklists'))
        .map((f) => f.match(/^daily-checklist-(\d{4}-\d{2}-\d{2})\.md$/)?.[1])
        .filter((d): d is string => Boolean(d))
        .sort()
    : []
  const pick = dates.find((d) => d >= today) ?? dates[dates.length - 1]
  return pick ? `/checklists/daily-checklist-${pick}` : '/'
}

const TODAY_LINK = todaysChecklistLink()

// Sidebar is built once; "Reference" links (nav + home card) go to the first reference page in it.
const SIDEBAR = buildSidebar()
const firstLink = (section: string) =>
  SIDEBAR.find((g) => g.text === section)?.items.find((i) => i.link.startsWith('/'))?.link
const REFERENCE_LINK = firstLink('Reference')
const STRETCH_LINK = firstLink('Stretch Goals') // this week's (newest)

export default defineConfig({
  transformPageData(pageData) {
    // Point the home page's first button and the Daily Checklists card at today's checklist,
    // and the Reference card at the first reference page (the card is dropped if there are none).
    if (pageData.relativePath !== 'index.md') return
    const action = pageData.frontmatter?.hero?.actions?.[0]
    if (action) action.link = TODAY_LINK
    const features: { title?: string; link?: string }[] = pageData.frontmatter?.features ?? []
    const card = features.find((f) => f.title === 'Daily Checklists')
    if (card) card.link = TODAY_LINK
    const referenceCard = features.find((f) => f.title === 'Reference')
    if (referenceCard && REFERENCE_LINK) referenceCard.link = REFERENCE_LINK
    if (referenceCard && !REFERENCE_LINK) pageData.frontmatter.features = features.filter((f) => f !== referenceCard)
    const stretchCard = features.find((f) => f.title === 'Stretch Goals')
    if (stretchCard && STRETCH_LINK) stretchCard.link = STRETCH_LINK
  },

  title: 'Java Academy',
  description: 'Daily checklists, handouts, reference guides, and setup help for the Java Academy',
  base: '/java-academy-docs/',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/java-academy-docs/favicon.svg' }]],
  srcExclude: ['README.md'],
  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    config: (md) => {
      md.use(taskLists, { enabled: true, label: true })
    },
  },

  themeConfig: {
    nav: [
      { text: "Today's Checklist", link: TODAY_LINK },
      ...(STRETCH_LINK ? [{ text: 'Stretch Goals', link: STRETCH_LINK }] : []),
      ...(REFERENCE_LINK ? [{ text: 'Reference', link: REFERENCE_LINK }] : []),
      { text: 'Demo Code', link: 'https://github.com/craigmckeachie/java-academy-demos' },
    ],
    sidebar: SIDEBAR,
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/craigmckeachie/java-academy-demos' }],
    footer: { message: 'Questions? Ask in Teams or at the Help Desk.' },
  },
})
