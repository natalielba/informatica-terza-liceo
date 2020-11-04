let canvas = document.querySelector("#inicial");
let ctx = canvas.getContext("2d");

//rectángulos
// ctx.fillStyle = "red";
// rgba> red, green, blue, alpha. alpha quiere decir transparencia
ctx.fillStyle = "yellow";
// ctx.strokeStyle = "black";
// Los dos primeros parámetros son las coordenadas x y y de la esquina superior izquierda del rectángulo. Los otros dos son el ancho y el alto del rectángulo.

ctx.fillRect(100,100,100,200); 
ctx.stroke();

ctx.fillStyle = ("pink");
ctx.beginPath();
ctx.arc(150, 100, 50, 0, Math.PI, true);
ctx.moveTo(50, 100);
ctx.lineTo(50, 100);
ctx.stroke();
ctx.fill();


ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(150, 400);
ctx.lineTo(200, 300);
ctx.lineTo(100, 300);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 300);
ctx.lineTo(200, 300);
ctx.lineTo(200, 100);
ctx.lineTo(100, 100);
ctx.stroke();



