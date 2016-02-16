var tinderTestApp = angular.module('tinderTestApp', []);

tinderTestApp.factory('userList', function($q, $timeout, $http) {
    var userList = {
        fetch: function(callback) {
          return $http.get('userList.json').then(function(response) {
              return response.data;
          });
        }
    };
    return userList;
});

