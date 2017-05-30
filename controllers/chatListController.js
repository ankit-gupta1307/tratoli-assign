app.controller('chatListController', ['$scope', '$window', '$location', '$routeParams', '$localStorage', 'registeredUser',
    function($scope, $window, $location, $routeParams, $localStorage, registeredUser) { 
        $scope.number = $routeParams.number;
        registeredUser.senderNumber = parseInt($routeParams.number);
        $scope.chatList = []
        $localStorage.registeredUser.forEach(function(item) {
            if(item.phoneNumber != $scope.number) {
                $scope.chatList.push(item.phoneNumber);
            }
        });
        $scope.listClick = function(number) {
            $location.path('/chatroom/' + $scope.number + '/' + number);
        } 
}]);

app.service('registeredUser', function() {
    this.registeredUser= [
          {
            phoneNumber: 7073232208,
            password: 'ankit123'  
          }, 
          {
            phoneNumber: 9935166950,
            password: 'deepak'
          }
    ]; 
    this.chatRoomNumber = [];
    this.senderNumber = '';
    this.receiverNumber = '';
    this.count = 0;
});