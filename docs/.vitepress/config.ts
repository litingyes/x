import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'
import { getGitTimestamp } from './theme/utils/getGitTimestamp'

declare module 'vitepress' {
  interface PageData {
    created?: number
  }
}

export default defineConfig({
  title: 'X',
  titleTemplate: 'X',
  lang: 'zh-CN',
  description: 'Coding & Life',
  lastUpdated: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/litingyes/x' },
    ],
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  async transformPageData(pageData, ctx) {
    const filePath = resolve(ctx.siteConfig.root, pageData.filePath)
    pageData.created = await getGitTimestamp(filePath, 'created')
  },
})
