let mercado = JSON.parse(localStorage.getItem("Mercado"));
if(mercado == null)mercado = [];
let lista = document.querySelector("#listaMercado");
function addElemento(nombre){




let elemento = document.createElement("li");
elemento.innerHTML = nombre;

lista.appendChild(elemento);
}
function generarListaHtml(){
    lista.innerHTML = "";
for (let elem of mercado){
    addElemento(elem);
    }
} 
let btn = document.querySelector("#btnAdd");
let input = document.querySelector("#inputAdd");
function btnPresionado(){
  let nombre = input.value;
  input.value = "";
  mercado.push(nombre);
  generarListaHtml(); 
  localStorage.setItem("Mercado",JSON.stringify(mercado));
}


btn.onclick = btnPresionado;
generarListaHtml();
//addElemento("Mantequilla")
//addElemento("Pan")
//addElemento("Arroz")
//addElemento("Lentejas")
//addElemento("Leche")

