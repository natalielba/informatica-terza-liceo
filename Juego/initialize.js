//elementos que interactuan con el dom
let nombre = document.getElementById('nombre')
let nombre2 = document.getElementById('nombre2')
let boton = document.getElementById('boton')
let boton2 = document.getElementById('boton2')
let on = false
let inputname = "Jugador 1"
let inputname2 = "Jugador 2"
let inputtext = document.getElementById('input')
let inputtext2 = document.getElementById('input2')
let player1 = 0
let player2 = 0
let win = false
let winScore = 10

//funciones para crear el area de juego
var cnv;

function centerCanvas() {
    var x = ((windowWidth - width) / 2);
    var y = ((windowHeight - height) / 2)+50;
    cnv.position(x, y);
}

//las siguientes son funciones para añadir los nobres de los jugadores al campo de juego
boton.onclick = setText

function setText(){
    inputname = inputtext.value
    nombre.textContent="Jugador 1: "+inputname
}

boton2.onclick = setText2
function setText2(){
    inputname2 = inputtext2.value
    nombre2.textContent="Jugador 2: "+inputname2
}

function windowResized() {
    centerCanvas();
}
//inica las variables para que sean globales
let pad1
let pad2
let balon
function setup() {
    cnv = createCanvas(600*1.3, 400*1.3);
    centerCanvas();
    background(255, 0, 200);
    // aqui se inicializan los objetos paddle y ball
    pad1 = new Paddle(0,250,20,120, true)
    pad2 = new Paddle(550,300,20,120, false)
    balon = new Ball(300,200,10,10,20)
}

//esta funcion es un loop que se repite de manera infinita que refresca la pantalla
//para que se actualicen los dibujos
function draw(){
    background(0);
    pad2.x = width - pad2.w
    //rectangulo resetear
    fill(255, 0, 0)
    rect(375, 0, 80, 50)
    fill(0)
    text('resetear punt.', 380, 30)
    fill(0, 255, 0)
    rect(250, 0, 100, 50)

    // aqui se sabe si el juego fue pausado o no
    if(on){
        pad1.show()
        pad2.show()
        pad1.move()
        pad2.move()
        balon.show()
        balon.bounce(pad1,pad2)
        balon.update()

        fill(255)
        text('score '+inputname+'\n' + player1, 60, 30)
        text('score '+inputname2+'\n' + player2, 490, 30)
        fill(0)
        //aumenta el puntaje de los jugadores
        if (balon.x == width - (balon.size / 2)) {
            player1 = player1 + 1
        }
        if (balon.x == (balon.size / 2)) {
            player2 = player2 + 1
        }
        fill(0)
        text('stop', 285, 30)
        //revisa si algun jugador ya gano
        if(win==false && (player1==winScore || player2== winScore)){
            if(player1==winScore){
                alert(inputname+" ha ganado el juego")
            }else{
                alert(inputname2+" ha ganado el juego")
            }
            on = false
            player1 = 0
            player2 = 0
        }
    }
    //resetear posiciones pero no puntaje y pausar el juego
    else {
        fill(0)
        text('start', 285, 30)
        fill(255)
        text('score '+inputname+'\n' + player1, 60, 30)
        text('score '+inputname2+'\n' + player2, 490, 30)
        fill(0)
        pad1.x = 0
        pad1.y = 250
        pad2.x = width - pad2.w
        pad2.y = 300
        balon.x = width / 2
        balon.y = height / 2
        if (balon.speedx < 0) {
            balon.speedx *= -1
        }
        if (balon.speedy < 0) {
            balon.speedy *= -1
        }
    }
}

function mousePressed() {
    if (mouseX >= 250 && mouseX <= 350 && mouseY >= 0 && mouseY <= 50) {
        on = true
    }
    if (mouseX >= 375 && mouseX <= 455 && mouseY >= 0 && mouseY <= 50) {
        player1 = 0
        player2 = 0
    }
}