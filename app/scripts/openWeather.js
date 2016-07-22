/*global window*/
(function() {

  'use strict';

  angular.module('ow',
    ['ngResource',
     'ui.router',
     'templates',
     'ow.directives',
     'ow.services',
     'ow.controllers',
     'ow.filters',
     'ow.factories',
     'google.places'     
    ]);

  // nested modules
  angular.module('ow.directives', []);
  angular.module('ow.controllers', []);
  angular.module('ow.services', []);
  angular.module('ow.factories', []);
  angular.module('ow.filters', []);
  angular.module('templates', []);
})();
