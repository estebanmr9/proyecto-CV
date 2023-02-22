/**Java Scrip para pagina de CV 
Alumno Esteben Martin Rivero*/


/**Cambiar modo de lectura*/

function cambiarmodo() {
    var element = document.body;
    element.classList.toggle("Modo-luz");}


/**Boton para volver arriba*/

let mybutton = document.getElementById("subir");
    
function subir() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;}


/**calculadora de edad*/

function sumarfechas(){
    let numeroA = document.getElementById("numero1").value;
    let numeroB = -1991;
    
    let ResultadoPrueba = suma(parseInt(numeroA), parseInt(numeroB));
    
    
       document.getElementById("resultado").innerHTML = ResultadoPrueba;
    };

function suma(a,b){return a+b}    



/**Alumno Esteben Martin Rivero*/