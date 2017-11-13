// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home/home.html',
            controller  : 'MainController'
        })

        // route for the about page
        .when('/roles', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/registers', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })

        .when('/config', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
});







// create the controller and inject Angular's $scope

// scotchApp.controller('mainController', function($scope) {
//     // create a message to display in our view
//     $scope.message = 'Everyone come and see how good I look!';
//
//
// });


scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
