let startBtn = document.querySelector('#tartQuiz');
let timeEL = document.querySelector('#time');

let quizHeader = document.querySelector('quiz-header');
let choicesList = document.querySelector("choices-list");
let quizInitial = document.querySelector("quiz-initial");
let timeCount = document.getElementById("time-count")

let score = 0;
let questionIndex = 0;

let timer=document.querySelector("start-quiz")
// initial seconds is 75
let secondInit = 75;
// Holds interval time
let holdInterval = 0;
// subtract time
let penalty = 15;

// create a listener when click on the start quiz
startBtn.addEventListener('click',countDown);

function countDown() {
timer.addEventListener("click")
}

