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
let penalty = 10; // set penalty of 10 seconds for a wrong answer
let numberOfQuestions = questions.length;
let questionTitle = questions[questionNumber].title;
let questionChoices = questions[questionNumber].choices;
let listUl = document.createElement("ul");
// var scoreScreen = document.querySelector("#score-section");
// var initialsEl = document.querySelector("#initials");

//quiz time is 15 seconds each for each question
let quizTime = numberOfQuestions * 15;

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


function showQuestions(questionNumber) {
    // display questions and choices to the page
    // create a for loop to loop through the questions array
    for (let i =0; i < numberOfQuestions; i++) {
    // append question title to the html page
    quizContentEl.textContent = questionTitle;
    }
// for each question, create a list and append the choices to the list
    questionChoices.forEach(function (addChoices) {
        let listItem = document.createElement("li")
        listItem.textContent = addChoices;
        quizContentEl.appendChild(listUl);
        listUl.appendChild(listItem);
// add event to the choice selection and call a compare function 
// if user selection matches the answer in the question array
        listItem.addEventListener('click',compare);
    })
}

// add function event to compare selected choice with answer
function compare(event) {
    let itemSelect = event.target;

    if (itemSelect.matches("li")) {
        console.log(itemSelect.textContent);
        let feedBack = document.createElement("div");
        feedBack.setAttribute("id", "feedBack");
        // if (itemSelect.textContent === questions[questionNumber].answer) {
            feedBack.textContent = "Correct!";
        // } else {
            feedBack.textContent = "Wrong!";
            // then take off 10 seconds for wrong answer
            quizTime = quizTime - penalty;
        // }
    }
    // increase question number for the next question
    questionNumber++;

    if (questionNumber >= numberOfQuestions) {
        // TO DO - then call the end quiz function to display the score screen
        quizEnd();
    } else {
        showQuestions(questionNumber);
    }
    quizContentEl.appendChild(feedBack);
}


// create a quiz end function
// first is to clear out the questions and multiple choice list
// then do a document create to insert/append text to the header "All done"
// calculate the remaining time, displays as the final score
// do a document create for label "Enter your initials"
// do a document create for input form to store the initials. Need to store it locally
// do a document create a button "Submit"
// Submit is a listen event to call a Submit function


function quizEnd() {

}


// For every question, when user selects an answer, 
// call the compare the function. 
// if answer is right, display text Correct
// if answer is wrong, display text Wrong, subtract 10 seconds 

// When all questions are answered:
// display the final score
// display the initials box
// display the Submit button
// display the text: End quiz

// TO DO need to set attribute below the 
// function showQuestions(questionNumber) to style the quizContentEl, 
// for example from the Module below:

//var createTaskEl = function(taskDataObj) {
    // var listItemEl = document.createElement("li");
    // listItemEl.className = "task-item";
    // listItemEl.setAttribute("data-task-id", taskIdCounter);
  
    // var taskInfoEl = document.createElement("div");
    // taskInfoEl.className = "task-info";
    // taskInfoEl.innerHTML =
    //   "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    // listItemEl.appendChild(taskInfoEl);
  
    // var taskActionsEl = createTaskActions(taskIdCounter);
    // listItemEl.appendChild(taskActionsEl);
  
    // switch (taskDataObj.status) {
    //   case "to do":
    //     taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 0;
    //     tasksToDoEl.append(listItemEl);
    //     break;


