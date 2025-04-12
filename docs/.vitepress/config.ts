import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: "X",
  titleTemplate: 'X',
  lang: 'zh-CN',
  description: "Coding & Life",
  lastUpdated: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/litingyes/x' }
    ]
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})
