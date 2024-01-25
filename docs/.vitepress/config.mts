import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🍭",
  description: "🍭的笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "笔记",
        items: [
          { text: "博客的搭建", link: "/blog-building/vitepress" },
          { text: "前端", link: "/frontend/css" },
          { text: "Electron", link: "/electron/password-management-tool" },
        ],
      },
    ],

    sidebar: [
      {
        text: "博客的搭建",
        items: [{ text: "vitepress", link: "/blog-building/vitepress" }],
      },
      {
        text: "前端",
        items: [
          {
            text: "css",
            link: "/frontend/css",
            items: [{ text: "图形", link: "/frontend/css/graph" }],
          },
        ],
      },
      // {
      //   text: 'Electron',
      //   items: [
      //   ]
      // }
      // {
      //   text: '服务器',
      //   items: [
      //     { text: 'jenkins', link: '/server/jenkins' }
      //   ]
      // }
    ],
  },
});
