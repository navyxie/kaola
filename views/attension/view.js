'use strict';
angular.module('kaolaApp.AttensionView',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/attension',{
		templateUrl:"views/attension/view.html",
		controller:'attensionCtrl'
	});
}]).controller('attensionCtrl',[function(){

}]);