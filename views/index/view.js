'use strict';
var duScrollDuration = 350;
angular.module('kaolaApp.IndexView',['ngRoute','kaolaApp.slideDirective','kaolaApp.sliderDirective','duScroll'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:"views/index/view.html",
		controller:'indexCtrl'
	});
}]).controller('indexCtrl',['$scope','$window','$document','$interval','$timeout','$rootScope',function($scope,$window,$document,$interval,$timeout,$rootScope){
	$rootScope.setNavIndex(0);
	var i = 0;
	var defaultTop = 0;
	var flag = false;
	var direction = null;
	var scrollFn = function(){
		if(!flag && defaultTop != $document.scrollTop()){
			flag = true;
			if(defaultTop > $document.scrollTop()){
				direction = 'up';
				--i;
			}else{
				++i;
				direction = 'down';
			}			
			$document.scrollTop(1000*i);
			$timeout(function(){
				defaultTop = $document.scrollTop();
				flag = false;
			},duScrollDuration);			
		}
	}	
	$document.on('scroll',scrollFn);
	$scope.$on('$destroy',function(){
		$document.off('scroll',scrollFn);
	})
}]).value('duScrollDuration', duScrollDuration);