import fs from 'fs'
import path from 'path'
export const NAME = 'name'
export const CONTENT = 'content'

const defaultConfig = {
  path: './',
  extension: '',
}

export default (keys, config = defaultConfig) => {
  const allFiles = fs.readdirSync(config.path)
  const targetFiles = allFiles.filter(f => f.includes(config.extension))
  const result = targetFiles.reduce((res, file) => {
    let temp = res
    keys.forEach(key => {
      switch (key) {
        case NAME:
          return Object.assign(res, {
            data: Object.assign({}, res.data, {
              [NAME]: [...((res.data || {})[NAME] || []), file],
            }),
          })
          break
        case CONTENT:
          return Object.assign(res, {
            data: Object.assign({}, res.data, {
              [CONTENT]: [
                ...((res.data || {})[CONTENT] || []),
                fs.readFileSync(require.resolve(path.join(config.path, file)), { encoding: 'utf-8' }),
              ],
            }),
          })
          break
      }
    })
    return temp
  }, {})

  return result
}
