'use strict';
angular.module('kaolaApp',
	[
		'ngRoute',
		'kaolaApp.IndexView',
		'kaolaApp.TeamView',
		'kaolaApp.GuideView',
		'kaolaApp.ContactView',
		'kaolaApp.AboutView',
		'kaolaApp.AttensionView',
		'kaolaApp.JoinView',
		'kaolaApp.DisclaimerView',
		'kaolaApp.PrivacyView'
	]
).config(['$routeProvider',function($routeProvider){
	$routeProvider.otherwise({redirectTo:'/'});
}]);