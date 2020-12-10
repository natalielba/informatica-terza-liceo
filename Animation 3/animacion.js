let canvas = document.querySelector("#miCanvas");
let ctx = canvas.getContext("2d");

function loadImages(sources, callback) {
  let images = {};
  let loadedImages = 0;

  let numImages = Object.keys(sources).length;

  for (let src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      loadedImages++;
      if (loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}
var sources = {
  darthVader:
    "http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg",
  vaca: "https://lh3.googleusercontent.com/proxy/EnpLxPWzdg-CeX62o233JnKEOF8FZQ07ZewamEPvKKp3YbXHe7QqUbeptSuVhJJIjgB6QB8t6LupK_catddJk3pj1LiqUHxrUpGzFIfWj06RshSqprj4fzt7aKy9zGl25dIvbVRYLCI",
  soccerBall:
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg",
};
let x = 50;
let y = 60;
let vX = 50;
let vY = 75;
let dT = 0.03;
let x2 = 200;
let y2 = 200;
function draw(images) {
  x = x + vX * dT; 
  y = y + vY * dT; 
  if (300 - y < 15) vY = -vY;
  if (600 - x < 15) vX = -vX;
  if (y - 0 < 15) vY = -vY;
  ctx.clearRect(0, 0, 600, 300);
  ctx.drawImage(images.vaca, x2, y2, 150, 150);
  ctx.drawImage(images.soccerBall, x - 15, y - 15, 30, 30);
}
function run(images) {
  
  window.setInterval(function () {
    draw(images);
  }, 30);
 
}

loadImages(sources, run);

window.onkeydown = function (evento) {
  if (evento.key == "w") {
    y2 = y2 - 10;
  }
  if (evento.key == "s") {
    y2 = y2 + 10;
  }
  if (evento.key == "a") {
    x2 = x2 - 10;
  }
  if (evento.key == "d") {
    x2 = x2 + 10;
  }
};