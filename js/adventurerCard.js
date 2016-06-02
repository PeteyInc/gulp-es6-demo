angular.module('devmtnTravel')
.directive('adventurerCard', () => {
  return {
    restrict: 'A',
    templateUrl: '../views/adventureCard.html',
    scope: {
      img: '@',
      title: '@',
      summary: '@'
    }
  }
})
