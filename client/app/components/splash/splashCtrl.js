var splash = angular.module('quizteam.splash', []);

splash.controller('splashCtrl', ['$scope', '$state', 
  function($scope, $state) {
  
  $scope.myActiveSlide = 0;
  $scope.goToLobby = function() {
    $state.go('selection');
  };
}]);