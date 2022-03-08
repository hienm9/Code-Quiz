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

// set variables for the questions lenght and choices in the array
let questionNumber = 0; // set current question
let penalty = 10; // set penalty of 10 seconds for a wrong answer
let numberOfQuestions = questions.length;
let listUl = document.createElement("ul");
let scoreScreen = document.querySelector("#score-section");
let finalCount = document.querySelector("#final-count");
let submitbtn = document.querySelector("#submit-button");
scoreScreen.setAttribute("style", "display: none;");



// create the function to start the quiz
function startQuiz() {
    // first clear the existing data on the quiz section
    quizContentEl.innerHTML ="";
    listUl.innerHTML ="";
    // then call the time count function to start the clock
    timeCount();
    // call the listQuestion function to display the questions and answer choices to the page
    showQuestions(questionNumber);
}

//quiz time is 15 seconds each for each question
let quizTime = numberOfQuestions * 15;

function timeCount() {
    let timerInterval = setInterval(function() {
        // displays the time and decreases by second
        timeEl.textContent = "Time: " + quizTime;
        finalCount.textContent = "Your final score is: " + quizTime
        quizTime--;

        // end the quiz when the timer hits zero
        if (quizTime <= 0) {
            clearInterval(timerInterval);
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
    // function to display questions and choices to the page
function showQuestions(questionNumber) {
    quizContentEl.innerHTML ="";
    listUl.innerHTML ="";
    let questionTitle = questions[questionNumber].title;
    let questionChoices = questions[questionNumber].choices;

    // create a for loop to loop through the questions array
    for (let i =0; i < numberOfQuestions; i++) {
    // append question title to the html page
    quizContentEl.textContent = questionTitle;
    // quizContentEl.setAttribute("style", "margin-left: 140px;");
    }     

    // for each question, create a list and append the choices to the list
    questionChoices.forEach(function (addChoice) {
        let listItem = document.createElement("li")
        listItem.setAttribute("style", "padding: 5px; width: 200px; border-radius: 7px;")
        listItem.textContent = addChoice;
        console.log(addChoice);
        quizContentEl.appendChild(listUl);
        listUl.appendChild(listItem);
        // add event to the choice selection and call a compare function 
        listItem.addEventListener('click',(compare));
    })
}

// add function event to compare selected choice with answer
// when a selected choice matches with the answer, display the feedback
function compare(event) {
    let itemSelect = event.target;
    // let score=0;
    if (itemSelect.matches("li")) {
        let feedBack = document.createElement("div");
        feedBack.textContent="";
        feedBack.setAttribute("id", "feedBack");
        if (itemSelect.textContent === questions[questionNumber].answer) {
            // score++;
            feedBack.textContent = "Correct!";
        } else {
            feedBack.textContent = "Wrong!";
            // then take off 10 seconds for wrong answer
            quizTime = quizTime - penalty;
        // }
    }
    // increase question number for the next question
    questionNumber++;

    if (questionNumber >= numberOfQuestions) {
        // feedBack.textContent = "You got  " + score + "/" + questions.length + " Correct!";
        finalScore = quizTime;
        quizEnd();
        feedBack.setAttribute("style","display:none");

    } else {
        showQuestions(questionNumber);
    }
    quizContentEl.appendChild(feedBack);
}
}

// create array to hold the high scores
let finalScore;

function quizEnd() {
    quizContentEl.innerHTML ="";
    listUl.innerHTML ="";

    // display the score section when the quiz is done
    if (quizTime >= 0) {
        scoreScreen.setAttribute("style", "display: block;");
    }
 
    // create an event listener for the submit button
    submitbtn.addEventListener("click", function () {
        let initialsInput = document.querySelector("input[name='initials-input']").value;

        // check if input is empty
        if (!initialsInput) {
           alert("Please put in initials!");
           return false;

        } else {
            // set object to contain the user initials and the score
            let scoreList = {
                initials: initialsInput,
                score: finalScore,
            }
            console.log(scoreList);
            let savedScores = localStorage.getItem("savedScores");
            if (savedScores === null) {
                savedScores = [];
            } else {

                // parse score into savedScores array object
                savedScores = JSON.parse(savedScores);
            }
            // push new score to the savedScores array
            savedScores.push(scoreList);
            
            // convert the new score object to a string
            let newScore = JSON.stringify(savedScores);
            localStorage.setItem("savedScores", newScore);

            // then move to the highscore page
            window.location.replace("./highscores.html");
        }


    });



}
