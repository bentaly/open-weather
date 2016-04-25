(function () {
    'use strict';
    angular.module('bh.controllers')
        .controller('PatronsCtrl', ['$scope', 'PatronService',
            function ($scope, PatronService) {

            	$scope.greenContent = {
            		img: "/images/patrons-splash.jpg",
            		copy: {
	            		title: "Patrons",
	            		text: "We are on the lookout for Patrons and Ambassadors to further our work and in return gain a range of benefits. You can claim tax relief by deducting the value of your donations from your total business profits before you pay tax."
					}
            	};

                $scope.patronTypes = PatronService.patronTypes;
            
            }]);
})();
