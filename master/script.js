
//variables from HTML - all the id
let startBtn = document.querySelector("#startBtn");
let showTimer = document.querySelector(".showtimer");
let quiz = document.querySelector("#quiz");
let question = document.querySelector("#question");
let counter = document.querySelector("#counter");
let progressBar = document.querySelector("#progressBar");
let choiceA = document.querySelector("#A");
let choiceB = document.querySelector("#B");
let choiceC = document.querySelector("#C");
let choiceD = document.querySelector("#D");
let scoreContainer = document.querySelector("#scoreContainer");
let nameInput = document.querySelector(".nameInput");
let name = document.querySelector("#name");
let showTheAnswer = document.querySelector("#trueOrFalse");
let submitBtn = document.querySelector("#submit");
let scoreboard = document.querySelector("#scoreboard");


// timer
let secondsLeft = 100;
let timerInterval;

// Start Button
startBtn.addEventListener("click", start)

function start(event) {
  event.preventDefault();
  event.stopPropagation();
  setTime();
  quiz.setAttribute("style", "display : block");
  renderQuestion();
  startBtn.style.display="none";
}


//Timer
function setTime() {
  timerInterval = setInterval(function() {
    if (secondsLeft > 0) {
      secondsLeft--;
      showTimer.textContent = "  You have " + secondsLeft + " seconds left!";
    } else {
      clearInterval(timerInterval);
      quiz.setAttribute("style", "display: none");
      showTimer.setAttribute("style", "display: none");
      alert("Time Out!");
      scoreContainer.style.display="block";
      nameInput.style.display="block";
    }
  }, 1000);
}

//Questions

let questions = [
  {
    question : "Q1. what does JS stands for",
    // imgSrc : "img/html.png",
    choiceA : "Ji Smith",
    choiceB : "Jurassic Story",
    choiceC : "Java Script",
    choiceD : "Just Saying",
    correct : "C"
  },
  {
    question : "Q2. What is the command to display a prompt?",
    // imgSrc : "img/html.png",
    choiceA : "prompt('text here')",
    choiceB : "prompt['text here']",
    choiceC : "command.prompt()",
    choiceD : "go,prompt!",
    correct : "A"
  },
  {
    question : "Q3. What values can confirm() return?",
    // imgSrc : "img/html.png",
    choiceA : "NaN",
    choiceB : "Null",
    choiceC : "string",
    choiceD : "Ture or False",
    correct : "D"
  },
  {
    question : "Q4.  Where is the correct place to insert a JavaScript? ",
    // imgSrc : "img/html.png",
    choiceA : "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
    choiceB : "The &lt;body&gt; section",
    choiceC : "The &lt;head&gt; section",
    choiceD : "Neither of them",
    correct : "A"
  }
];


//Render Questions from the questions list
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex= 0;

function renderQuestion(){
  let eachQuestion = questions[runningQuestionIndex];
  question.innerHTML = "<p>" + eachQuestion.question + "</p>";
  // imgSrc.innerHTML = "<img src=" + eachQuestion.imgSrc+">";
  choiceA.innerHTML = eachQuestion.choiceA;
  choiceB.innerHTML = eachQuestion.choiceB;
  choiceC.innerHTML = eachQuestion.choiceC;
  choiceD.innerHTML = eachQuestion.choiceD;
 }


// check the answer and gives score
let score = 0;
function checkAnswer(answer){
  if(questions[runningQuestionIndex].correct === answer){
    score++;
    scoreContainer.textContent ="All done! your score is " + score;
    alert("correct");
  }else{
    alert("wrong");
  }

  if(runningQuestionIndex < lastQuestionIndex){
    runningQuestionIndex++;
    renderQuestion();
  }else{
    clearInterval(timerInterval);
    quiz.style.display="none"
    scoreContainer.style.display="block";
    nameInput.style.display="block";
  }
};

// log your name

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();

  let rankName = name.value.trim();

  if(rankName ==="") {
    return;
  }

  const nameArr = JSON.parse(localStorage.getItem("nameArr")) || [];

  const newScore = {
    name: rankName,
    score: score
  }

  nameArr.push(newScore);
  name.value="";

  localStorage.setItem("nameArr", JSON.stringify(nameArr));

  for (var i = 0; i < nameArr.length; i++) {

    var li = document.createElement("li");
    li.textContent = nameArr[i].name + " - " + nameArr[i].score;

    scoreboard.appendChild(li);
  }

});