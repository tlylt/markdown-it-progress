const md = require('markdown-it')()
  .use(require('./src'), {})

console.log(md.render(
    '```progressbar\n test```'
))