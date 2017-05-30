app.controller('loginController', ['$scope', '$window', '$location', '$routeParams', '$localStorage', 'registeredUser',
    function($scope, $window, $location, $routeParams, $localStorage, registeredUser) { 
      $scope.showHints = true;
      $scope.user = {
          phoneNumber: "",
          password: "",
      };
        
      $scope.loginUser = {
          phoneNumber: "",
          password: "",
      }
      if($localStorage.registeredUser == undefined || $localStorage.registeredUser.length == 2) {
        $localStorage.registeredUser = registeredUser.registeredUser;
      }
      
     
      $scope.register = function() {
          if($scope.user.phoneNumber.toString().length == 10 && $scope.user.password.length > 3) { 
              $localStorage.registeredUser.push($scope.user);
               $location.path('/chatlist/' + $scope.user.phoneNumber);
//              questionaire.username = $scope.user.name;
//              $location.replace();
//              $location.path('/question/0');
          } else {
              
          }
      } 
      
      $scope.login = function() {
          for( var i = 0; i < $localStorage.registeredUser.length; i++ ) {
            if($localStorage.registeredUser[i].phoneNumber == $scope.loginUser.phoneNumber &&       $localStorage.registeredUser[i].password == $scope.loginUser.password) {
                $location.path('/chatlist/' + $scope.loginUser.phoneNumber);
               
            } else {
              
            }
             
          }
      }
      
}]);