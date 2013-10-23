'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
    controller('AppCtrl',function ($scope, $http, AppInfoFactory) {

        $scope.appInfo = AppInfoFactory.getAppInfo();

        $http({
            method: 'GET',
            url: '/api/name'
        }).
            success(function (data, status, headers, config) {
                $scope.name = data.name;
            }).
            error(function (data, status, headers, config) {
                $scope.name = 'Error!'
            });

    }).
    controller('CaseListCtrl', function ($scope, CaseFactory) {
        $scope.caseList = CaseFactory.getAllCases();

        $scope.delCase = function(targetCase) {
            var caseId = targetCase.caseId;
            CaseFactory.deleteCase(caseId);
            $scope.caseList = CaseFactory.getAllCases();
        }
    }).
    controller('CaseProfileCtrl', function ($scope, CaseFactory, $routeParams) {
        var caseId = $routeParams.identifier;
        $scope.caseProfile = CaseFactory.getCaseDetail(caseId);

    }).
    controller('CaseRegistryCtrl', function ($scope, CaseFactory) {
        $scope.addCase = function() {
            var newCase = angular.copy($scope.newCase);
            CaseFactory.addCase(newCase, function() {
                console.log('Case has been submitted to server!');
                //TODO add some UI responsive effects
            });
            $scope.newCase = {}; //clear the form for the next submission
        }

    }).
    controller('MyCtrl1', function ($scope, CaseFactory) {
        // write Ctrl here

    }).
    controller('MyCtrl2', function ($scope) {
        // write Ctrl here

    });