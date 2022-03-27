var startGameEl = document.querySelector("#startbtn");
var answer1 = document.querySelector("#option1")
var answer2 = document.querySelector("#btn2")
var answer3 = document.querySelector("#btn3")
var answer4 = document.querySelector("#btn4")
var timeCountDown = 60
var currentQuestion = 0; // index of questionList array
var intervalTrack;

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
       alert('-5 for Wrong Answer!');
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

        //add button to submit 
        var submitButton = document.createElement("button")
        submitButton.innerText = "Submit My Name and HighScore";
        submitButton.addEventListener("click", putNameandScore);
        playerFormContainer.appendChild(submitButton);
        
    content.appendChild(playerFormContainer);


    //save to local storage

}

var putNameandScore = function () {

};

startGameEl.addEventListener("click", startGame)
