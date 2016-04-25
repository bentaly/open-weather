(function () {
    'use strict';
    angular.module('bh.controllers')
        .controller('CourseCtrl', ['$scope',
            function ($scope) {

            	$scope.greenContent = {
            		img: "/images/helicopter.jpg",
            		copy: {
	            		title: "Foundation Property Maintenance Course",
	            		text: "This training course is designed to provide you with a broad range of skills suitable for a career in property maintenance."
					}
            	};
            
            }]);
})();