angular.module("todoApp", [])

.controller('mainCtrl', function($scope) {
	$scope.helloWorld = function() {
		console.log("Hello from the controller!");
	}
});