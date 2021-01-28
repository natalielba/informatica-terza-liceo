
let estudiante1 = {
   
    nombre: "Camila",
    edad: 16,
    curso: "Seconda Liceo",
    notas: [8,9,5,9],
    añadirNota: function(nota){ this.notas.push(notas);
    },
    mostrarInformacion:function(){
      console.log(this.nombre,this.edad,this.curso);
    },
    promedio:function(){
    let suma=0;
    for(nota of this.notas)suma+=nota;
    return suma/this.notas.length;
  },
}; 
   function Estudiante(nombre,edad,curso,notas){
     this.nombre = nombre;
     this.edad = edad;
     this.curso = curso;
     this.notas = notas;
     (this.añadirNota = function (nota){
     this.notas.push(nota);
   }),
   (this.promedio = function (){
     let suma = 0;
    for (nota of notas) suma+=nota;
     return suma/this.notas.length 
  }),
   (this.mostrarInformacion = function ()
    {console.log(this.nombre,this.edad,this.curso)});
}
   let estudiante2 = new Estudiante("Alberto",13,"3 Media",[10,3,6,9]);
   let estudiante3 = new Estudiante ("Lina",18, "4 liceo", [6,7,6,8]);

let carro1 = {
  marca: "Audi",
  modelo: "TT",
  año: 2010,
  kilometraje: 860000,
  kpg: 80,
  añadirRecorrido : function (km) {
    this.kilometraje += km;
  },
  calcularConsumo : function (Recorrido) {
    return Recorrido/this.kpg;
  },
  mostrarInformacion : function () {
    console.log(this.marca,this.modelo,this.año,this.kilometraje);
  },
}; 

  function carro (marca,modelo,año,kilometraje,kpg){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.kilometraje = kilometraje;
    this.kpg = kpg;
    
    (this.añadirRecorrido = function (km) {
      this.kilometraje += km;
    }),
    (this.calcularConsumo = function (Recorrido){
      return Recorrido/this.kpg;
    }),
    (this.mostrarInformacion = function (){
      console.log(this.marca,this.modelo,this.año,this.kilometraje,this.kpg)
    });
  }
  let carro2 = new carro ("renault","kwid",2017,20000,40);
  let carro3 = new carro ("tesla","3",2018,80000,83); 
