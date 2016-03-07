"use strict";

var loginApp = angular.module("loginApp", ["firebase"]);

loginApp.controller("LoginCtrl", ["$scope", "$firebaseAuth",
	function($scope, $firebaseAuth) {
		var fb = new Firebase("https://found-a-thing.firebaseio.com");
		$scope.auth = $firebaseAuth(fb);

		$scope.auth.$onAuth(function(authData) {
			$scope.authData = authData;
		});

		$scope.login = function() {
			$scope.auth.$authWithOAuthPopup("google");
		};

		$scope.logout = function() {
			$scope.auth.$unauth();
		};
	}
]);
