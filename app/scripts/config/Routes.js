(function () {

    'use strict';

    angular.module('ow')
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider

                .state('HOME', {
                    url: "/",
                    views: {
                        "contentView": { templateUrl: "partials/home.html" }
                    }
                });
        });
})();
