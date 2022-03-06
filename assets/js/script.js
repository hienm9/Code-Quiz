// set array of questions for the quiz
let questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];



// set variables for the elements on the page
let startBtn = document.querySelector("#start-quiz");
// let timeEl = document.getElementById("#time-count");
let timeEl = document.querySelector("#time-count");
let quizContentEl = document.querySelector("#quiz-question");

// start button click to call the startQuiz function
startBtn.addEventListener('click',startQuiz);

// create the function to start the quiz
function startQuiz() {
    // first clear the existing data on the quiz section
    quizContentEl.innerHTML ="";
    listUl.innerHTML ="";
    // call countdown function to start the clock
    timeCount();
    // call the listQuestion function to display the questions and answer choices to the page
    showQuestions(questionNumber);
}

// set variables for the questions lenght and choices in the array
let questionNumber = 0; // set current question
let score = 0; // set current score
let numberOfQuestions = questions.length;
let questionTitle = questions[questionNumber].title;
let questionChoices = questions[questionNumber].choices;
let listUl = document.createElement("ul");

function showQuestions(questionNumber) {
    // display questions and choices to the page
    // create a for loop to loop through the questions array
    for (let i =0; i < numberOfQuestions; i++) {
    // append question title to the html page
    quizContentEl.textContent = questionTitle;
    }
// append a list of choices for each question
    questionChoices.forEach(function (newChoices) {
        let listItem = document.createElement("li")
        listItem.textContent = newChoices;
        quizContentEl.appendChild(listUl);
        listUl.appendChild(listItem);
// add event to the choice selection and call a compare function 
// if user selection matches the answer in the question array
        listItem.addEventListener("click",(compare));
    })
}

function compare() {

}

//quiz time is 15 seconds each for each question
let quizTime = numberOfQuestions * 15;

// penalty of 10 seconds for a wrong answer
let penalty = 10;

function timeCount() {
    let timerInterval = setInterval(function() {
        // displays the time and decreases by second
        timeEl.textContent = "Time: " + quizTime;
        quizTime--;

        // end the quiz when the timer hits zero
        if (quizTime <= 0) {
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

function quizEnd() {
    
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


