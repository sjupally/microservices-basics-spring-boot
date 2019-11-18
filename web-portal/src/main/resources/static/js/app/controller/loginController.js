'use strict';

/**
 * @ngdoc function
 * @name oauthApp.controller:UserCtrl
 * @description
 * # PreviewPlaceHolderCtrl
 * Controller of the alertApp
 */
angular.module('oauthApp')
    .controller('loginController', function ($scope, $location, $http, dataService) {
        
    	$scope.login = function () {
//    		$scope.username, $scope.password http://localhost:8899
    		alert('called              ' +$scope.username + ' :::::::  '+ $scope.password);
    		$http.defaults.headers.common['Authorization'] = 'Basic ' + window.btoa('acme' + ':' + 'acmesecret');
    		$http.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
    		$http.post('http://localhost:8899/userauth/oauth/token?grant_type=password&username=dave&password=secret', {})
                .success(function (response) {
                	alert('called');
                    callback(response);
                });
    	};
    });