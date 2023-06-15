var outer = document.querySelector(".outer-div");
var inner = document.querySelector(".inner-div");
var button = document.querySelector(".button");

var timeInterval;

var startButtonEl = document.getElementById('start-button');
var button1El = document.getElementById('answer-1');
var button2El = document.getElementById('answer-2');
var button3El = document.getElementById('answer-3');
var button4El = document.getElementById('answer-4');

var timeLeft = 10;
var score = 0;

var timerEl = document.getElementById('countdown');

var answerEl = document.getElementById('check-answer');
var scoreEl = document.getElementById('final-score')

const buttonGroup = document.getElementById("questions");
const questionEl = document.getElementById("question");
const buttonGroupPressed = e => { 
  
const isButton = e.target.nodeName === 'BUTTON';
  
    if(!isButton) {
        return;
    }

    
    if (questionEl.getAttribute("name")  == 1){ // check question number
        if (e.target.id == "answer-1") {
            console.log("question 1")
            answerEl.textContent = 'true';
            answerEl.hidden = false;
            questionEl.setAttribute('name', "2");
            questionEl.textContent = "The condition in an if/else statement is enclosed with ------."
            button1El.textContent = "1. quotes";
            button2El.textContent = "2. curly brackets";
            button3El.textContent = "3. parenthesis";
            button4El.textContent = "4. square brackets";
        } else {
            answerEl.textContent = 'False';
            answerEl.hidden = false;
            timeLeft = timeLeft - 10
            questionEl.setAttribute('name', "2");
            questionEl.textContent = "The condition in an if/else statement is enclosed with ------."
            button1El.textContent = "1. quotes";
            button2El.textContent = "2. curly brackets";
            button3El.textContent = "3. parenthesis";
            button4El.textContent = "4. square brackets";
        }
        
        
    } else if (questionEl.getAttribute("name")  == 2){
        console.log("question 2")
        if (e.target.id == "answer-3"){
            answerEl.textContent = 'true';
            answerEl.hidden = false;
            questionEl.setAttribute('name', "3");
            questionEl.textContent = "Arrays in JavaScript can be used to store ------."
            button1El.textContent = "1. numbers abd strings";
            button2El.textContent = "2. other arrays";
            button3El.textContent = "3. booleans";
            button4El.textContent = "4. all of the above";
                
        } else {
            answerEl.textContent = 'False';
            answerEl.hidden = false;
            timeLeft = timeLeft - 10
            questionEl.setAttribute('name', "3");
            questionEl.textContent = "Arrays in JavaScript can be used to store ------."
            button1El.textContent = "1. numbers abd strings";
            button2El.textContent = "2. other arrays";
            button3El.textContent = "3. booleans";
            button4El.textContent = "4. all of the above";
        }
    
    }else if (questionEl.getAttribute("name")  == 3){
        console.log("question 3")
        if (e.target.id == "answer-4"){
            answerEl.textContent = 'true';
            answerEl.hidden = false;
            questionEl.setAttribute('name', "4");
            questionEl.textContent = "String values must be enclosed within ______ when being assigned to variables"
            button1El.textContent = "1. Commas";
            button2El.textContent = "2. curly brackets";
            button3El.textContent = "3. square brackets";
            button4El.textContent = "4. parenthesis";
                
        } else {
            answerEl.textContent = 'False';
            answerEl.hidden = false;
            timeLeft = timeLeft - 10
            questionEl.setAttribute('name', "4");
            questionEl.textContent = "String values must be enclosed within ______ when being assigned to variables"
            button1El.textContent = "1. Commas";
            button2El.textContent = "2. curly brackets";
            button3El.textContent = "3. square brackets";
            button4El.textContent = "4. parenthesis";
        }
    }else if (questionEl.getAttribute("name")  == 4){
        console.log("question 4")
        if (e.target.id == "answer-4"){
            answerEl.textContent = 'true';
            answerEl.hidden = false;
            questionEl.setAttribute('name', "5");
            questionEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:"
            button1El.textContent = "1. JavaScript";
            button2El.textContent = "2. Terminal/bash";
            button3El.textContent = "3. for loops";
            button4El.textContent = "4. console.log";
                
        } else {
            answerEl.textContent = 'False';
            answerEl.hidden = false;
            timeLeft = timeLeft - 10
            questionEl.setAttribute('name', "5");
            questionEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:"
            button1El.textContent = "1. JavaScript";
            button2El.textContent = "2. Terminal/bash";
            button3El.textContent = "3. for loops";
            button4El.textContent = "4. console.log";
        }
    }else if (questionEl.getAttribute("name")  == 5){
        console.log("question 5")
        if (e.target.id == "answer-4"){
            clearInterval(timeInterval);
            answerEl.textContent = 'true';
            answerEl.hidden = false;
            
            finalScore ();
            
                
        } else {
            clearInterval(timeInterval);
            answerEl.textContent = 'False';
            answerEl.hidden = false;
            timeLeft = timeLeft - 10
            
            
            finalScore ();

        }
    }
    
}





function startTimer() {

        
        

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft >= 0) {
            timerEl.textContent = timeLeft ;
            timeLeft--;
            document.getElementById("start-box").hidden = true;
            document.getElementById("questions").hidden = false;

        } 
        else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            answerEl.textContent = 'Times Up';
            answerEl.hidden = false
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            document.getElementById('get-initials').hidden = false;
            document.getElementById("questions").hidden = true;
        }

    }, 1000);
}


function finalScore () {
    timerEl.textContent = timeLeft ;
    score = timeLeft;
    answerEl.textContent = 'Completed';
    scoreEl.textContent = "Your final score is " + score;
    answerEl.hidden = false;
    buttonGroup.hidden = true;
    document.getElementById('get-initials').hidden = false;
}















// calling methods
startButtonEl.addEventListener("click", startTimer);
buttonGroup.addEventListener("click", buttonGroupPressed);