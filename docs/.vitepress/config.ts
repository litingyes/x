import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { getGitCreatedTimestamp } from './theme/utils/getGitCreatedTimestamp'

declare module 'vitepress' {
  interface PageData {
    created?: number
  }
}

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
  },
 async transformPageData(pageData, ctx) {
    const filePath = resolve(ctx.siteConfig.root,pageData.filePath)
    pageData.created = await getGitCreatedTimestamp(filePath)
  },
})
