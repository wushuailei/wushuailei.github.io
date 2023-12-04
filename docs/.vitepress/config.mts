import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🍭",
  description: "🍭的笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes' }
    ],

    sidebar: [
      {
        text: '博客的搭建',
        items: [
          { text: 'vitepress', link: '/notes' }
        ]
      }
    ]
  }
})
