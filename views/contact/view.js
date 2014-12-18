'use strict';
angular.module('kaolaApp.ContactView',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/contact',{
		templateUrl:"views/contact/view.html",
		controller:'contactCtrl'
	});
}]).controller('contactCtrl',[function(){

}]);