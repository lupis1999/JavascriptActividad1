//FUNCIONES 
//Una función es un bloque de código diseñado para realizar una tarea específica.
//En JavaScript, las funciones se definen utilizando la palabra clave function, seguida del nombre de la función, paréntesis y llaves. Por ejemplo:
// function nombreDeLaFuncion() {
//     // código a ejecutar
// }
//Ejemplo de una función que saluda a una persona por su nombre
saludo();
function cuadrado(numero) {
    let cuadrado = numero * numero;
    return cuadrado;
}
let numero = prompt("Ingrese un número para calcular su cuadrado:");
let resultado = cuadrado(numero);
console.log("El cuadrado de " + numero + " es: " + resultado);

//funcion sin input
function saludo() {
    console.log("¡Hola! Bienvenido a JavaScript.");
}
//funciones con multiples parametros 
function areaRectangulo(base, altura) {
    return base * altura;
}
let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
let resultadoArea = areaRectangulo(base, altura);
console.log("El área del rectángulo es: " + resultadoArea);

//funcion flecha
//Las funciones flecha son una forma más concisa de escribir funciones en JavaScript. Se introdujeron en ECMAScript 6 y se definen utilizando la sintaxis de flecha (=>). Por ejemplo:
// const nombreDeLaFuncion = (parametros) => {
//     // código a ejecutar
// }
//Ejemplo de una función flecha que suma dos números
const cuadradoflecha = (numero) => {
    return numero * numero;
};

//funcion anonima
//Una función anónima es una función que no tiene un nombre. Se pueden asignar a variables o pasarlas como argumentos a otras funciones. Por ejemplo:
// const nombreDeLaFuncion = function(parametros) {
//     // código a ejecutar
// }
//Ejemplo de una función anónima que resta dos números
const saludoanonimo = function() {
   console.log("¡Hola! Este es un saludo desde una función anónima.");
}

//Scope de las funciones
//El scope de una función se refiere al contexto en el que se pueden acceder a las variables y funciones. En JavaScript, existen dos tipos de scope: global y local. Las variables definidas dentro de una función tienen un scope local, lo que significa que solo pueden ser accedidas dentro de esa función. Por otro lado, las variables definidas fuera de cualquier función tienen un scope global, lo que significa que pueden ser accedidas desde cualquier parte del código. Por ejemplo:
let variableGlobal = "Soy una variable global"; 
function ejemploScope() {
    let variableLocal = "Soy una variable local";
    console
.log(variableGlobal); // Accede a la variable global
    console.log(variableLocal); // Accede a la variable local
}
mostrarVariable();
console.log(variableLocal); // Accede a la variable global
//mostrarVariableLocal(); // Esto generará un error, ya que variableLocal no es accesible fuera de la función


//Diferencias entre var, let y const
//En JavaScript, var, let y const son palabras clave utilizadas para declarar variables, pero tienen diferencias importantes en cuanto a su scope, redeclaración y reasignación.

// var: Tiene un scope global o de función, lo que significa que puede ser accedida desde cualquier parte del código. Permite la redeclaración y reasignación de variables.
// let: Tiene un scope de bloque, lo que significa que solo puede ser accedida dentro del bloque en el que se declara. No permite la redeclaración, pero sí permite la reasignación de variables.
// const: Tiene un scope de bloque, al igual que let. No permite la redeclaración ni la reasignación de variables. Una vez que se asigna un valor a una variable declarada con const, no se puede cambiar.  

var variableVar = "Soy una variable var";
let variableLet = "Soy una variable let";
const variableConst = "Soy una variable const";
