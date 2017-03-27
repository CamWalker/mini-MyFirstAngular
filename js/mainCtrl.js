// angular.module('friendsList');

angular.module('friendsList').controller('mainCtrl', function ($scope) {
  $scope.friends = ['Gil', 'Kennedy', 'Craig', 'Hannah'];

  $scope.addFriends = function () {
    $scope.friends.push($scope.newFriend);
  }
});
