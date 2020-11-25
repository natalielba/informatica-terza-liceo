let terza = document.querySelector("#terza");
let terza2 = document.querySelector("#terza2");

function cambiarColor() {
  terza.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  terza2.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}
// setInterval> ejecuta una función cada cierto tiempo. El tiempo se debe escribir en milisegundos
let x = 0;
let dX = 10;
let angle = 0;
let dAngle = 5;
let y = 0;
let dY = 10;
let y2 = 500;
let x2 = 10;
let vx = 11;
let vy = -10;
let a = 10;
let t = 0;

function mover() {
  x = x + dX;
  y = y + dY;
  angle - angle + dAngle;
  terza.style.transform = `translate(${x}px,${y}px) rotate(${angle}deg)`;
  t+= 0.1;
  x2 = x2 + vx*t;
  y2 = y2 + vy*t + (a/2)*t*t;
  terza2.style.transform = `translate(${x2}px,${y2}px) rotate(${angle}deg)`;
}
let idMovimiento;
let idColor;
let corriendo = false;
function start() {
  corriendo = true;
  idMovimiento = window.setInterval(mover, 100);
  idColor = window.setInterval(cambiarColor, 30);
}
function stop() {
  corriendo = false;
  window.clearInterval(idMovimiento);
  window.clearInterval(idColor);
}
window.onkeydown = function (evento) {
  if (evento.key == "w") {
    if (corriendo) stop();
    else start();
  }
};