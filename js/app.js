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

app.controller('AppCtrl', function($scope) {
});

app.controller('HomeCtrl', function($scope) {
    $scope.pageClass = 'home';
});

app.controller('AboutCtrl', function($scope) {
    $scope.pageClass = 'about';
});

app.controller('ContactCtrl', function($scope) {
    $scope.pageClass = 'contact';
});

app.animation('.page', function(){
    return {
        leave: function(element, done){
            TweenMax.fromTo(element, 0.4, {opacity: 1}, {opacity: 0, onComplete: done});
        },
        enter: function(element, done){
            TweenMax.fromTo(element, 0.8, {opacity: 0}, {opacity: 1, onComplete: done});
        }
    };
});

app.directive('appList', function(){
    return function(scope, element, attrs){
        scope.items = [];
        scope.loadAmount = 50;
        var caption = attrs.appList;

        scope.loadMore = function(){
            var currentAmount = scope.items.length;

            console.log('loading more for ' + caption + '. current total: ' + currentAmount);

            for(var i=currentAmount; i<currentAmount+scope.loadAmount; i++){
                scope.items.push(caption + ' ' + i);
            }
        };
    }
});