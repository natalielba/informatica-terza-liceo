

class Ball{
    constructor(x, y, speedx, speedy, size){
        this.x = x
        this.y = y
        this.speedx = speedx
        this.speedy = speedy
        this.size = size
    }
    show(){
        fill(255)
        ellipse(this.x, this.y, this.size, this.size)
    }
    bounce(cuad1, cuad2){
        // rebote en el rectangulo derecho
        if (this.x + (this.size / 2) >= cuad2.x && this.y >= cuad2.y && this.y <= cuad2.y + cuad2.l && this.speedx > 0) {
            this.speedx *= -1
        }
        //rebote en el rectangulo izquierdo
        else if (this.x - (this.size / 2) <= cuad1.x + cuad1.w && this.y >= cuad1.y && this.y <= cuad1.y + cuad1.l && this.speedx < 0) {
            this.speedx *= -1
        }
        //rebote borde derecha e izquierda
        else if (this.x == (this.size / 2) && this.speedx < 0) {
            this.speedx *= -1
        }
        else if (this.x == width - (this.size / 2) && this.speedx > 0) {
            this.speedx *= -1
        }
        //rebote arriba y abajo
        else if (this.y == height -(this.size / 2) && this.speedy > 0) {
            this.speedy *= -1
        } else if (this.y == (this.size / 2) && this.speedy < 0) {
            this.speedy *= -1
        }
    }
    update(){
        this.x += this.speedx
        this.y += this.speedy
    }
}