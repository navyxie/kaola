'use strict';
angular.module('kaolaApp.slideDirective',[])
.directive('slider',['$interval',function($interval){
	return {
		restrict: 'ECA',
		scope:{
			index:"@slideIndex",
			name:"@slideName"
		},
		link:function(scope, element, attr){
			scope.index = scope.index  || 0;
			// console.log(scope.name);
			var children = element.children();
			var len = children.length;			
			function updateDom(index){
				angular.forEach(children,function(item,key){
					if(index == key){
						angular.element(item).css({display:'block',opacity:1});
					}else{
						angular.element(item).css({display:'none',opacity:0});
					}
				});
			}
			updateDom(scope.index);
			$interval(function(){
				++scope.index;
				if(scope.index >= len){
					scope.index = 0;
				}
				updateDom(scope.index);
			},3000);
		}
	}
}]).controller('sliderCtrl',function($scope){
	$scope.name = 'navy';
});