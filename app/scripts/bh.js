/*global window*/
(function() {

  'use strict';

  angular.module('bh',
    ['ngResource',
     'ngAnimate',
     'ngTouch',
     'ngSanitize',
     'ui.router',
     '_',
     'templates',
     'bh.directives',
     'bh.services',
     'bh.controllers',
     'bh.filters',
     'bh.factories'     
    ]);

  // underscore integration
  angular.module('_', [])
    .factory('_', function() { return window._; });

  angular.module('Math', [])
        .factory('Math', function() { return window.Math; });

  // nested living modules
  angular.module('bh.directives', []);
  angular.module('bh.controllers', []);
  angular.module('bh.services', []);
  angular.module('bh.factories', []);
  angular.module('bh.filters', []);
  angular.module('templates', []);
})();
