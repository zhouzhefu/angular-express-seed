'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource']).
    value('version', '0.2').
    factory('AppInfoFactory', function($resource) {
        var factory = {};
        var _resource = $resource('/resource/appInfo/:identifier', {}, {
            default: {
                method:'GET',
                params:{identifier:'default'},
                isArray:false
            }
        });

        factory.getAppInfo = function() {
            return _resource.default();
        };

        return factory;
    }).
    factory('CaseFactory', function($resource) {
        var factory = {};
        var _resource = $resource('/resource/case/:identifier', {}, {
            all: {
                method: 'GET',
                params: {identifier:'all'},
                isArray: true
            },
            read: {
                method: 'GET',
                //params decided by passed in function param
                isArray: false
            },
            delete: {
                method: 'DELETE'
            },
            add: {
                method: 'POST',
                params: {identifier: ''}
            }
        });

        factory.getAllCases = function() {
            return _resource.all();
        };

        factory.getCaseDetail = function(caseId) {
            return _resource.read({identifier: caseId});
        };

        factory.deleteCase = function(caseId) {
            console.log('angular Deleting: ' + caseId);
            return _resource.delete({identifier: caseId});
        };

        factory.addCase = function(newCase, callback) {
            console.log(newCase.caseDesc + ' is going to be added');
            _resource.add(newCase,
                function(response) {
                    callback();console.log(response);
                }, function(error) {
                    console.log('Error encountered: ' + error);
                });

        }

        return factory;
    });
