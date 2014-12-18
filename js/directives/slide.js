'use strict';
angular.module('kaolaApp.slideDirective',[])
.directive('slider',function(){
	return {
		restrict: 'ECA',
		link:function(scope, element, attr){
			// console.log(angular.element('ngSlide'));
			var children = element.children();
			angular.forEach(children,function(item,key){
				console.log(angular.element(item));
			});
		}
	}
});