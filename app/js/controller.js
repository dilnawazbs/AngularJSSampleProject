var mappingController = angular.module('mappingController',[]);

mappingController.controller('serviceListController', ['$scope', '$http', function($scope, $http){
	$http.get('services-list/serviceslist.json').success(function(data){
		$scope.serviceslists = data; 
	})
	$scope.listOrder = 'id';
}]);

mappingController.controller('serviceDetailsController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
	$http.get('services-list/'+$routeParams.application+'.json').success(function(data){
		$scope.servicesDetails = data; 
		$scope.mainImageUrl = data.images[0].image;
	});
	$scope.application = $routeParams.application;
	$scope.setImage = function(image) {
		$scope.mainImageUrl = image;
	};
}]);

