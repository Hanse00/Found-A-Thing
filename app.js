"use strict";

var loginApp = angular.module("loginApp", []);

loginApp.controller("LoginCtrl", function($scope) {
	$scope.login = false;

	$scope.logIn = function() {
		$scope.login = true;
	}

	$scope.logOut = function() {
		$scope.login = false;
	}
});
