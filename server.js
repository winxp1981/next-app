const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
//const handler = routes.getRequestHandler(app)

var args = {req:null, res:null, route:null, query:null};
const handler = routes.getRequestHandler(app, (args) => {
  // console.log('custom handler')
  args.res.header("Access-Control-Allow-Origin", "*");
  args.res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  app.render(args.req, args.res, args.route.page, args.query)
})

// With express
const express = require('express')
app.prepare().then(() => {
  express().use(handler).listen(3000)
})
