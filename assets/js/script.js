console.log(window);
var questionEl = document.querySelector("#question");
var startGameEl = document.querySelector("#startbtn");
var answer1 = document.querySelector("#btn1")
var answer2 = document.querySelector("#btn2")
var answer3 = document.querySelector("#btn3")
var answer4 = document.querySelector("#btn4")
var timeCountDown = 60

//createButtons = makes buttons to select questions
//startgame = starts the game
//countTimer = starts the timer


//array of questions
var questionList = [


    {
        question: "Inside which HTML element do we put the JavaScript?",
        option1: "<javascript>",
        option2: "<code>",
        option3: "<js>",
        option4: "<script>",
        answer: "<script>",
    },
    {
        question: "Commonly used data types do not include",
        option1: "booleans",
        option2: "strings",
        option3: "numbers",
        option4: "alerts",
        answer: "alerts",
    },
    {
        question: "The condition of an if/else statement is closed with",
        option1: "curly brackets {}",
        option2: "square brackets []",
        option3: "paranthesis ()",
        option4: "single quotes ' '",
        answer: "curly brackets {}"
    }
];


var createButtons = function(answerOptions) {

    //container to hold elements
    var buttonContainerEl = document.createElement("div");
    buttonContainerEl.id = "buttonOptions";

    var createButton1 = document.createElement("button");
    createButton1.innerText = questionList[0].option1;
    createButton1.className = "answeroption";
    createButton1.id = "#btn1"

    var createButton2 = document.createElement("button");
    createButton2.innerText = questionList[0].option2;
    createButton2.className = "answeroption";
    createButton2.id = "#btn2"

    var createButton3 = document.createElement("button");
    createButton3.innerText = questionList[0].option3;
    createButton3.className = "answeroption";
    createButton3.id = "#btn3"

    var createButton4 = document.createElement("button");
    createButton4.innerText = questionList[0].option4;
    createButton4.className = "answeroption";
    createButton4.id = "#btn4"

    buttonContainerEl.appendChild(createButton1);
    buttonContainerEl.appendChild(createButton2);
    buttonContainerEl.appendChild(createButton3);
    buttonContainerEl.appendChild(createButton4);


   
    var content = document.querySelector("#startbtn");
    content.innerHTML = ""; // clear what's there
    content.appendChild(buttonContainerEl);
}

var getAnswers = function() {

    var AnswerEl = event.target;

    if (questionList[0], AnswerEl.matches("#btn4")) {
            timeCountDown = timeCountDown + 10;
        }

    // else if (questionList[0], !AnswerEl.matches("#btn4"))
    //     timeCountDown = timeCountDown - 5
}


var startGame = function() {
    showQuestions ();
    countTimer();
    showTime();
    getAnswers();
    
    var intervalTrack = setInterval(countTimer, 1000);
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

    if (timeCountDown > 0 ) {
    }

    else {
        alert ("Sorry, you ran out of time!")
        clearInterval(intervalTrack);
    }
        
}

var showQuestions = function (question) {
    

    
    //get the text of question you want to display
     questionEl.textContent = questionList[0].question;
    // createButton1.textcontent = questionList[0].option2;
    createButtons();
    
    


    //set the innertext of the element found to the text of question



    // for (var i = 0; i < questionList.length; i++) {

    //     document.querySelector("#question").textContent = questionList.question



}


// var deleteButtonEl = document.createElement("button");
// deleteButtonEl.textContent = "Delete";
// deleteButtonEl.className = "btn delete-btn";
// deleteButtonEl.setAttribute("data-task-id", taskId);
// actionContainerEl.appendChild(deleteButtonEl);



startGameEl.addEventListener("click", startGame)

clickAnswer1 = function() {
     answer1.addEventListener("click", getAnswers)
}
//answer2.addEventListener("click", getAnswers)
//answer3.addEventListener("click", getAnswers)
clickAnswer4 = function () {
    answer4.addEventListener("click", getAnswers)
}