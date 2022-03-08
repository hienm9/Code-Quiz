# Challenge-04-Web-APIs-Code-Quiz

This is a timed quiz application using HTML, CSS, and JavaScript. The quiz has a set of questions, when user selects an answer it displays a feedback to tell user if the answer is correct. It then stores the final time as a high score to the list. User can view a list of high scores at the end of the quiz.

Git Repos: https://github.com/hienm9/Challenge-04-Web-APIs-Code-Quiz
Deployment: https://hienm9.github.io/Challenge-04-Web-APIs-Code-Quiz/


Screenshots:
assets/images/image1.png
assets/images/image2.png
assets/images/image3.png
assets/images/image4.png

This challenge was created from scratch. The following were used in this quiz application:
1.  HTML and CSS to create the basic structure and design.
2.  JavaScript objects and functions
3.  local Storage API to store results and input
4.  window object to move to a different page

The index html presents user the quiz instruction, it has the link in top left to see highscore and the right for the timer.
In the Javascript file, I have the quiz data in an array of the questions with multiple choice and their answer. 
When I click on the Start Quiz button, 
  It starts the count down timer. Initial timer is 75 seconds for all of the questions.
  I then append the questions and multiple choice to the html page
  When selecting an answer, it tracks the correct answer.
When the quiz is done, I display the html section to show the final score, here 
  There is an inital box for user to enter
  There is a Submit button. When user click on the Submit button, it presents the High score list. User can clear out the scores and also go back to the quiz.

Pseudo Code 
//Click on the Start Quiz button, it
   // calls count down function to starts the count down
   // call a function to show the question

//Timer starts with 75 seconds, then counts down every second
// For every question, when user selects an answer, 
// call the compare the function. 
// if answer is right, display text Correct
// if answer is wrong, display text Wrong, then subtract 10 seconds 

// When all questions are answered:
// display the final score
// display the initials box
// display the Submit button
// display the text: End quiz 

// when click on the submit button
// capture the initials input, save it to the local storage
// capture the time and save it to the local storage 
// Go to the high score page

// create the high score html page similar to the index without the header
// create a highscore js file
// pull out the local storage data of highscores
// display the high scores