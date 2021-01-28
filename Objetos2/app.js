import {IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT} from './initialize.js'

let lapiz = {
    x:0,
    y:400,
    r:25,
    vX: 50,
    vY: -70,
    dibujarse:function(){ 
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x,this.y,50,80); 
        ctx.fillStyle = "pink";
        ctx.arc(this.x+25,this.y,this.r,Math.PI,0);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "grey";
ctx.beginPath();
ctx.moveTo(this.x, this.y+80);
ctx.lineTo(this.x+25,this.y+100);
ctx.lineTo(this.x+50, this.y+80);
ctx.fill();
ctx.stroke();
},
    moverse:function(){
        this.x = this.x + this.vX * dT/1000;
        this.y = this.y + this.vY * dT/1000;
        
       
    }
}
let lapiz2 = Object.create(lapiz)

lapiz2.x = 0;
lapiz2.y = 0;
lapiz2.vX = 50;
lapiz2.vY = 25;
let lapiz3 = Object.create(lapiz)
lapiz3.x = 170;
lapiz3.y = 170;
lapiz3.vX = 0;
lapiz3.vY = 0;
drawObj.draw =  function(){
    ctx.clearRect(0, 0, 400, 400);
    lapiz.dibujarse();
    lapiz2.dibujarse();
    lapiz2.moverse();
    lapiz3.dibujarse();
    lapiz3.moverse();
    lapiz.moverse();
}
run()