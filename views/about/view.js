'use strict';
angular.module('kaolaApp.AboutView',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/about',{
		templateUrl:"views/about/view.html",
		controller:'aboutCtrl'
	});
}]).controller('aboutCtrl',['$rootScope',function($rootScope){
	$rootScope.setNavIndex(100);
}]);