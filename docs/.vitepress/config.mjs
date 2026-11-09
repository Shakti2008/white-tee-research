import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'White Tee Research',
  description: 'An evidence-led research hub for a future plain white T-shirt brand.',
  base: process.env.DOCS_BASE || '/',
  lastUpdated: true,
  themeConfig: {
    search: { provider: 'local' },
    nav: [
      { text: 'Landscape', link: '/landscape' },
      { text: 'Competitors', link: '/competitors/' },
      { text: 'Research plan', link: '/research-plan' }
    ],
    sidebar: [
      { text: 'Project', items: [
        { text: 'Overview', link: '/' },
        { text: 'Brief & open decisions', link: '/brief' },
        { text: 'Competitive landscape', link: '/landscape' },
        { text: 'Research plan', link: '/research-plan' },
        { text: 'Evidence standards', link: '/methodology' },
        { text: 'Sources', link: '/sources' }
      ] },
      { text: 'Competitors', items: [
        { text: 'Profile directory', link: '/competitors/' },
        { text: 'Lady White Co.', link: '/competitors/lady-white-co' },
        { text: 'Son of a Tailor', link: '/competitors/son-of-a-tailor' },
        { text: 'Profile template', link: '/competitors/template' }
      ] }
    ],
    footer: { message: 'Research in progress · Claims need evidence. Hypotheses need testing.' }
  }
})
