'use strict';
angular.module('kaolaApp.carouselDirective',[])
.directive('carousel',['$interval',function($interval){
	return {
		restrict: 'ECA',
		scope:{
			index:"@slideIndex",
			space:"@slideSpace",
			name:"@slideName"
		},
		link:function(scope, element, attr){
			scope.index = scope.index  || 0;
			var children = element.children();
			if(children.length <= 1){
				return;
			}
			var len = children.length;
			var space = scope.slideSpace || 3000;			
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
			var intervalTime = startSlide();//$interval.cancel(intervalTime)
			function startSlide(){
				return $interval(function(){
					++scope.index;
					if(scope.index >= len){
						scope.index = 0;
					}
					updateDom(scope.index);
				},space);
			}
			element.on('mouseenter',function(){
				intervalTime && $interval.cancel(intervalTime)
			}).on('mouseleave',function(){
				intervalTime = startSlide();
			});
		}
	}
}]).controller('carouselCtrl',function($scope){
});