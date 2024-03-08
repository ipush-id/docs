import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ipush",
  description: "Ipush Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/docs/index.html' },
      { text: 'Examples', link: 'https://github.com/ipush-id/ipush-example/tree/main/' }
    ],

    sidebar: [
      {
        text: 'Ipush JS',
        items: [
          { text: 'Installation', link: '/js' },
          { text: 'Usage', link: '/js' }
        ]
      },
      {
        text: 'Ipush PHP',
        items: [
          { text: 'Installation', link: '/php' },
          { text: 'Usage', link: '/php' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'PHP Example', link: 'https://github.com/ipush-id/ipush-example/tree/main/php' },
          { text: 'JavaScript Example', link: 'https://github.com/ipush-id/ipush-example/blob/main/frontend/index.html' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
