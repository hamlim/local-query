import local, { NAME, CONTENT } from './lib.js'

console.log(local([NAME, CONTENT], { path: __dirname, extension: 'js' }))
