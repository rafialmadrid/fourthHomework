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
// Append second question
body.appendChild(thirdQuestion);
thirdQuestion.appendChild(question3);
thirdQuestion.appendChild(listAnswers3);
listAnswers3.appendChild(q3a1);
listAnswers3.appendChild(q3a2);
listAnswers3.appendChild(q3a3);
listAnswers3.appendChild(q3a4);


// Style start page
// quizStartPage.setAttribute("style", "display: none");
quizTitle.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");
quizExplanation.setAttribute("style", "margin:auto; width:50%; text-align:center;");
buttonDiv.setAttribute("style", "display: flex ; justify-content: center ; margin: 10px");
startButton.setAttribute("style", "margin: auto ; center; text-align:center;");
// Style fisrt question
// firstQuestion.setAttribute("style", "display: none");
question1.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");
listAnswers1.setAttribute("style", "background:#80ced6; padding:20px; margin:auto; width:50%; text-align:center;");
q1a1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
q1a2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
q1a3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
q1a4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");
// Style second question
// secondQuestion.setAttribute("style", "display: none");
question2.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");
listAnswers2.setAttribute("style", "background:#80ced6; padding:20px; margin:auto; width:50%; text-align:center;");
q2a1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
q2a2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
q2a3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
q2a4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");
// Style third question
// thirdQuestion.setAttribute("style", "display: none");
question3.setAttribute("style", "margin:auto; width:50%; text-align:center; Impact,Charcoal,sans-serif");
listAnswers3.setAttribute("style", "background:#80ced6; padding:20px; margin:auto; width:50%; text-align:center;");
q3a1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
q3a2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
q3a3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
q3a4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");