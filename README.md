# local-query

Query the local file directories.

### API:

```js
import localQuery, { NAME, CONTENT } from 'local-query'

const req = [queryName, queryContent]

const localMarkdown = localQuery(req, { path: __dirname, extension: 'md' })

/**
 * {
 *   data: {
 *     name: ['a.md', 'b.md', 'c.md'],
 *     content: [
 *       '# A\n some content in a.md',
 *       '# B\n some content in b.md',
 *       '# C\n some content in c.md',
 *     ]
 *   }
 * }
 */
```
