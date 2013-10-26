'use strict';

/* jasmine specs for controllers go here */
describe('Baby Case controllers', function () {
    console.log('unit test of controllers start!');

    beforeEach(function () {
        this.addMatchers({
            toEqualData: function (expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(module('myApp'));
    beforeEach(module('myApp.controllers'));
    beforeEach(angular.mock.module('myApp.services'));

    describe('AppCtrl', function () {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            //mock the response
            $httpBackend.expectGET('/resource/appInfo/default').respond({name: 'Baby File System'});
            $httpBackend.expectGET('/api/name').respond({name: 'Bob'});

            scope = $rootScope.$new();
            ctrl = $controller('AppCtrl', {$scope: scope});
        }));


        it('should get the name from ajax', function () {
            $httpBackend.flush();

            expect(scope.appInfo).toEqualData({name: 'Baby File System'});
            expect(scope.name).toEqualData('Bob');
        });

    });

});
