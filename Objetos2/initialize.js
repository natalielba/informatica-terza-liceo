let canvas = document.querySelector("#miCanvas");
let ctx = canvas.getContext("2d");
let drawObj={draw:function(){}}
let IMAGES
let mainInterval
let dT = 30
function loadImages(sources, callback) {
  let images = {};
  let loadedImages = 0;

  let numImages = Object.keys(sources).length;

  for (let src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      loadedImages++;
      if (loadedImages >= numImages) {
        console.log("aca se define IMAGES")
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}
let sources = {
  darthVader:
    "http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg",
  yoda: "http://www.html5canvastutorials.com/demos/assets/yoda.jpg",
  soccerBall:
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg",
};
function start(images) {  
  IMAGES = images
  mainInterval = window.setInterval(drawObj.draw, dT);
}
// function stop(mainInterval){
//   window.clearInterval(mainInterval)
//   console.log("Stopping")
// }
function run(){
  loadImages(sources, start);
}
// La variable images contiene las imagenes cargadas

// console.log(IMAGES)

export {canvas, ctx, drawObj, IMAGES, dT, run, start, mainInterval}