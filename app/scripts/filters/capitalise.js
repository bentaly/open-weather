(function () {
   
    'use strict';
   
    angular.module('ow.filters')
		.filter('capitalise', function() {
		    return function(input) {
		      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
		    }
	});
})();