const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

// routes.add(name, pattern = /name, page = name)
routes.add('index', '/')
routes.add('about', '/about/:id')
routes.add('room_host', '/host')
routes.add('room_detail', '/room/:id')
routes.add('account/verify', '/account/verify/:key')