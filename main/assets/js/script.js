
    var timerEl = document.getElementById('countdown');
    var mainEl = document.getElementById('main');
    var answerEl = document.getElementById('check-answer');
    var startButton = document.getElementById('start-button');
    var questionEl = document.getElementById('question');
    var button = document.querySelector("button");
    var timeLeft = 100;
    var button1El = document.getElementById('answer-1');
    var button2El = document.getElementById('answer-2');
    var button3El = document.getElementById('answer-3');
    var button4El = document.getElementById('answer-4');
    var finalScoreEl = document.getElementById('final-score')

    console.log(questionEl)
    // The startGame function is called when the start button is clicked
    function intStartGame(event) {
        // Prevents start button from being clicked when round is in progress
        event.preventDefault();
        startButton.disabled = true;
        startTimer();
        document.getElementById("start-box").hidden = true;
        document.getElementById("questions").hidden = false;
    }
    
    // Timer that counts down from 75
    function startTimer() {

        
        

        // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
        var timeInterval = setInterval(function () {
            console.log("in here countdown");
            
            
            // As long as the `timeLeft` is greater than 1
            if (timeLeft >= 0) {
                timerEl.textContent = timeLeft ;
                timeLeft--;
                if (questionEl.getAttribute("name") == 1) {
                    checkQuestion1();
                } else if (questionEl.getAttribute("name") == 2) {
                    checkQuestion2();
                } else if (questionEl.getAttribute("name") == 3) {
                    checkQuestion2();
                } else if (questionEl.getAttribute("name") == 4) {
                    checkQuestion2();
                }
            } 
            else{
                // Once `timeLeft` gets to 0, set `timerEl` to an empty string
                answerEl.textContent = 'You lost';
                answerEl.hidden = false
                // Use `clearInterval()` to stop the timer
                clearInterval(timeInterval);
                document.getElementById('get-initials').hidden = false;
                document.getElementById("questions").hidden = true;
            }

        }, 1000);
    }

    function checkQuestion1() {
        document.addEventListener("click", function(event){
            event.preventDefault();
            if (event.target.id == "answer-1"){
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
        });
    }


    function checkQuestion2() {
        document.addEventListener("click", function(event){
            event.preventDefault();
            if (event.target.id == "answer-3"){
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
        });
    } 


    function checkQuestion3() {
        document.addEventListener("click", function(event){
            event.preventDefault();
            if (event.target.id == "answer-4"){
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
        });
    }

    function checkQuestion4() {
        document.addEventListener("click", function(event){
            event.preventDefault();
            if (event.target.id == "answer-4"){
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
                questionEl.setAttribute('name', "4");
                questionEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:"
                button1El.textContent = "1. JavaScript";
                button2El.textContent = "2. Terminal/bash";
                button3El.textContent = "3. for loops";
                button4El.textContent = "4. console.log";
            }
        });
    }


    // Attach event listener to start button to call startGame function on click
    startButton.addEventListener("click", intStartGame);

