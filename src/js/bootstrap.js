var app = angular.module('app', ['ngRoute', 'ngAnimate', 'infinite-scroll']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/',
            controller  : 'HomeCtrl'
        })
        .when('/about', {
            templateUrl : 'pages/about',
            controller  : 'AboutCtrl'
        })
        .when('/contact', {
            templateUrl : 'pages/contact',
            controller  : 'ContactCtrl'
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});