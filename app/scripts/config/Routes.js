
(function () {

    'use strict';

    /*
     * Set up a list of routes to be used by the application.
     */
    angular.module('bh')
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider

                .state('HOME', {
                    url: "/",
                    views: {
                        "contentView": { templateUrl: "partials/home.html" }
                    }
                })

                .state('COURSE', {
                    url: "/course",
                    views: {
                        "contentView": { templateUrl: "partials/course.html" }
                    }
                })
                
                .state('TESTIMONIALS', {
                    url: "/testimonials",
                    views: {
                        "contentView": { templateUrl: "partials/testimonials.html" }
                    }
                })

                .state('PATRONS', {
                    url: "/patrons",
                    views: {
                        "contentView": { templateUrl: "partials/patrons.html" }
                    }
                })
                .state('TEAM', {
                    url: "/team",
                    views: {
                        "contentView": { templateUrl: "partials/team.html" }
                    }
                })

                .state('EVENTS', {
                    url: "/events",
                    views: {
                        "contentView": { templateUrl: "partials/events.html" }
                    }
                });

            if(window.history && window.history.pushState){
                  $locationProvider.html5Mode({
                         enabled: true,
                         requireBase: false
                  });
            }   
        });
})();
