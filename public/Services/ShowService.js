angular.module('MyApp')
  .factory('ShowService', ['$resource', function($resource) {
    return $resource('/api/shows/:_id');
  }]);