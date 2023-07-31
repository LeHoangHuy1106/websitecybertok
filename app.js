(function() {
  var app = angular.module('spaApp', []);
})();
// app.js
if (!angular.isDefined(app)) {
  var app = angular.module('spaApp', []);
  // Các thành phần của ứng dụng khác (controller, service, directive,...)
}
app.config(function($routeProvider) {
  var routes = [
    { path: '/', template: 'index.html' },
    { path: '/about', template: 'about.html' },
    { path: '/career', template: 'career.html' },
    { path: '/chanel', template: 'chanel.html' },
    { path: '/contact', template: 'contact.html' },
    { path: '/gallary', template: 'gallary.html' },
    { path: '/index', template: 'index.html' },
    { path: '/service', template: 'service.html' },

  ];



  $routeProvider.otherwise({ redirectTo: '/' });
});
