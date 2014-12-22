'use strict';
angular.module('kaolaApp.TeamView',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/team',{
		templateUrl:"views/team/view.html",
		controller:'teamCtrl'
	});
}]).controller('teamCtrl',['$rootScope',function($rootScope){
	$rootScope.setNavIndex(1);
}]);