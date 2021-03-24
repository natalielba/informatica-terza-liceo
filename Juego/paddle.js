//variable velocidad de los paddles
let speed = 10
class Paddle{
    constructor(x,y,w,l,isLeft){
        this.x = x
        this.y = y
        this.w = w
        this.l = l
        this.isLeft = isLeft
    }
    show(){
        fill(75, 125, 200)
        rect(this.x, this.y, this.w, this.l)
    }
    move(){
        if(this.isLeft){
            //el de la izquierda se controla con las teclas w & s
            if (keyIsDown(87)) {
                this.y = this.y - speed
            }
            if (keyIsDown(83)) {
                this.y = this.y + speed
            }
        }else{
            //el de la derecha se controla con las flechas arriba y abajo
            if (keyIsDown(UP_ARROW)) {
                this.y = this.y - speed
            }
            if (keyIsDown(DOWN_ARROW)) {
                this.y = this.y + speed
            }
        }
        //boquear la posicion en los bordes
        if (this.y > height - this.l) {
            this.y = height - this.l
        }
        if (this.y < 0) {
                this.y = 0
        }
    }
}