'use strict';
angular.module('kaolaApp')
.controller('headerCtrl',['$scope','$rootScope',function($scope,$rootScope){
	$rootScope.setNavIndex = function(index){
		$scope.index = index;
	}
}]);