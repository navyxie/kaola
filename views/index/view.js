'use strict';
angular.module('kaolaApp.IndexView',['ngRoute','kaolaApp.slideDirective','duScroll'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:"views/index/view.html",
		controller:'indexCtrl'
	});
}]).controller('indexCtrl',['$scope','$window','$document','$interval','$timeout',function($scope,$window,$document,$interval,$timeout){
	var i = 0;
	var defaultTop = 0;
	var flag = false;
	var direction = null;
	var scrollFn = function(){
		if(!flag && defaultTop != $document.scrollTop()){
			flag = true;
			console.log(defaultTop,$document.scrollTop())
			if(defaultTop > $document.scrollTop()){
				direction = 'up';
				--i;
			}else{
				++i;
				direction = 'down';
			}			
			console.log(direction);
			console.log(i);
			$document.scrollTop(200*(++i));
			$timeout(function(){
				defaultTop = $document.scrollTop();
				flag = false;
			},350);			
		}
	}
	$document.on('scroll',scrollFn);
}]).value('duScrollOffset', 30);