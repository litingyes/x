import { basename, dirname } from 'node:path'
import { spawn } from 'cross-spawn'
import fs from 'fs-extra'

const cache = new Map<string, number>()

export function getGitTimestamp(file: string, type: 'created' | 'lastUpdated' = 'lastUpdated') {
  const key = `${file}|${type}`

  const cached = cache.get(key)
  if (cached)
    return cached

  if (!fs.existsSync(file))
    return 0

  return new Promise<number>((resolve, reject) => {
    const child = spawn(
      'git',
      ['log', type === 'created' ? '--max-parents=0' : '-1', '--pretty="%ai"', basename(file)],
      { cwd: dirname(file) },
    )

    let output = ''
    child.stdout.on('data', (d) => {
      output += String(d)
    })

    child.on('close', () => {
      let timestamp = +new Date(output)
      if (Number.isNaN(timestamp)) {
        timestamp = 0
      }
      cache.set(key, timestamp)
      resolve(timestamp)
    })

    child.on('error', reject)
  })
}
