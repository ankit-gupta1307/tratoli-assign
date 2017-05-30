app.controller('chatroomController', ['$scope', '$window', '$location', '$routeParams', '$localStorage', 'registeredUser',
    function($scope, $window, $location, $routeParams, $localStorage, registeredUser) { 
     $scope.senderNumber = $routeParams.sennumber;
     $scope.receiverNumber = $routeParams.recnumber;
     
     $scope.matchingNumber = parseInt($routeParams.sennumber)+parseInt($routeParams.recnumber);
     if($localStorage.uniqueNumber == undefined) {
         $localStorage.uniqueNumber = parseInt($routeParams.sennumber)+parseInt($routeParams.recnumber);
     } else if($scope.matchingNumber != $localStorage.uniqueNumber) {
        console.log('i am in ');
        $localStorage.objectsave = [];
         $localStorage.objectsave.push({
             unique: $scope.matchingNumber,
             phoneNumber: $scope.senderNumber,
             messages: []
         });
        $localStorage.uniqueNumber = parseInt($routeParams.sennumber)+parseInt($routeParams.recnumber); 
     } else if($scope.matchingNumber == $localStorage.uniqueNumber) {
        if($localStorage.count == undefined) {
            $localStorage.objectsave.push({
                 unique: $scope.matchingNumber,
                 phoneNumber: $scope.senderNumber,
                 messages: []
            }); 
            $localStorage.count = 1;
        }
        
     }
     
     console.log($scope.matchingNumber);
     $scope.messages = [];
     $scope.user = {
         message: ''
     }
      
     $localStorage.message = {
         unique: $scope.matchingNumber,
         phnNumber: $scope.senderNumber,
         messages: []
     }
     var ind;
         
         if($localStorage.objectsave == undefined || $localStorage.objectsave == []) {
             console.log('if');
             
             $localStorage.objectsave = [];
             $localStorage.objectsave.push({
                 unique: $scope.matchingNumber,
                 phoneNumber: $scope.senderNumber,
                 messages: []
             });
             $localStorage.objectsave.forEach(function(item, index) {
                if(item.unique == $scope.matchingNumber && item.phoneNumber ==  $scope.receiverNumber) {
                   if(item.messages != undefined) {
                       $scope.receivedMessages = item.messages; 
                   }
                   
                }
                if(item.unique == $scope.matchingNumber && item.phoneNumber ==  $scope.senderNumber) {
                     console.log('if if');
                     ind = index;
                } else if(item.unique == $scope.matchingNumber && item.phoneNumber !=  $scope.senderNumber && item.phoneNumber !=  $scope.receiverNumber) {
                    console.log('if else if');
                    ind = $localStorage.objectsave.length;
                    $localStorage.objectsave.push({
                         unique: $scope.matchingNumber,
                         phoneNumber: $scope.senderNumber,
                         messages: []
                    });
                    
                }
             });
         } else {
             console.log('else');
             $localStorage.objectsave.forEach(function(item, index) {
                if(item.unique == $scope.matchingNumber && item.phoneNumber ==  $scope.receiverNumber) {
                   if(item.messages != undefined) {
                       $scope.receivedMessages = item.messages; 
                   }
                }
                if(item.unique == $scope.matchingNumber && item.phoneNumber ==  $scope.senderNumber) {
                     if(item.messages != undefined) {
                       $scope.messages = item.messages; 
                      }
                     ind = index; 
                } 
                else if(item.unique == $scope.matchingNumber && item.phoneNumber != $scope.senderNumber && item.phoneNumber !=  $scope.receiverNumber) {
                    ind = $localStorage.objectsave.length;
                    console.log('else else if');
                    $localStorage.objectsave.push({
                         unique: $scope.matchingNumber,
                         phoneNumber: $scope.senderNumber,
                         messages: []
                    }); 
                }
             });
             
         }

     $scope.sendMessage = function() {
         console.log($scope.user.message);
         $localStorage.objectsave[ind].messages.push($scope.user.message);
         $scope.messages = $localStorage.objectsave[ind].messages;
         console.log($scope.messages);
         console.log($localStorage.objectsave);
     }
        
     
        
}]);