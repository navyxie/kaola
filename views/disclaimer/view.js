'use strict';
angular.module('kaolaApp.DisclaimerView',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/disclaimer',{
		templateUrl:"views/disclaimer/view.html",
		controller:'disclaimerCtrl'
	});
}]).controller('disclaimerCtrl',['$rootScope',function($rootScope){
	$rootScope.setNavIndex(104);
}]);