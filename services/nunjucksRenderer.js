const nunjucks = require('nunjucks')

nunjucks.configure('views', { autoescape: true })

module.exports = nunjucks
