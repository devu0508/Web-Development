const app = angular.module('myApp', []);

app.controller('MainController', ['$scope', function($scope) {
  $scope.appTitle = 'My Responsive Angular App';
  $scope.currentView = 'home';
  $scope.submitted = false;

  $scope.user = {
    name: '',
    email: ''
  };

  $scope.setView = function(view) {
    $scope.currentView = view;
    $scope.submitted = false;
  };

  $scope.submitForm = function() {
    $scope.submitted = true;
  };
}]);
