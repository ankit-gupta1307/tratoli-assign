var app = angular.module('questionaireApp', ['ngRoute','ngMaterial', 'ngStorage']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    redirectTo: '/login'
  })
  .when('/login',{
    controller: 'loginController',
    templateUrl: 'views/login.html'
  })
  .when('/chatlist/:number',{
    controller: 'chatListController',
    templateUrl: 'views/chatlist.html'
  })
  .when('/chatroom/:sennumber/:recnumber',{
    controller: 'chatroomController',
    templateUrl: 'views/chatroom.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});


 

    

