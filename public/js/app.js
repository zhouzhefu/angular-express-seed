'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
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
