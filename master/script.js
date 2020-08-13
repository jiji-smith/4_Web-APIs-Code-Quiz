
//variables from HTML - all the id
const startBtn = document.querySelector("#startBtn");
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
let nameInput = document.querySelector("#name")


// timer
let secondsLeft = 4;
let score = 0;


startBtn.addEventListener("click", function(){
  setTime();
})

function setTime() {
  var timerInterval = setInterval(function() {
    if (secondsLeft > 0) {
      secondsLeft--;
      showTimer.textContent = "you have " + secondsLeft + "seconds left";
    } else {
      clearInterval(timerInterval);
      alert("Time Out!");
    }
  }, 1000);
}

//questions

let questions = [
  {
    question : "what is JS stands for",
    // imgSrc : "img/html.png",
    choiceA : "Ji Smith",
    choiceB : "Jola Ssagaji",
    choiceC : "Java Script",
    choiceD : "I don know",
    correct : "C"
  },
  {
    question : "question2",
    // imgSrc : "img/html.png",
    choiceA : "Ji Smith",
    choiceB : "Jola Ssagaji",
    choiceC : "Java Script",
    choiceD : "I don know",
    correct : "C"
  },
  {
    question : "question3",
    // imgSrc : "img/html.png",
    choiceA : "Ji Smith",
    choiceB : "Jola Ssagaji",
    choiceC : "Java Script",
    choiceD : "I don know",
    correct : "C"
  },
  {
    question : "question 4",
    // imgSrc : "img/html.png",
    choiceA : "Ji Smith",
    choiceB : "Jola Ssagaji",
    choiceC : "Java Script",
    choiceD : "I don know",
    correct : "C"
  }
];



let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

function renderQuestion(){
  let eachQuestion = questions[runningQuestionIndex];
  question.innerHTML = "<p>" + eachQuestion.question + "</p>";
  // imgSrc.innerHTML = "<img src=" + eachQuestion.imgSrc+">";
  choiceA.innerHTML = eachQuestion.choiceA;
  choiceB.innerHTML = eachQuestion.choiceB;
  choiceC.innerHTML = eachQuestion.choiceC;
  choiceD.innerHTML = eachQuestion.choiceD;

}

renderQuestion();
runningQuestionIndex ++;
renderQuestion();





function checkAnswer(answer){
  if(questions[runningQuestionIndex].correct === answer){
    score++;
    score.textContent = scoreContainer;
  } else {
    alert("wrong~");
  }
  if(runningQuestionIndex < lastQuestionIndex){
    count = 0;
    runningQuestionIndex++;
    renderQuestion();
  }else{
    clearInterval(timerInterval);
  }
};


function scoreRender(){
  scoreContainer.style.display="block";
  let scorePercent = Math.round(100 * score/questions.length);
  let text = (scorePercent >= 80) ? "Excellent!" :
              (scorePercent >= 60) ? "Goodjob!" :
              (scorePercent >= 40) ? "Not bad!" :
              (scorePercent >= 20) ? "Study harder!";
  scoreContainer.innerHTML = text + scorePercent;
}



/*
function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();
*/