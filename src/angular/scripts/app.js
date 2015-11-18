angular.module('demoApp', [])
  .controller('appCtrl', function ($scope, $http) {
    $scope.username = 'jcenturion';

    $scope.onClick  = function () {
      var apiUrl = 'https://api.github.com/users/' + $scope.username + '/repos';
      $http.get(apiUrl)
        .then(function (res) {
          $scope.repos = res.data;
        });
    };
  });
