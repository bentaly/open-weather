(function () {
  'use strict';
  angular.module('bh.controllers')
    .controller('PageCtrl', ['$scope', '$state',
   		function ($scope, $state) {
   			$scope.$on('$stateChangeStart', function(event, toState) {
   				$scope.activePage = toState.name;
   			});
    	}]);
})();
