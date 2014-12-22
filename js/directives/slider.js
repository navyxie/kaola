'use strict';
angular.module('kaolaApp.sliderDirective',[])
.directive('slide',[function(){
    return {
        restrict:'ECA',
        scope:{
            cursorWidth:'@cursorWidth',
            slideWidth:'@slideWidth',
            slideHeight:'@slideHeight'
        },
        template:'<div class="slideContainer" style="position:relative;"><div class="slideCursor" style="position:absolute;"></div></div>',
        link:function(scope,element,attr){
            var cursorWidth = scope.cursorWidth || 16;
            var slideWidth = scope.slideWidth || 100;
            var slideHeight = slideHeight || 12;
            var slideContainer = element.find('.slideContainer');
            slideContainer.css({height:slideHeight+'px',width:slideWidth+'px'});
            var slideCursor = element.find('.slideCursor');
            slideCursor.css({width:cursorWidth+'px',height:cursorWidth+'px'});
            console.log(cursorWidth ,slideContainer,slideCursor);
        }
    }
}]);