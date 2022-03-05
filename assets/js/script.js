// set variables for the elements on the page
let startBtn = document.querySelector("#start-quiz");
let timeEl = document.getElementById("#time-count");
let quizContentEl = document.querySelector("#quiz-question");
let choicesListEl = document.createElement("ul");

// start button click to call the startQuiz function
startBtn.addEventListener('click',startQuiz);

// create the function to start the quiz
function startQuiz() {
    // first clear the existing data on the quiz section
    quizContentEl.innerHTML ="";
    choicesListEl.innerHTML ="";
    // call countdown function to start the clock
    timeCount();
    // call the listQuestion function to display the questions and answer choices to the page
    listQuestions();
}

// set variables for the questions lenght and choices in the array
let questionNumber = 0;
let numberOfQuestions = questions.length;
let questionTitle = questions[questionNumber].title;
let questionChoices = questions[questionNumber].choices;

//quiz time is 15 seconds each for each question
let quizTime = numberOfQuestions * 15;
// penalty of 10 seconds for a wrong answer
let penalty = 10;

function timeCount() {
    let timerInterval = setInterval(function() {
        // displays the time and decreases by second
        timeEl.textContent = quizTime;
        quizTime--;

        // end the quiz when the timer hits zero
        if (timeSecond <= 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "0"; // set the time text content back to 0
            quizEnd(); // call the quiz end function
        }
        // stop the clock if user finishs all questions
        else if (questionNumber == 5) {
            clearInterval(timerInterval);
            // reset 
            questionNumber = 0;
            quizTime = numberOfQuestions * 15;
        }
    }, 1000);
}



function listQuestions() {
    // display questions and choices to the page
    // create a for loop to loop through the questions array
    for (let i =0; i < numberOfQuestions; i++) {
    // append question title to the html page
    quizContentEl.textContent = questionTitle;
    }
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
