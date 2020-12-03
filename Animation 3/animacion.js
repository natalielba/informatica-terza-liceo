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
  yoda: "http://www.html5canvastutorials.com/demos/assets/yoda.jpg",
  soccerBall:
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg",
};
let x = 50;
let y = 60;
let vX = 50;
let vY = 75;
let dT = 0.03;
// let t = 0;
// coordenadas del objeto que controla el usuario
let x2 = 200;
let y2 = 200;
// let angle2 = 0
function draw(images) {
  // t += 0.03;
  x = x + vX * dT; // 50 + 10*0.03 = 50.3
  y = y + vY * dT; // 50 + 10*0.03 = 50.3
  // Si está chocando con alguna pared, entonces cambiar de signo la velocidad
  // choque con la pared inferior
  if (400 - y < 15) vY = -vY;
  // choque con la pared de la derecha
  if (400 - x < 15) vX = -vX;
  // choque con la pared superior
  if (y - 0 < 15) vY = -vY;
  ctx.clearRect(0, 0, 400, 400);
  ctx.drawImage(images.yoda, x2, y2, 60, 60);
  ctx.drawImage(images.soccerBall, x - 15, y - 15, 30, 30);
  // ctx.drawImage(images.yoda, 200, 200, 50, 50);
}
// La variable images contiene las imagenes cargadas
function run(images) {
  //  La función draw se va a ejecutar cada 30 ms, es decir
  // 1000/30 = 33.333 veces por segundo
  window.setInterval(function () {
    draw(images);
  }, 30);
  //   ctx.drawImage(images.soccerBall, 200, 20, 30, 30);
  //   ctx.drawImage(images.yoda, 200, 0, 200, 400);
}
// la funcion run se ejecuta cuando las imagenes acaban de cargar.
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