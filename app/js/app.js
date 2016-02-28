var checkinWiki = angular.module('checkinWiki',['ngRoute','mappingController']);
checkinWiki.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/applicationLists',{
		templateUrl: 'partials/service-list.html',
		controller: 'serviceListController'
	})
	.when('/services-list/:application', {
		templateUrl: 'partials/service-details.html',
		controller: 'serviceDetailsController'
	})
	.otherwise ({
		redirectTo: 'applicationLists'
	});
		
}]);

