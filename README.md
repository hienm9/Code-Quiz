# Challenge-04-Web-APIs-Code-Quiz

In this challenge, I create a timed quiz using JavaScript that stores high scores.

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

The quiz data is an array of objects.
That is, [{FIRST QUESTION}, {SECOND QUESTION}, {THIRD QUESTION}].
In each question, { q:QUESTION, o:OPTIONS, a:CORRECT ANSWER }.
o is an array of the available options (there can be more than 4).
a specifies which is the correct answer. That is, a:0 will specify that the first option is correct.
for example: 
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
    }