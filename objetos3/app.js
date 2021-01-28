import {IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT} from './initialize.js'

let balones = []
let Balon = {
x:200,
y:200,
r:15,
vX:50,
vY:-50,
dibujarse:function (){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,2*Math.PI,0);
    ctx.fillStyle="rgba(0,0,0,0.5)"
    ctx.stroke();
    ctx.fill();
},
moverse:function(){
    this.x = this.x + this.vX * dT/1000;
    this.y = this.y + this.vY * dT/1000;
    }
}
drawObj.draw = function(){
    ctx.clearRect(0,0,400,400);
    for(let balon of balones){
        balon.dibujarse()
        balon.moverse()
    }
}

run()
function crearParticula(hola){
    let nuevoBalon = Object.create(Balon)
    //asignar x, y, vX y vY
    nuevoBalon.x = hola.offsetX 
    nuevoBalon.y = hola.offsetY
    // Genero el angulo de manera aleatoria
    // Math.random genera un numero aleatorio entre 0 y 1
    let ang = 2 * Math.PI * Math.random()
    let vel = 400 * Math.random ()
    nuevoBalon.vX = vel * Math.cos(ang)
    nuevoBalon.vY = vel * Math.sin(ang)

    // añado el nuevo balón al array de balones
    balones.push(nuevoBalon)
    console.log(hola.offsetX,hola.offsetY)
}

// Al hacer click se va a ejecutar la función crear partícula
canvas.onclick = crearParticula