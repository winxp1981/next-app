const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

// routes.add(name, pattern = /name, page = name)
routes.add('blog', '/blog/:slug')
routes.add('about', '/about/:id')
routes.add('account/verify', '/account/verify/:key')
