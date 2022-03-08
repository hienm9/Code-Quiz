let highScore = document.querySelector("#high-score");
let clearBtn = document.querySelector("#clearBtn");
let goBackBtn = document.querySelector("#goBack");
let score = document.querySelector("#score-heading");
score.setAttribute("style", "margin-left: 140px;")
goBackBtn.setAttribute("style", "margin-left: 140px;")

// create an btn event listener to go back to the index page
goBackBtn.addEventListener("click", function () {
    window.location.replace("./index.html");
});


// create an event listener for the clear button to clear the score and storage
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});


// Display the list of high score 
let savedScores = localStorage.getItem("savedScores");
savedScores = JSON.parse(savedScores);

if (savedScores !== null) {

    for (let i = 0; i < savedScores.length; i++) {

        let scoreInitials= document.createElement("li");
        scoreInitials.textContent = i+1 + ".  " + savedScores[i].initials + " - " + savedScores[i].score;
        highScore.appendChild(scoreInitials);
        scoreInitials.setAttribute("style", "padding: 5px; width: 300px; border-radius: 7px;")

    }
}
