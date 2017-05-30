app.service('questionaire', function(){
    this.chosenAnswers = [];
    this.data = [
       {
         id: 1,   
         question: 'Q1) AngularJS is based on the . . . . . . pattern. ',
         answers: [
             {
                option: 'VMC',
             },
             {
                option: 'MVC',
             },
             {
                option: 'MCV',
             },
             {
                option: 'CVM',
             },
         ],
         correctAnswer: 'MVC'
       },
       {
         id: 2,
         question: 'Q2) AngularJS applications are a mix of . . . . . . ',
         answers: [
             {
                option: 'HTML and PHP',
             },
             {
                option: 'HTML and CoffeeScript',
             },
             {
                option: 'HTML and JavaScript',
             },
         ],
         correctAnswer: 'HTML and JavaScript'
       },
       {
         id: 3,
         question: 'Q3) We need to tell AngularJS what part of our HTML page contains the AngularJS app. You do so by adding the . . . . attribute to the root HTML element of the AngularJS app.',
         answers: [
             {
                option: 'ng-app',
             },
             {
                option: 'ng-model',
             },
             {
                option: 'ng-bind',
             },
             {
                option: 'ng-repeat',
             },
         ],
         correctAnswer: 'ng-app'
       },
       {
         id: 4,
         question: 'Q4) There is a controller which takes single parameter. We call it . . . . . parameter. ',
         answers: [
             {
                option: '$param',
             },
             {
                option: '$control',
             },
             {
                option: '$scope',
             },
             {
                option: '$rootScope',
             },
         ],
         correctAnswer: '$scope'
       },
       {
         id: 5,
         question: 'Q5) The . . . . . . directive is one of the most fundamental directives in AngujarJS. The . . . . . directive inserts the result of an expression into the HTML template.',
         answers: [
             {
                option: 'Debug',
             },
             {
                option: 'Interpolation',
             },
             {
                option: 'Matching',
             },
             {
                option: 'Controller',
             },
         ],
         correctAnswer: 'Interpolation'
       }
    ];
    this.username = '';
});