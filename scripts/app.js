angular.module("todoApp", [])

.controller('mainCtrl', function($scope) {
	$scope.helloWorld = function() {
		console.log("Hello from the controller!");
	};

	$scope.todos = [
		{"name": "make food",},
		{"name": "eat food"},
		{"name": "finish all food"}
	];
})

// Constructed to demo the use of child/parent scope
.controller('demoCtrl', function($scope) {
	$scope.hello = function() {
		console.log("Hello from the demo controller!");
	}
});