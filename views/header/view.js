'use strict';
angular.module('kaolaApp')
.controller('headerCtrl',['$scope',function($scope){
	$scope.index = 0;
	$scope.setNavIndex = function(index){
		$scope.index = index;
	}
}]);