'use strict';
angular.module('kaolaApp.IndexView',['ngRoute','kaolaApp.slideDirective'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:"views/index/view.html",
		controller:'indexCtrl'
	});
}]).controller('indexCtrl',[function(){

}]);