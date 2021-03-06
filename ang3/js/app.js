var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .otherwise({
            redirectTo: '/'
        }) ;
    $routeProvider
        .when('/photos/:id', {
            controller: 'PhotoController',
            templateUrl: 'views/photos.html'
        })
        .otherwise({
            redirectTo: '/'
        });

});