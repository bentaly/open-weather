(function () {
    'use strict';
    angular.module('bh.controllers')
        .controller('HomeCtrl', ['$scope', '$interval', '$timeout', '$window',
            function ($scope, $interval, $timeout, $window) {

            	$scope.greenContent = {
            		img: "/images/haskell.png",
            		copy: {
	            		title: "Help Haskell Build Heroes",
	            		text: "Building Heroes is an inspirational charity. This second lease of life is exactly what our service people need, and provides a role, an income to support their family, and also dignity.",
						secondaryText: "James Haskell – England and Wasps"
					}
            	};
            
                var textInd = 0;

                var msgs = [
                    "There are over 120,000 unemployed Military Veterans in Britian today...",
                    "In the meantime our construction industry is facing a huge skills shortage...",
                    "Building Heroes trains our Military Veterans with construction skills",
                    "Leading to employment and a sense of worth so richly deserved."
                ];
                
                $scope.activeText = msgs[textInd];
                
                $scope.twitterLoaded = function() {
                    if ($window.innerWidth >= 600) {
                        $scope.$broadcast('resize',{});
                    }

                    $scope.showContent = true;
                };
            
                var incrementTextIndex = function() {
                    $scope.activeText = msgs[textInd];
                    
                    $scope.fadeIn = true;
                    
                    $timeout(function() {
                        
                        $scope.fadeIn = false;

                        if (textInd === 3) {
                            textInd = 0;
                        } else {
                            textInd++;
                        }
                    }, 4500);
                };

                var stop = $interval(incrementTextIndex, 5000);

                incrementTextIndex();

                $scope.$on("$destroy", function() {
                    $interval.cancel(stop);
                    stop = undefined;
                });
            }]);
})();
