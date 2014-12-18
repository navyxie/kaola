'use strict';
angular.module('kaolaApp.JoinView',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/join',{
		templateUrl:"views/join/view.html",
		controller:'joinCtrl'
	});
}]).controller('joinCtrl',[function(){

}]);