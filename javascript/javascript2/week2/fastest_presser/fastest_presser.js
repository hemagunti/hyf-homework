let counterS = 0;
let counterL = 0;
//1. create input and button 
let button = document.getElementById("btn");
//Get the value of the input when button is clicked
button.addEventListener("click", function () {
    //convert sec to millisec i.e millseconds = sec * 1000;
    let durationSec = document.getElementById("timer").value;
    let durationMilliSec = durationSec * 1000;
    document.getElementById("countdown").innerHTML = durationSec;
    let countdown = durationSec;
    document.getElementById("countdown").innerHTML = countdown + " " + "sec left";
    //countdown
    var x = setInterval(function () {
        countdown = countdown - 1;
        document.getElementById("countdown").innerHTML = countdown + " " + "sec left";
        if (countdown < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "TimeUP";
        }
    }, 1000);
    if (durationSec == null || durationSec == "") {
        alert("You must enter the field");
    }
    //Set timeout for the time specified by the user
    setTimeout(function () {
        if (counterS > counterL) {
            document.getElementById("user1").innerHTML = "User 1 won the game";
            var confettiSettings = { target: 'my-canvas-s' };
            var confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
        } else if (counterS < counterL) {
            document.getElementById("user2").innerHTML = "User 2 won the game";
            var confettiSettings = { target: 'my-canvas-l' };
            var confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();} else {
            let drawText = document.getElementById("user");
            drawText.innerHTML = "The game is draw";
        }
    }, durationMilliSec);
});
//3. Create an event listener so you can call a function when any key is pressed.
document.body.addEventListener('keypress', keyPressed);
function keyPressed(event) {
    let keyCode = event.keyCode;
    //console.log(keyCode); To check the keyCode value
    if (keyCode === 115) {
        counterS++;
        document.getElementById("counter1").innerHTML = counterS;
    } else if (keyCode == 108) {
        counterL++;
        document.getElementById("counter2").innerHTML = counterL;
    } else {
        alert("Press S or L key");
    }

}









