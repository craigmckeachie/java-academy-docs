import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import taskLists from 'markdown-it-task-lists'

// Sidebar sections, in display order. Each handout picks one with `section:` in its front matter.
const SECTIONS = ['Daily Checklists', 'Stretch Goals', 'Handouts', 'Java', 'IntelliJ', 'Git & GitHub', 'Operating Systems', 'Exercises']
// Sections that start closed (used once, e.g. at setup time). Every other section starts open.
const START_COLLAPSED = ['Operating Systems']
// A page with `group: Setup` goes in a closed "Setup" sub-group at the bottom of its section.
const SETUP_GROUP = 'Setup'
// Monday of Week 1, for grouping daily checklists by week.
const WEEK_1_MONDAY = '2026-10-12'
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
  group: string
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
    if (fm.section && !SECTIONS.includes(fm.section)) {
      console.warn(`Unknown section "${fm.section}" in ${dir}/${file}; showing it under Handouts.`)
    }
    return {
      title: fm.title || heading || file.replace(/\.md$/, ''),
      section: SECTIONS.includes(fm.section) ? fm.section : 'Handouts',
      group: fm.group ?? '',
      order: Number(fm.order ?? 100),
      file,
      dir,
    }
  })

  const toItem = (p: Page) => ({ text: p.title, link: `/${p.dir}/${p.file.replace(/\.md$/, '')}` })

  return SECTIONS.map((section) => {
    const sorted = pages
      .filter((p) => p.section === section)
      .sort((a, b) =>
        NEWEST_FIRST.includes(section)
          ? b.file.localeCompare(a.file, undefined, { numeric: true })
          : OLDEST_FIRST.includes(section)
            ? a.file.localeCompare(b.file, undefined, { numeric: true })
            : a.order - b.order || a.title.localeCompare(b.title),
      )
    const collapsed = START_COLLAPSED.includes(section)
    if (section === 'Daily Checklists') return { text: section, collapsed, items: checklistWeeks(sorted, toItem) }

    const items: any[] = sorted.filter((p) => p.group !== 'Setup').map(toItem)
    items.push(...(EXTERNAL_LINKS[section] ?? []).map((l) => ({ ...l, target: '_blank', rel: 'noopener' })))
    const setupPages = sorted.filter((p) => p.group === 'Setup')
    if (setupPages.length > 0) items.push({ text: SETUP_GROUP, collapsed: true, items: setupPages.map(toItem) })
    return { text: section, collapsed, items }
  }).filter((group) => group.items.length > 0)
}

// Daily checklists in one sub-group per week ("Week 3 (10/26–10/30)"); only today's week starts open.
function checklistWeeks(pages: Page[], toItem: (p: Page) => { text: string; link: string }) {
  const dateOf = (p: Page) => p.file.match(/(\d{4}-\d{2}-\d{2})/)?.[1] ?? ''
  const weekOf = (date: string) =>
    Math.floor((Date.parse(date) - Date.parse(WEEK_1_MONDAY)) / (7 * 24 * 60 * 60 * 1000)) + 1
  const shortDate = (date: string) => `${Number(date.slice(5, 7))}/${Number(date.slice(8, 10))}`
  const todaysWeek = weekOf(TODAY_LINK.match(/(\d{4}-\d{2}-\d{2})/)?.[1] ?? WEEK_1_MONDAY)

  const weeks = new Map<number, Page[]>()
  for (const p of pages) {
    const week = dateOf(p) ? weekOf(dateOf(p)) : 0
    weeks.set(week, [...(weeks.get(week) ?? []), p])
  }
  return [...weeks.entries()].map(([week, weekPages]) => {
    const dates = weekPages.map(dateOf).filter(Boolean)
    const range = dates.length ? ` (${shortDate(dates[0])}–${shortDate(dates[dates.length - 1])})` : ''
    return {
      text: week > 0 ? `Week ${week}${range}` : 'Other',
      collapsed: week !== todaysWeek,
      items: weekPages.map(toItem),
    }
  })
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

// Sidebar is built once; "Reference" links (nav + home card) go to the first Java page in it.
const SIDEBAR = buildSidebar()
const firstLink = (section: string) =>
  SIDEBAR.find((g) => g.text === section)?.items.find((i: any) => i.link?.startsWith('/'))?.link
const REFERENCE_LINK = firstLink('Java')
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
