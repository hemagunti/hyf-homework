let x = function() {
  return Math.floor(Math.random() * 1450);
};
let y = function() {
  return Math.floor(Math.random() * 1000);
};
let radius = function() {
  return Math.floor(Math.random() * 20);
};

let fillStyle = function() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return "rgba(" + r + "," + g + "," + b + ",1)";
};
//draw circle
class Circle {
  constructor(x, y, r, startAngle, endAngle, Color) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = Color;
  }
  draw() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
    ctx.fillStyle = this.fillColor;
    ctx.fill();
  }
}
/*draw circle for every 5sec*/
setInterval(() => {
  const c1 = new Circle(x(), y(), radius(), 0, 2 * Math.PI, fillStyle());
  c1.draw();
}, 100);

//mouse event
document
  .getElementById("myCanvas")
  .addEventListener("mousemove", getMousePosition);

function getMousePosition(event) {
  console.log(event);
  let x = event.clientX;
  let y = event.clientY;
  console.log(x + "" + y);
  const c1 = new Circle(x, y, 20, 0, 2 * Math.PI, fillStyle());
  c1.draw();
  var coords = "X coords: " + x + ", Y coords: " + y;
}
/*------Solution--------- */
// Paint a circle to a canvas element

/*let canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

// Class creation time!
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw() {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    ctx.fillStyle = this.fillColor;
    ctx.fill();
  }
}

let circle = new Circle(180, 180, 80, 0, 2 * Math.PI, "blue");
circle.draw();

// Now lets make art!
function randomNumber(low = 1, high) {
  return Math.floor(Math.random() * (high - low)) + low;
}

function makeArt() {
  let circlesDrawn = 0;
  let drawCirclesInterval = setInterval(() => {
    let x = randomNumber(1, 400);
    let y = randomNumber(1, 400);
    let r = randomNumber(1, 500 - circlesDrawn);
    let color = `rgb(${randomNumber(0, 255)}, ${randomNumber(
      0,
      255
    )}, ${randomNumber(0, 255)})`;
    let circle = new Circle(x, y, r, 0, 2 * Math.PI, color);
    circle.draw();
    circlesDrawn = circlesDrawn + 1;
    if (circlesDrawn > 500) clearInterval(drawCirclesInterval);
  }, 10);
}

// makeArt();*/
