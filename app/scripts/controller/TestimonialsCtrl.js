(function () {
    'use strict';
    angular.module('bh.controllers')
        .controller('TestimonialsCtrl', ['$scope',
            function ($scope) {

            	$scope.greenContent = {
            		img: "/images/testimonial-back.jpg",
            		copy: {
	            		title: "Testimonials",
	            		text: "First-hand account from our graduated veterans."
					}
            	};
            
            }]);
})();
