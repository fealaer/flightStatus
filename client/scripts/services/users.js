'use strict';

angular.module('startingPointJsApp')
    .factory('Users', ['$resource',
      function ($resource) {
        return $resource('api/v0/users', {}, {});
      }]);
