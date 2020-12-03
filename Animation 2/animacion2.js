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
  lana: "https://images.vexels.com/media/users/3/201831/isolated/preview/2052e7aedc38b5f0db3e2c9c354291be-dibujos-animados-de-bola-de-hilo-de-lana-by-vexels.png",
  Gato:
    "https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_1280.png",
    pez: "https://assets.stickpng.com/images/580b57fbd9996e24bc43bbf6.png"
};
let x = 50;
let y = 300;
let dX = 8;
let dY = 5;
let vX = 5;
let v0Y = -40;
let aY = 2;
let t = 0;
let x0 =0;
let y0 = 300; 
function draw(images) {
  x0 = x0 + dX;
  y0 = y0 - dY;
  t += 1;
  x = 0 + vX * t;
  y = 400 + v0Y * t + (aY * Math.pow(t, 2)) / 2;
  ctx.clearRect(0, 0, 400, 400);
  ctx.drawImage(images.Gato, x, y, 200, 200);
  ctx.drawImage(images.lana, 200, 200, 100, 100);
  ctx.drawImage(images.pez, x0, y0, 100, 100);

}
// La variable images contiene las imagenes cargadas
function run(images) {
  window.setInterval(function () {
    draw(images);
  }, 30);
  //   ctx.drawImage(images.soccerBall, 200, 20, 30, 30);
  //   ctx.drawImage(images.yoda, 200, 0, 200, 400);
}
// la funcion run se ejecuta cuando las imagenes acaban de cargar.
loadImages(sources, run);