// Set the body to a variable
var body = document.body;
// Create start page
var quizStartPage = document.createElement("div");
var quizTitle = document.createElement("h1");
var quizExplanation = document.createElement("p");
var buttonDiv = document.createElement("div");
var startButton = document.createElement("button");
// Create first question
var firstQuestion = document.createElement("div");
var question1 = document.createElement("h2");
var listAnswers1 = document.createElement("ol");
var q1a1 = document.createElement("li");
var q1a2 = document.createElement("li");
var q1a3 = document.createElement("li");
var q1a4 = document.createElement("li");
// Create second question
var secondQuestion = document.createElement("div");
var question2 = document.createElement("h2");
var listAnswers2 = document.createElement("ol");
var q2a1 = document.createElement("li");
var q2a2 = document.createElement("li");
var q2a3 = document.createElement("li");
var q2a4 = document.createElement("li");
// Create third question
var thirdQuestion = document.createElement("div");
var question3 = document.createElement("h2");
var listAnswers3 = document.createElement("ol");
var q3a1 = document.createElement("li");
var q3a2 = document.createElement("li");
var q3a3 = document.createElement("li");
var q3a4 = document.createElement("li");
//Create form
var resultsPage = document.createElement("div");
var finishMessage = document.createElement("h1");
var score = document.createElement("p");
var label = document.createElement("label");
var initial = document.createElement("input");
var submitButton = document.createElement("button");
//create highscores
var highscoresPage = document.createElement("div");
var highscores = document.createElement("h1");
var listScores = document.createElement("ul");
var goBackButton = document.createElement("button");
var clearButton = document.createElement("button");


// Set the text content for start page
quizTitle.textContent = "The random stuff Quiz";
quizExplanation.textContent = "The following quiz will include questions of all sorts of topics. If you know the answers to all of these questions you can consider yourself a true wiseman.";
startButton.textContent = "Begin Quiz";
// Set the text content for first question
question1.textContent = "What is the name for the Jewish New Year?"
q1a1.textContent = "Hanukkah";
q1a2.textContent = "Yom Kippur";
q1a3.textContent = "Kwanza";
q1a4.textContent = "Rosh Hashanah"; //Answer
// Set the text content for second question
question2.textContent = "What is the color of Donald Duck’s bowtie?"
q2a1.textContent = "Red";//answer
q2a2.textContent = "Yellow";
q2a3.textContent = "Blue";
q2a4.textContent = "White";
// Set the text content for third question
question3.textContent = "According to Forrest Gump, “life was like…”"
q3a1.textContent = "A bag of lemons";
q3a2.textContent = "A handful of roses";
q3a3.textContent = "A lollipop";
q3a4.textContent = "A box of chocolates";//answer
// Set the text for the results page
finishMessage.textContent = "Thanks for completing the quiz!"
// score.textContent = "Your score is: ";
submitButton.textContent = "Submit";
// Set the text content for highscore page
highscores.textContent = "Highscores"
label.textContent = "Enter initials: "
goBackButton.textContent = "Go Back";
clearButton.textContent = "Clear highscores";


// Append start page
body.appendChild(quizStartPage)
quizStartPage.appendChild(quizTitle);
quizStartPage.appendChild(quizExplanation);
quizStartPage.appendChild(buttonDiv);
buttonDiv.appendChild(startButton);
// Append first question
body.appendChild(firstQuestion);
firstQuestion.appendChild(question1);
firstQuestion.appendChild(listAnswers1);
listAnswers1.appendChild(q1a1);
listAnswers1.appendChild(q1a2);
listAnswers1.appendChild(q1a3);
listAnswers1.appendChild(q1a4);
// Append second question
body.appendChild(secondQuestion);
secondQuestion.appendChild(question2);
secondQuestion.appendChild(listAnswers2);
listAnswers2.appendChild(q2a1);
listAnswers2.appendChild(q2a2);
listAnswers2.appendChild(q2a3);
listAnswers2.appendChild(q2a4);
// Append third question
body.appendChild(thirdQuestion);
thirdQuestion.appendChild(question3);
thirdQuestion.appendChild(listAnswers3);
listAnswers3.appendChild(q3a1);
listAnswers3.appendChild(q3a2);
listAnswers3.appendChild(q3a3);
listAnswers3.appendChild(q3a4);
// Append results page
body.appendChild(resultsPage);
resultsPage.appendChild(finishMessage);
resultsPage.appendChild(score);
resultsPage.appendChild(label);
resultsPage.appendChild(initial);
resultsPage.appendChild(submitButton);
// Append highscores
body.appendChild(highscoresPage);
highscoresPage.appendChild(highscores);
highscoresPage.appendChild(listScores);
highscoresPage.appendChild(goBackButton);
highscoresPage.appendChild(clearButton);


// Style start page
quizTitle.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");
quizExplanation.setAttribute("style", "margin:auto; width:50%; text-align:center;");
buttonDiv.setAttribute("style", "display: flex ; justify-content: center ; margin: 10px");
startButton.setAttribute("style", "margin: auto ; center; text-align:center;");
startButton.setAttribute("id", "startQuiz");
// Style fisrt question
question1.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");
question1.setAttribute("id", "firstQ");
listAnswers1.setAttribute("style", "background:#333333; padding:20px; margin:auto; width:50%; text-align:center;");
q1a1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
q1a2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
q1a3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
q1a4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");
// Style second question
question2.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");
listAnswers2.setAttribute("style", "background:#333333; padding:20px; margin:auto; width:50%; text-align:center;");
q2a1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
q2a2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
q2a3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
q2a4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");
// Style third question
question3.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");
listAnswers3.setAttribute("style", "background:#333333; padding:20px; margin:auto; width:50%; text-align:center;");
q3a1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
q3a2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
q3a3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
q3a4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");
// Style results page
resultsPage.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");
score.setAttribute("id", "score");
listScores.setAttribute("id", "scoreList");
listAnswers1.setAttribute("id", "Answers");
listAnswers2.setAttribute("id", "Answers");
listAnswers3.setAttribute("id", "Answers");
// Style highscores page
highscoresPage.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");
goBackButton.setAttribute("style", "margin:10px ");

// // Display turn on and off
// quizStartPage.setAttribute("style", "display: none");

secondQuestion.setAttribute("style", "display: none");
firstQuestion.setAttribute("style", "display: none");
thirdQuestion.setAttribute("style", "display: none");
resultsPage.setAttribute("style", "display: none");
highscoresPage.setAttribute("style", "display: none");


//timer function
var time = document.getElementById("Time");
var scoreTime = document.getElementById("score")
console.log(time);
var secondsLeft = 61;

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      time.textContent = "Time: " + secondsLeft;
      scoreTime.textContent = "Your score is: "+secondsLeft;

      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        secondsLeft=61;
        resultsPage.setAttribute("style", "display: inline");
        resultsPage.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");
        secondQuestion.setAttribute("style", "display: none");
        firstQuestion.setAttribute("style", "display: none");
        thirdQuestion.setAttribute("style", "display: none");
      }
      else{
        thirdQuestion.addEventListener("click",function(event){
            clearInterval(timerInterval);
            secondsLeft=61;
        })
      }
    }, 1000);
  }

//begins quiz by pushing button
  startQuiz.addEventListener("click", function(event) {
      setTime();
      quizStartPage.setAttribute("style", "display: none");
      firstQuestion.setAttribute("style", "display: inline");
  })
      //first question
      firstQuestion.addEventListener("click",function(event){
          console.log(event.target.innerHTML);
          if (event.target.innerHTML==="Rosh Hashanah") {
            var answerToFirst = document.createElement("p");
            answerToFirst.textContent = "Correct!"; 
            firstQuestion.appendChild(answerToFirst);
            answerToFirst.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");

            var goTo2ndQ = setTimeout(function(){
            firstQuestion.setAttribute("style", "display: none");
            secondQuestion.setAttribute("style", "display: inline");
            },1000)
        
          }
          else{
            var answerToFirst = document.createElement("p");
            answerToFirst.textContent = "Wrong!"; 
            firstQuestion.appendChild(answerToFirst);
            answerToFirst.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");

            if (secondsLeft<10) {
                secondsLeft=1;
            }else{
                secondsLeft=secondsLeft-9;
            }
          
            var goTo2ndQ = setTimeout(function(){
            firstQuestion.setAttribute("style", "display: none");
            secondQuestion.setAttribute("style", "display: inline");
            },1000)
          }

      })

        //second question
      secondQuestion.addEventListener("click",function(event){
        console.log(event.target.innerHTML);
        if (event.target.innerHTML==="Red") {
          var answerToSecond = document.createElement("p");
          answerToSecond.textContent = "Correct!"; 
          secondQuestion.appendChild(answerToSecond);
          answerToSecond.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");

          var goTo3ndQ = setTimeout(function(){
          secondQuestion.setAttribute("style", "display: none");
          thirdQuestion.setAttribute("style", "display: inline");
          },1000)
      
        }
        else{
          var answerToSecond = document.createElement("p");
          answerToSecond.textContent = "Wrong!"; 
          secondQuestion.appendChild(answerToSecond);
          answerToSecond.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");

          if (secondsLeft<10) {
            secondsLeft=1;
        }else{
            secondsLeft=secondsLeft-9;
        }

          var goTo3ndQ = setTimeout(function(){
          secondQuestion.setAttribute("style", "display: none");
          thirdQuestion.setAttribute("style", "display: inline");
          },1000)
              
        }

    })

      //third question
      thirdQuestion.addEventListener("click",function(event){
        console.log(event.target.innerHTML);
        if (event.target.innerHTML==="A box of chocolates") {
          var answerToThird = document.createElement("p");
          answerToThird.textContent = "Correct!"; 
          thirdQuestion.appendChild(answerToThird);
          answerToThird.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");

          var goToResult = setTimeout(function(){
          thirdQuestion.setAttribute("style", "display: none");
          resultsPage.setAttribute("style", "display: inline");
          resultsPage.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");
          },1000)
      
        }
        else{
          var answerToThird = document.createElement("p");
          answerToThird.textContent = "Wrong!"; 
          thirdQuestion.appendChild(answerToThird);
          answerToThird.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");

          if (secondsLeft<10) {
            secondsLeft=1;
        }else{
            secondsLeft=secondsLeft-9;
        }
      
          var goToResult = setTimeout(function(){
              thirdQuestion.setAttribute("style", "display: none");
              resultsPage.setAttribute("style", "display: inline");
              resultsPage.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");
              },1000)
        }

    })

    //add scores to the list and to local storage

var scoresList = [];

init();

function renderScores() {
    listScores.innerHTML = "";
 
    for (var i = 0; i < scoresList.length; i++) {
      var score = scoresList[i];
  
      var li = document.createElement("li");
      li.textContent = score;
      li.setAttribute("data-index", i);
  
      listScores.appendChild(li);
    }
  }

function init() {
    var storedScores = JSON.parse(localStorage.getItem("scoreList"));
  
    if (storedScores !== null) {
      scoresList = storedScores;
    }
    renderScores();
  }

  function storeScores() {
    localStorage.setItem("scoresList", JSON.stringify(scoresList));
  }

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    resultsPage.setAttribute("style", "display: none");
    highscoresPage.setAttribute("style", "display: inline");
    highscoresPage.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");
  
    var scoreText = initial.value.trim();
  
    if (scoreText === "") {
      return;
    }
  
    scoresList.push(scoreText);
    initial.value = "";
  
    storeScores();
    renderScores();
  });

  //Clear highcores

clearButton.addEventListener("click", function(){
    localStorage.clear();
    listScores.innerHTML = "";
    var scoresList = [];
});

//Go back to the start
goBackButton.addEventListener("click", function(){
    highscoresPage.setAttribute("style", "display: none");
    quizStartPage.setAttribute("style", "display: inline");
    firstQuestion.removeChild(firstQuestion.lastElementChild);
    secondQuestion.removeChild(secondQuestion.lastElementChild);
    thirdQuestion.removeChild(thirdQuestion.lastElementChild);
});

//Go to highscores page
highscoresTitle.addEventListener("click", function(){
    highscoresPage.setAttribute("style", "display: inline");
    highscoresPage.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");
    quizStartPage.setAttribute("style", "display: none");
    secondQuestion.setAttribute("style", "display: none");
    firstQuestion.setAttribute("style", "display: none");
    thirdQuestion.setAttribute("style", "display: none");
    resultsPage.setAttribute("style", "display: none");
});
    

   

  
