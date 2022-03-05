let startBtn = document.querySelector('#start-quiz');
let timeEL = document.querySelector('#time');

let quizHeader = document.querySelector('quiz-header');
let choicesList = document.querySelector("choices-list");
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

// create a listener for the start button and call startQuiz function
startBtn.addEventListener('click',startQuiz);

function startQuiz() {
    // hide the default displays
    quizInitial.setAttribute("style", "display: none");

}
function countDown() {
timer.addEventListener("click")
}

//Click on the Start Quiz button, it first starts the timer

//Timer starts with 75 seconds, then counts down every second

// For every question, when user selects an answer, 
// call the compare the function. 
// if answer is right, display text Correct
// if answer is wrong, display text Wrong, subtract 10 seconds 

// When all questions are answered:
// display the final score
// display the initials box
// display the Submit button
// display the text: End quiz

// 
