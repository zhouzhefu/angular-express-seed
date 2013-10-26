'use strict';
function mergeArray(arr1, arr2) {
    for (var one in arr2) {
        arr1.push(arr2[one]);
    }

    return arr1;
}
// Declare app level module which depends on filters, and services

var angularModules = ['ngRoute'];
var appModules = [
    'myApp.controllers',
    'myApp.filters',
    'myApp.services',
    'myApp.directives'
];
var allModules = mergeArray(angularModules, appModules);

console.log(allModules);

angular.module('myApp', allModules).
config(function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/view1', {
                templateUrl: 'partials/partial1',
                controller: 'MyCtrl1'
            }).
            when('/view2', {
                templateUrl: 'partials/partial2',
                controller: 'MyCtrl2'
            }).
            when('/caseList', {
                templateUrl: 'partials/caseList',
                controller: 'CaseListCtrl'
            }).
            when('/caseProfile/:identifier', {
                templateUrl: 'partials/caseProfile',
                controller: 'CaseProfileCtrl'
            }).
            when('/caseRegistry', {
                templateUrl: 'partials/caseRegistry',
                controller: 'CaseRegistryCtrl'
            }).
            otherwise({
                redirectTo: '/caseList'
            });

  $locationProvider.html5Mode(true);
});





