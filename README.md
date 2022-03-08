# Challenge-04-Web-APIs-Code-Quiz

This is a timed quiz application using HTML, CSS, and JavaScript. The quiz has a set of questions, when user selects an answer it displays a feedback to tell user if the answer is correct. It then stores the final time as a high score to the list. User can view a list of high scores at the end of the quiz.

Git Repos: https://github.com/hienm9/Challenge-04-Web-APIs-Code-Quiz
Deployment: https://hienm9.github.io/Challenge-04-Web-APIs-Code-Quiz/


Screenshots:
<img width="1370" alt="image1" src="https://user-images.githubusercontent.com/98295316/157170333-60b3efb0-76e3-4dcb-a789-d2c7d5e1617d.png">
<img width="1367" alt="image2" src="https://user-images.githubusercontent.com/98295316/157170369-5dc41980-7de0-45ae-a645-cbf8722a82e3.png">
<img width="1362" alt="image3" src="https://user-images.githubusercontent.com/98295316/157170392-cb1b0e7d-7a65-4f87-af7a-3277c70fd39f.png">
<img width="912" alt="image4" src="https://user-images.githubusercontent.com/98295316/157170407-28bc0fde-ecd5-4581-a163-5cf356b08425.png">


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
