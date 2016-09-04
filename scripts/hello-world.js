angular.module("todoApp")
.directive('helloWorld', function() {
	return {
		template: "<h1>Jake's Todos</h1>",
		restrict: "E" // can also use the "A" tag to restrict the directive's use to be an attribute only.
	};
});