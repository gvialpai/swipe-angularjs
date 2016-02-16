angular
  .module('tinderTestApp')
  .controller('UsersController', function($scope, userList) {
      userList.fetch().then(function(data) {
          $scope.data = data;
      })
  });