import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🍭",
  description: "🍭的笔记",
  head: [
    ['link', { rel: 'icon', href: '/lollipop.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "笔记",
        items: [
          { text: "博客的搭建", link: "/notes/blog-building/vitepress" },
          { text: "Electron", link: "/notes/electron/electron" },
          { text: "CSS", link: "/notes/css" },
        ],
      },
    ],

    sidebar: [
      {
        text: "博客的搭建",
        items: [{ text: "vitepress", link: "/notes/blog-building/vitepress" }],
      },
      {
        text: "Electron",
        items: [{ text: "electron", link: "/notes/electron/electron" }],
      },
      {
        text: "CSS",
        link: "/notes/css/index",
        items: [{ text: "图形", link: "/notes/css/graph" }],
      },
      {
        text: 'Windows',
        items: [
          { text: 'nvm', link: '/notes/windows/nvm' },
          { text: 'windows环境，解决VSCode的终端不是管理员权限打开的问题', link: '/notes/windows/powerShell01' }
        ]
      },
      {
        text: 'NPM',
        items: [
          { text: 'command', link: '/notes/npm/command' }
        ]
      }
      // {
      //   text: '服务器',
      //   items: [
      //     { text: 'jenkins', link: '/server/jenkins' }
      //   ]
      // }
      // {
      //   text: "javascript",
      //   link: "/notes/javascript",
      //   items: [],
      // },
      // {
      //   text: 'es6+',
      //   link: '/notes/es6+/gai-lan',
      //   items: [
      //     { text: '概览', link: '/notes/es6+/gai-lan' },
      //   ]
      // },
    ],
  },
});
