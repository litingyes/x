import { basename, resolve } from 'node:path'
import { createContentLoader } from 'vitepress'
import { getGitTimestamp } from './utils/getGitTimestamp'

declare module 'vitepress' {
  interface ContentData {
    lastUpdated: number
  }
}

export default createContentLoader('posts/*.md', {
  async transform(_data) {
    const data = await Promise.all(_data.map(async (item) => {
      const filePath = resolve(__dirname, `../../posts/${basename(item.url, '.html')}.md`)
      item.lastUpdated = await getGitTimestamp(filePath)

      return item
    }))

    return data
  },
})

export interface Data {
  url: string
  frontmatter: {
    title: string
    description: string
  }
  lastUpdated: number
}
declare const data: Data[]
export { data }
