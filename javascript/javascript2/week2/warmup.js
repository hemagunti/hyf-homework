//1. logout text afte 2.5 seconds
setTimeout(function () {
    console.log("Called after 2.5 secongs");
}, 2500);
//2 & 3. logout text after 3.5 seconds after the btn is clicked
function logOutText() {
    setTimeout(function () {
        console.log("Called after 3.5 secongs");
    }, 3500);
}
document.getElementById("btn").addEventListener("click", logOutText);
//4. call one function in another function
function earth()
{
    console.log("Earth");
}
 function saturn()
{
    console.log("Saturn");
}
function planet(planetLogFunction)
{
    planetLogFunction();
}
planet(earth);
planet(saturn);
//5. Users location should be logged out when click on button
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude; 
}
//6. show the location on the map*/
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
//7. call function with Different delays and diff. callbacks
function callback()
{
console.log("called after seconds");
}
function runAfterDelay(delay,func1)
{
   setTimeout(func1,delay);
}
runAfterDelay(3500,callback);
runAfterDelay(1500,callback);

//8. Double click on the page 
function doubleClick() {
    setTimeout(function () {
        console.log("double clicked in 1.5 sec");
    }, 1500);
    document.getElementById("double-click");
  }
//9.Funny joke bad joke
function funnyJoke()
{
    console.log("it is funny joke");
}
function badJoke(){
    console.log("this is bad joke");
}
function jokeCreator(shouldTellFunnyJoke,logFunnyJoke,logBadJoke)
{
  if(shouldTellFunnyJoke === "true")
  {
      logFunnyJoke();
  }else
  {
      logBadJoke();
  }
}
jokeCreator("true",funnyJoke,badJoke);
//different 2&3 way1 working
  /*function logOutText() {
    setTimeout(text,3500);
    }
    function text()
    {
        console.log("called after 3.5 seconds");
    }
    document.getElementById("btn").addEventListener("click",logOutText);*/

//different way2 not working
/*function delay(delay,stringToLog)
{
   setTimeout(function(){
       console.log(stringToLog);},delay);
}
document.getElementById("btn").addEventListener("click",delay(3500,"called after 3.5 seconds"));*/











