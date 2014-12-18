'use strict';
angular.module('kaolaApp.PrivacyView',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/privacy',{
		templateUrl:"views/privacy/view.html",
		controller:'privacyCtrl'
	});
}]).controller('privacyCtrl',[function(){

}]);