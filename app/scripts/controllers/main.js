'use strict';

angular.module('digitalgremlin.Gemstore')

  .controller('MainCtrl', function($scope, $location, version) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;

  });
