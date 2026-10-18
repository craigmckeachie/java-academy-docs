import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import taskLists from 'markdown-it-task-lists'

// Sidebar sections, in display order. Each handout picks one with `section:` in its front matter.
const SECTIONS = ['Daily Checklists', 'Handouts', 'Cheat Sheets', 'Visuals']
const HANDOUTS_DIR = path.resolve(__dirname, '../handouts')

// Off-site resources listed in a sidebar section, after its handouts. External links open in a new tab.
const EXTERNAL_LINKS: Record<string, { text: string; link: string }[]> = {
  'Cheat Sheets': [
    { text: 'Anatomy of a Java Method (visual)', link: 'https://claude.ai/artifact/TvrxDCc6ffphLzDSksctcc' },
  ],
}

interface Page {
  title: string
  section: string
  order: number
  file: string
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
  const files = fs.existsSync(HANDOUTS_DIR)
    ? fs.readdirSync(HANDOUTS_DIR).filter((f) => f.endsWith('.md'))
    : []

  const pages: Page[] = files.map((file) => {
    const text = fs.readFileSync(path.join(HANDOUTS_DIR, file), 'utf8')
    const fm = readFrontMatter(text)
    const heading = text.match(/^#\s+(.+)$/m)?.[1]
    return {
      title: fm.title || heading || file.replace(/\.md$/, ''),
      section: SECTIONS.includes(fm.section) ? fm.section : 'Handouts',
      order: Number(fm.order ?? 100),
      file,
    }
  })

  return SECTIONS.map((section) => {
    const items = pages
      .filter((p) => p.section === section)
      .sort((a, b) =>
        section === 'Daily Checklists'
          ? b.file.localeCompare(a.file) // newest day first
          : a.order - b.order || a.title.localeCompare(b.title),
      )
      .map((p) => ({ text: p.title, link: `/handouts/${p.file.replace(/\.md$/, '')}` }))
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
  const dates = fs.existsSync(HANDOUTS_DIR)
    ? fs.readdirSync(HANDOUTS_DIR)
        .map((f) => f.match(/^daily-checklist-(\d{4}-\d{2}-\d{2})\.md$/)?.[1])
        .filter((d): d is string => Boolean(d))
        .sort()
    : []
  const pick = dates.find((d) => d >= today) ?? dates[dates.length - 1]
  return pick ? `/handouts/daily-checklist-${pick}` : '/'
}

const TODAY_LINK = todaysChecklistLink()

export default defineConfig({
  transformPageData(pageData) {
    // Point the home page's first button and the Daily Checklists card at today's checklist.
    if (pageData.relativePath !== 'index.md') return
    const action = pageData.frontmatter?.hero?.actions?.[0]
    if (action) action.link = TODAY_LINK
    const card = pageData.frontmatter?.features?.find((f: { title?: string }) => f.title === 'Daily Checklists')
    if (card) card.link = TODAY_LINK
  },

  title: 'Java Academy',
  description: 'Handouts, checklists, and cheat sheets for the Java Academy',
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
      { text: 'Demo Code', link: 'https://github.com/craigmckeachie/java-academy-demos' },
    ],
    sidebar: buildSidebar(),
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/craigmckeachie/java-academy-demos' }],
    footer: { message: 'Questions? Ask in Teams or at the Help Desk.' },
  },
})
