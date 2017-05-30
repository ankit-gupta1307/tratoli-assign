app.controller('resultController', ['$scope', '$location', 'questionaire',
    function($scope, $location, questionaire) {
        $scope.questions = questionaire.data;
        $scope.userAnswers = [];
        
        function pushCheckPropertyIntoQuestionsArray(arr) {
          for (var i = 0; i < $scope.questions.length; ++i){
                $scope.questions[i].answer = arr[i];
            };
        }
        
        pushCheckPropertyIntoQuestionsArray(questionaire.chosenAnswers);
        
        $scope.correctAnswerGivenByUser = [];
        $scope.wrongAnswerGivenByUser = [];
        
        for(var i = 0; i < questionaire.data.length; i++) {
            if(questionaire.chosenAnswers[i] === questionaire.data[i].correctAnswer) {
                $scope.correctAnswerGivenByUser.push([i]);
                $scope.questions[i].check = true;
            } else {
                $scope.wrongAnswerGivenByUser.push([i]);
                $scope.questions[i].check = false;
            }
        }
        
        $scope.percentageCorrectAnswer = ($scope.correctAnswerGivenByUser.length/$scope.questions.length)*100;
        
        $scope.dataSource = {
            chart: {
                caption: "Your quiz score is " + $scope.percentageCorrectAnswer.toFixed(2) + '% correct' ,
                startingangle: "120",
                showlabels: "0",
                showlegend: "1",
                enablemultislicing: "0",
                slicingdistance: "15",
                showpercentvalues: "1",
                showpercentintooltip: "0",
                theme: "ocean"
            },
            data:[{
                label: "Correct Answers",
                value: $scope.correctAnswerGivenByUser.length
            },
            {
                label: "Wrong Answers",
                value: $scope.wrongAnswerGivenByUser.length
            }]
        };
        
        $scope.$on('$locationChangeStart', function() {
            $location.path('/');
        });
        
}]);