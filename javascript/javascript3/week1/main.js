
//fetch('')
let city = document.querySelector('input');
let btn = document.getElementById('searchBtn');
btn.addEventListener("click",function(){
    let cityName = city.value;
    //fetch the data from a city
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=f8552d0e00cb87d3f30c34cf9aa9f3b8')
    .then(response => response.json())
    .then(response => {
        //display the data
        console.log(response);
        let cityName = document.querySelector('#city-name');
        let cityTemp = document.querySelector('#temp');
        let cityHumidity = document.querySelector('#humidity');
        let cityDesc = document.querySelector('#weatherDesc');
        let windSpeed = document.querySelector("#wind-speed");
        

        cityName.innerHTML = response.name;
        cityTemp.innerHTML = Math.floor(response.main.temp) + "&#176";
        cityHumidity.innerHTML = "Humidity :"+" "+response.main.humidity + "%";
        windSpeed.innerHTML = "Wind Speed :"+" "+ Math.floor(response.wind.speed) + " " +"m/s";
        let weatherDesc = response.weather[0].description;
        cityDesc.innerHTML = weatherDesc.charAt(0).toUpperCase() + weatherDesc.slice(1);
        //for Weather icon 
        let iconId = response.weather[0].icon;
        let img = document.querySelector("#img1").src="http://openweathermap.org/img/w/"+iconId+".png";
       
      
        
       
      
        //Object.keys(response.coord
     })
})



//geo location
/*let x = document.getElementById("demo");
let geoBtn = document.getElementById('submit');
geoBtn.addEventListener("click",function(){
  console.log("hello");
  
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=f8552d0e00cb87d3f30c34cf9aa9f3b8')
  .then(response => response.json())
  .then(response => {
    console.log(response);
  
  })
})*/
  
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  let latitude =position.coords.latitude ; 
   let longitude = position.coords.longitude;
   console.log(latitude);
   console.log(longitude);
   fetch('https://api.openweathermap.org/data/2.5/weather?lat=latitude&lon=longitude&appid=f8552d0e00cb87d3f30c34cf9aa9f3b8')
  .then(response => response.json())
  .then(response => {
    console.log(response);
  
  })
}


