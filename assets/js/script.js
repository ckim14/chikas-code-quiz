var startGameEl = document.querySelector("#startbtn");
var answer1 = document.querySelector("#option1")
var answer2 = document.querySelector("#btn2")
var answer3 = document.querySelector("#btn3")
var answer4 = document.querySelector("#btn4")
var timeCountDown = 60
var currentQuestion = 0; // index of questionList array
var intervalTrack;
var playerNameandScore = JSON.parse(localStorage.getItem("playerNameandScore")) || [];

//createButtons = makes buttons to select questions
//startgame = starts the game
//countTimer = starts the timer


//array of questions
var questionList = [
    {
        id: 0,
        question: "Inside which HTML element do we put the JavaScript?",
        option1: "<javascript>",
        option2: "<code>",
        option3: "<js>",
        option4: "<script>",
        answer: "<script>",
    },
    {
        id: 1,
        question: "Commonly used data types do not include",
        option1: "booleans",
        option2: "strings",
        option3: "numbers",
        option4: "alerts",
        answer: "alerts",
    },
    {
        id: 2,
        question: "The condition of an if/else statement is closed with",
        option1: "curly brackets {}",
        option2: "square brackets []",
        option3: "paranthesis ()",
        option4: "single quotes ' '",
        answer: "curly brackets {}"
    }
];

var checkAnswer = function () {
   var currentAnswer = document.querySelector('input[name="option"]:checked').value;
   if(currentAnswer === questionList[currentQuestion].answer) {
       currentQuestion = currentQuestion + 1;
       timeCountDown = timeCountDown + 10;
       alert("Correct! +10 seconds on the timer!");
       if(currentQuestion === questionList.length) {         
           clearInterval(intervalTrack);
           getNameandHighscore();
       } else {
        showCurrentQuestion();
       }
   } else {
       timeCountDown = timeCountDown - 5;
       alert('Wrong Answer!-5 on the timer');
   }

   showTime();
}


var showQuestion = function(answerOptions) {

    //container to hold elements
    var buttonContainerEl = document.createElement("div");
    buttonContainerEl.id = "buttonOptions";

    // show the question text
    var questionText = document.createElement("h2");
    questionText.textContent = answerOptions.question;
    buttonContainerEl.appendChild(questionText);

    var radioAnswer1 = function (option) {
        var radiobox = document.createElement('input');
        radiobox.type = 'radio';
        radiobox.value = option;
        radiobox.name = "option"

        var label = document.createElement("label")
        label.textContent = option;
     
        var newline = document.createElement('br');
     
        
        buttonContainerEl.appendChild(radiobox);
        buttonContainerEl.appendChild(label);
        buttonContainerEl.appendChild(newline);
    }

    var content = document.querySelector("#container");
    content.innerHTML = ""; // clear what's there

    radioAnswer1(answerOptions.option1);
    radioAnswer1(answerOptions.option2);
    radioAnswer1(answerOptions.option3);
    radioAnswer1(answerOptions.option4);

    var answerButton = document.createElement("button")
    answerButton.innerText = "Submit Answer";
    answerButton.addEventListener("click", checkAnswer);

    buttonContainerEl.appendChild(answerButton)
    content.appendChild(buttonContainerEl);
}


var startGame = function() {
    showCurrentQuestion ();
    showTime();
    intervalTrack = setInterval(countTimer, 1000);
}

// show the current time left on screen
var showTime = function() {
    document.querySelector("#timer").textContent = timeCountDown;
    console.log(timeCountDown);
}

// start the timer
var countTimer = function() {

    timeCountDown = timeCountDown - 1 
    showTime();

    if (timeCountDown <= 0 ) {
        alert ("Sorry, you ran out of time!")
        clearInterval(intervalTrack);
    }
}

var showCurrentQuestion = function () {
    // Get current question
    var question = questionList[currentQuestion];
    showQuestion(question);
}

var getNameandHighscore = function() {
           // We're done!
           // Get initial, save score, etc.
        var content = document.querySelector("#container");
        content.innerHTML = ""; // clear what's there
        
        var playerFormContainer = document.createElement("div");

        //add header for instructions to add name
        var inputNameInstructions = document.createElement("h2");
        inputNameInstructions.textContent = "Fill out your name to submit your score";
        playerFormContainer.appendChild(inputNameInstructions);

        //add field to input name
        var playerFormInput = document.createElement("input");
        playerFormInput.label = "playerName";
        playerFormInput.type = "text";
        playerFormInput.id = "playerName";
        playerFormContainer.appendChild(playerFormInput);

        //add button to submit with the event listener
        var submitButton = document.createElement("button");
        submitButton.id = "submitNameScore";
        submitButton.innerText = "Submit";
        submitButton.addEventListener("click", submitNameandScore)
        playerFormContainer.appendChild(submitButton);

        content.appendChild(playerFormContainer);
};

function submitNameandScore() {

    //get the value in the text input box
    playerName = document.getElementById('playerName').value;

    //get the name and the score for the player
    var entry = {'name': playerName, 'score': timeCountDown}

    //push the new entry to the playerNameandScore table
    playerNameandScore.push(entry);  
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    playerNameandScore.sort((a, b) =>  b.score - a.score );
    localStorage.setItem("playerNameandScore", JSON.stringify(playerNameandScore));

    showLeaderBoard();
};

function showLeaderBoard() {
    var content = document.querySelector("#container");
    content.innerHTML = ""; // clear what's there

    //create elements for what is on the board
    var leaderBoardContainer = document.createElement("div");

  
        var orderedList = document.createElement ("ol")
        
        for(var i = 0;i < playerNameandScore.length; i++) {
            var listItem = document.createElement("li");
            listItem.innerText = playerNameandScore[i].name + ': ' + playerNameandScore[i].score;
            orderedList.appendChild(listItem)
        }

        leaderBoardContainer.appendChild(orderedList);

        var heading = document.createElement('h2');
        heading.innerText = 'High Scores:';
        content.appendChild(leaderBoardContainer);

        content.appendChild(orderedList);
    }
        





 

startGameEl.addEventListener("click", startGame)

