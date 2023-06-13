
    var timerEl = document.getElementById('countdown');
    var mainEl = document.getElementById('main');
    var answerEl = document.getElementById('check-answer');
    var startButton = document.getElementById('start-button');
    var questionEl = document.getElementById('question');
    var timeLeft = 10;
    var button1El = document.getElementById('answer-1');
    var button2El = document.getElementById('answer-2');
    var button3El = document.getElementById('answer-3');
    var button4El = document.getElementById('answer-4');

    console.log(questionEl)
    // The startGame function is called when the start button is clicked
    function intStartGame() {
        // Prevents start button from being clicked when round is in progress
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
                checkQuestion1();
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
        var score = 0;
        
        if (questionEl.getAttribute("name") == 1) {
        
            document.addEventListener("click", function(event){
                if (event.target.id == "answer-1"){
                    console.log("correct answer given")
                    console.log("First Question");
                    console.log(document.getElementById("question").getAttribute("name") + " allen");
                    
                        answerEl.textContent = 'true';
                        answerEl.hidden = false;
                        score = score + timeLeft;
                        console.log (score + " True score");
                        button1El.textContent = "yes yes";
                        button2El.textContent = "yes yes";
                        button3El.textContent = "yes yes";
                        button4El.textContent = "yes yes";
                        questionEl.setAttribute('name', "2");
                    } else {
                        answerEl.textContent = 'False';
                        answerEl.hidden = false 
                        score = score + timeLeft - 10
                        console.log (score + " False score")
                    
                    console.log("False answer given")
                }
            });
        } else if (questionEl.getAttribute("name") == 2) {
        
            document.addEventListener("click", function(event){
                if (event.target.id == "answer-1"){
                    console.log("correct answer given")
                    console.log("First Question");
                    console.log(document.getElementById("question").getAttribute("name") + " allen");
                    
                        answerEl.textContent = 'true';
                        answerEl.hidden = false;
                        score = score + timeLeft;
                        console.log (score + " True score");
                        button1El.textContent = "No yes";
                        button2El.textContent = "No yes";
                        button3El.textContent = "yes yes";
                        button4El.textContent = "yes yes";
                        questionEl.setAttribute('name', "3");
                    } else {
                        answerEl.textContent = 'False';
                        answerEl.hidden = false 
                        score = score + timeLeft - 10
                        console.log (score + " False score")
                    
                    console.log("False answer given")
                }
            });
        }


    
    }

    // Attach event listener to start button to call startGame function on click
    startButton.addEventListener("click", intStartGame);

