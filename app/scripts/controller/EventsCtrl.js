(function () {
    'use strict';
    angular.module('bh.controllers')
        .controller('EventsCtrl', ['$scope', 'EventService',
            function ($scope, EventService) {

            	$scope.greenContent = {
            		img: "/images/black-tie-dinner.jpg",
            		copy: {
	            		title: "Events",
	            		text: "Our training wouldn’t be possible without your generous fundraising efforts."
					}
            	};

                $scope.activeEventInd = 0;
            
                $scope.changeEvent = function(index) {
                    $scope.activeEventInd = index;
                };

                $scope.events = EventService.events;
            }]);
})();
