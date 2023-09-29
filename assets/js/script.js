$(document).ready(function() {
    start(questionNumber);
    
    $(".submit-answer").on("click", function(event) {
    
        var userAnswer = parseInt($(this).attr("id"));
        answerCheck(userAnswer);
    
        setTimeout(function() {
                    $(".submit-answer").removeClass("correctStyle incorrectStyle");
                     start(questionNumber);
                 }, 1500)
    
         questionNumber++;
      });
    
    });
    
    var questionNumber = 0,
        totalCorrect = 0,
        optionFinal = 0;
    
    var allQuestions = [
        {
            question: '"It is something entierly yours but everyone can use it ¿What is it? "',
            choices: ["Your phone", "Your Name", "A book", "Your Underwear"],
            answer: 1}
        ,{
            question: "If tomato is a fruit, would ketchup be a smoothie?",
            choices: ["Yes", "No", "Never say never", "This is too difficult."],
            answer: 0}
        ,{
            question: "If a white horse goes into the black sea, What color would it be after?",
            choices: ["Black", "Grey", "White", "WHAT?"],
            answer: 2}
        ,{
            question: "Where does Thursday comes before Wednesday?",
            choices: ["Mars", "Back to the Future", "In your imagination", "The Dictionary"],
            answer: 3}
        ,{
            question: "What goes up but never goes down?",
            choices: ["A bird", "A spaceship", "Dust", "Your age"],
            answer: 3}
        ,{
            question: "How many pairs of animals did Moses get into the arc?",
            choices: ["7,867", "7,876", "None", "I do not know"],
            answer: 2}
        ,{
            question: "What would happen if an irresistible force bumps into an immovable object? ",
            choices: ["Nothing", "Crush it", "Move it", "Merge into it"],
            answer: 0}
        ,{
            question: "What would be the principal motive of divorce?",
            choices: ["Parents", "Fights", "Wealth", "Marriage"],
            answer: 3}
        ,{
            question: "What is something you can hold with your right hand but never in your left hand?",
            choices: ["A pencil", "Your left hand", "A hot pan", "A guitar"],
            answer: 1}
        ,{
            question: "Why did the banker lose the job?",
            choices: ["Because he was late", "He lost interest", "Did't deliver the report", "Why would I know that?"],
            answer: 1}
      ];
    
      var result = [
        {
          image: "https://media.giphy.com/media/GKdJrFDYqs9m8/giphy.gif",
          comment: "The gods are saving you a seat on the Olympus, brave one."}
        ,{
          image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMW1iN3YzbmtqY3Q2MDF0OWRtcGhjcTJvb2FvNWt6ejZoY3RianRiNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TIiIp00ViwHUuc7YqX/giphy.gif",
          comment: "You are getting there."}
        ,{
          image: "https://media.giphy.com/media/da6mwoW6Cs0DbER02R/giphy.gif",
          comment: "Dissapointed? Me too."}
        ,{
          image: "https://media.giphy.com/media/3ohs7UrMoIfkY4jecU/giphy.gif",
          comment: "You were warned it was impossible..."}
        ];
    
    var start = function(questionNumber) {
          $('h2').hide().fadeIn(400);
    
          if(questionNumber !== allQuestions.length){
              question(questionNumber);
          }else{
              end();
          }
    };
    
    function question(questionNum) {
          $("h2").text(allQuestions[questionNum].question);
    
          $.each(allQuestions[questionNum].choices, function(i, answers){
             $("#" + i).html(answers);
          });
    };
    
    function end() {
      finalImage();
      $("ul").hide();
      $("h2").text("You scored " + totalCorrect + " out of " + allQuestions.length + ". " + result[optionFinal].comment);
      $("#image").html('<img src=' + result[optionFinal].image + ' alt="">').fadeIn(1000);
      $("#try-again-container").show();
      restart();
    };
    
    function finalImage() {
      if(totalCorrect < allQuestions.length && totalCorrect >= (allQuestions.length*.7)){
                optionFinal = 1;
        }else if(totalCorrect <= (allQuestions.length*.6) && totalCorrect >= (allQuestions.length*.2)){
              optionFinal = 2;
        }else if(totalCorrect !== allQuestions.length){
              optionFinal = 3;
        }
    }
    
    function restart(){
      $("#try-again").click(function(){
        questionNumber = 0,
        totalCorrect = 0,
        optionFinal = 0;
    
        start(questionNumber);
        $("#image").hide();
        $("#try-again-container").hide();
        $("ul").fadeIn(400);
      });
    } 
    
    function answerCheck(userAnswer) {
         var correctAnswer = allQuestions[questionNumber].answer;
    
         if (userAnswer === correctAnswer) {
             $("#" + userAnswer).addClass("correctStyle");
             totalCorrect++;
         }else{
            $("#" + userAnswer).addClass("incorrectStyle");
         }
    };