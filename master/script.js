
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
let nameInput = document.querySelector("#name");
let showTheAnswer = document.querySelector("#trueOrFalse");


// timer
let secondsLeft = 900;


// Start Button
startBtn.addEventListener("click", start)

function start(event) {
  event.preventDefault();
  event.stopPropagation();
  setTime();
  quiz.setAttribute("style", "display : block");
  renderQuestion();
}

function setTime() {
  let timerInterval = setInterval(function() {
    if (secondsLeft > 0) {
      secondsLeft--;
      showTimer.textContent = "  You have " + secondsLeft + " seconds left!";
    } else {
      clearInterval(timerInterval);
      // how to hide questions when it hits 0
      quiz.setAttribute("style", "display: none")
      alert("Time Out!");
      ;
    }
  }, 1000);
}

//questions

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
runningQuestionIndex;


/*
function checkAnswer(event){
  console.log(event);
  let q = questions[runningQuestionIndex];
  let correctChoice = q.correct;
}
 let playerChoice =

}

*/


let score = 0;
function checkAnswer(answer){
  if(questions[runningQuestionIndex].correct === answer){
    score++;
    scoreContainer.textContent = score;
    alert("correct");
  } else {
    alert("wrong");
  }
  if(runningQuestionIndex < lastQuestionIndex){
    count = 0;
    runningQuestionIndex++;
    renderQuestion();
  }else{
    clearInterval(timerInterval);
  }
};

/*
scoreContainer;


if (secondsLeft === "0") {
  nameInput.setAttribute("style", "display : block");
  nameInput.innerHTML;
}

/*

function scoreRender(){
  scoreContainer.style.display="block";
  let scorePercent = Math.round(100 * score/questions.length);
  let text = (scorePercent >= 80) ? "Excellent!" :
              (scorePercent >= 60) ? "Goodjob!" :
              (scorePercent >= 40) ? "Not bad!" :
              (scorePercent >= 20) ? "Study harder!";
  scoreContainer.innerHTML = text + scorePercent;
}




function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();
*/