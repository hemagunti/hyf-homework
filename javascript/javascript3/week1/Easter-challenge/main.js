function check()
{
    //alert("You won one Easter egg");
    let question1 = document.quiz.question1.value;
    console.log(question1);
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let question4 = document.quiz.question4.value;
  
    let count = 0;
    if(question1 === "Festival of colors"){
        count++;
    }
    if(question2 === "Iran"){
        count++;
    }
    if(question3 === "Egg hunt"){
        count++;
    }
    if(question4 === "HackYourFuture"){
        count++;
    }
    
    let messages = ["don't you want a easter egg","Try Again ..","Almost there...try again","keep going","Great Job!"];
    let pictures = ["giphy.gif","easterEgg-1.jpg","easterEgg-2.jpg","easterEgg-3.jpg","easterEgg-4.jpg"];
    let score;
    
    if(count === 0){
        score =0;
    }
    if(count === 1)
    {
        score = 1;
    }
    if(count ===2)
    {
        score = 2;
    }
    if(count === 3)
    {
       score = 3;
    }
    if(count ===4)
    {
        score = 4;
        /*var confettiSettings = { target: 'my-canvas' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();*/
    }
    document.querySelector('.after-submit').style.visibility="visible";
    document.querySelector("#message").innerHTML = messages[score];
    document.querySelector("#picture").src = pictures[score];
    document.querySelector('#number-correct').innerHTML = "Hey"+" "+"!"+" "+"You got"+" "+count+" "+"Easter Eggs";
   
}