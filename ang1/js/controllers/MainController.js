app.controller('MainController', ['$scope', function($scope) {
  $scope.data = [{
    icon: 'img/move.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  },{
    icon: 'img/shutterbugg.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  },{
    icon: 'img/gameboard.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  }];
}]);