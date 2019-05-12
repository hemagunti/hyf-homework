//1.Basics
function getNumbers() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
      console.log(i + " " + "number is divisable by 3");
    } else if (i % 5 == 0) {
      console.log(i + " " + "number is divisible by 5");
    } else if (i % 3 == 0 && i % 5 == 0) {
      console.log(i + " " + "Jackpot");
    }
  }
}
getNumbers();
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
let ul = document.createElement("ul");
let li = document.createElement("li");
div.appendChild(ul);
ul.appendChild(li);
fetch("https://reqres.in/api/users")
  .then(response => response.json())
  .then(res => {
    console.log(res.data[0].first_name);
    console.log(res.data[1].first_name);
    console.log(res.data[2].first_name);
    //let result = res.filter(users => user.first_name);
    /*for (let i = 0; i < res.data.length; i++) {
      let userNames = document.createElement("div");
      let h2 = document.createElement("h2");
      h2.innerHTML = res.data[i].first_name;
      userNames.appendChild(body);
    }*/
  });
