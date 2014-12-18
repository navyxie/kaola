'use strict';
angular.module('kaolaApp.GuideView',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/guide',{
		templateUrl:"views/guide/view.html",
		controller:'guideCtrl'
	});
}]).controller('guideCtrl',[function(){

}]);