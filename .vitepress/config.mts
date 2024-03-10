import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " ",
  description: "Ipush Documentation",
  themeConfig: {
    logo: {
      light: '/logo-light.png',
      dark: '/logo-dark.png'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/docs/index.html' },
      { text: 'Examples', link: 'https://github.com/ipush-id/ipush-example/tree/main/' },
      { text: 'Dashboard', link: 'https://app.ipush.id' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/docs/' }
        ]
      },
      {
        text: 'Ipush JS',
        items: [
          { text: 'Installation', link: '/docs/js' },
          { text: 'API', link: '/docs/js-api' }
        ]
      },
      {
        text: 'Ipush PHP',
        items: [
          { text: 'Installation', link: '/docs/php' },
          { text: 'API', link: '/docs/php-api' }
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
