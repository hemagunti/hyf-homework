//1.Basics
function displayNumbers() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i + " " + "Jackpot");
    }
    if (i % 3 == 0) {
      console.log(i + " " + "number is divisable by 3");
    }
    if (i % 5 == 0) {
      console.log(i + " " + "number is divisible by 5");
    }
  }
}
displayNumbers();

//2.DOM manipulation
let div = document.getElementById("main");
let btn = document.createElement("button");
btn.innerHTML = "Click Here";
div.appendChild(btn);
let main = document.createElement("div");
div.appendChild(main);

let images = ["flower.jpg", ""];
//Onclick event
btn.addEventListener("click", function() {
  img = document.createElement("img");
  img.src = "flower.jpg";
  main.appendChild(img);
});

//3. API call

fetch("https://reqres.in/api/users")
  .then(response => response.json())
  .then(response => {
    console.log(response);

    for (var i = 0; i < response.data.length; i++) {
      main.innerHTML += `<div>  ${response.data[i].first_name} </div>`;
    }
  });
