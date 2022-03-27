console.log(window);
var questionEl = document.querySelector("#question");
var startGameEl = document.querySelector("#startbtn");
var answerEl1 = document.querySelector("#btn1")
var answer2 = document.querySelector("#btn2")
var answer3 = document.querySelector("#btn3")
var answer4 = document.querySelector("#btn4")
var timeCountDown = 60
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
    createButton1.textcontent = questionList[0].option1;
    createButton1.className = "answeroption";
    createButton1.id = "#btn1"

    var createButton2 = document.createElement("button");
    createButton1.textcontent = questionList[0].option2;
    createButton1.className = "answeroption";
    createButton1.id = "#btn2"

    var createButton3 = document.createElement("button");
    createButton1.textcontent = questionList[0].option3;
    createButton1.className = "answeroption";
    createButton1.id = "#btn3"

    var createButton4 = document.createElement("button");
    createButton1.textcontent = questionList[0].option4;
    createButton1.className = "answeroption";
    createButton1.id = "#btn4"

    buttonContainerEl.appendChild(createButton1);
    buttonContainerEl.appendChild(createButton2);
    buttonContainerEl.appendChild(createButton3);
    buttonContainerEl.appendChild(createButton4);


   
    var content = document.querySelector("#startbtn");
    content.innerHTML = ""; // clear what's there
    content.appendChild(buttonContainerEl);

}


var startGame = function() {
    showQuestions ();
    countTimer();
    showTime();
    
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
    answerEl1.textContent = questionList[0].option1;
    createButtons(answerOptions);
    
    


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