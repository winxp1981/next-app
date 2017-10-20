'use strict';

var nextRoutes = require('next-routes');
var routes = module.exports = nextRoutes();

// routes.add(name, pattern = /name, page = name)
routes.add('index', '/');
routes.add('about', '/about/:id');
routes.add('room_host', '/host');
routes.add('room_detail', '/room/:id');
routes.add('account/verify', '/account/verify/:key');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJuZXh0Um91dGVzIiwicmVxdWlyZSIsInJvdXRlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJhZGQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxhQUFhLEFBQW5CO0FBQ0EsSUFBTSxTQUFTLE9BQU8sQUFBUCxVQUFpQixBQUFoQzs7QUFFQTtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsU0FBb0IsQUFBcEI7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLFNBQW9CLEFBQXBCO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCxhQUF3QixBQUF4QjtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsZUFBMEIsQUFBMUI7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLGtCQUE2QixBQUE3QiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9ycmlzL3Byb2plY3QvbmV4dGpzIn0=