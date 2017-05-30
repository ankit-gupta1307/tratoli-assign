app.controller('questionController', ['$scope', '$window', '$location', '$routeParams', 'questionaire',
    function($scope, $window, $location, $routeParams, questionaire) {
        $scope.indexing = $routeParams.id; 
        $scope.route = function() {
           $location.path('question/0');
        }
        $scope.questions = questionaire.data;

        $scope.indexing = parseFloat($scope.indexing);

        $scope.nextQuestion = function(index) {
           if($scope.indexing == ($scope.questions.length-1)) {
               questionaire.chosenAnswers.push($scope.questions[$scope.indexing].answers[index].option);
               $location.replace();
               $location.path('/result');
               return;
           } else {
               questionaire.chosenAnswers.push($scope.questions[$scope.indexing].answers[index].option);
               $scope.indexing =  $scope.indexing + 1;
               $location.replace();
               $location.path('/question/' +$scope.indexing); 
           }
        }
       
}]);