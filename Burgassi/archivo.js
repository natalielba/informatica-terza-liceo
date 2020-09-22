let lista = document.querySelector ("#parrafo");
console.log (parrafo);
parrafo.style.backgroundColor = "white";
let boton = document.querySelector ("#botonCambio");
function random(number) {
    return Math.floor(Math.random() * (number+1));
}
boton.onclick = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    parrafo.style.backgroundColor = rndCol;

}
let botonB = document.querySelector ("#botonOculto");
function ocultarParrafo() {
    parrafo.style.display = "none";
}
botonB.onclick = ocultarParrafo;

let botonC = document.querySelector ("#botonAparecer");
function mostrarParrafo() {
    parrafo.style.display = " ";
}
botonC.onclick = mostrarParrafo;