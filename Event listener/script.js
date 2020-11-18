let canvas = document.querySelector("#canvas1");
let ctx = canvas.getContext("2d");
function circulo(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, true);
  ctx.fill();
  ctx.stroke();
}
function rectangulo(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fill();
  ctx.stroke();
}

canvas.onclick = function (evento) {
  ctx.fillStyle = "rgba(255,100,100,0.7)";
  circulo(evento.offsetX - 10, evento.offsetY, 15);
  circulo(evento.offsetX + 10, evento.offsetY, 15);
  circulo(evento.offsetX, evento.offsetY - 10, 15);
  circulo(evento.offsetX, evento.offsetY + 10, 15);
  ctx.fillStyle = "yellow";
  circulo(evento.offsetX, evento.offsetY, 8);

  
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let x = 200;
let y = 200;
let puntaje = 0;
circulo(x, y, 15);
document.onkeydown = function (evento) {
  if (evento.key == "w") {
    clear();
    y = y - 10;
    circulo(x, y, 15);
  }
  if (evento.key == "s") {
    clear();
    y = y + 10;
    circulo(x, y, 15);
  }
  if (evento.key == "d") {
    clear();
    x = x + 10;
    circulo(x, y, 15);
  } if (evento.key == "a") {
    clear();
    x = x - 10;
    circulo(x, y, 15);
  }
  if ((y < 15 && y > 0) || (y > 385 && y < 400) || (x < 15 && x > 0) || (x > 385 && y < 400)) {
    puntaje += 1;
    document.querySelector("#puntaje").innerHTML = puntaje;
  }
  
}
}
