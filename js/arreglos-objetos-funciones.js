//Arreglos
//un arreglo es una colección de datos, 
//es decir, un conjunto de variables agrupadas bajo un mismo nombre.

const frutas = ["manzana", "banana", "naranja", "uva"];
console.log(frutas[0]); // Imprime "manzana"

//funciones con arreglos
//Una función con arreglos es una función que toma un arreglo como argumento y realiza alguna operación sobre él. Por ejemplo, una función que suma todos los números de un arreglo:

console.log("frutas iniciales:");
console.log(frutas);

frutas.push("pera");
console.log("frutas después de agregar una pera:");
console.log(frutas);
 //eliminate el ultimo elemento del arreglo
 frutas.splice (1,3);
 console.log("frutas con el elemento eliminado:");
 console.log(frutas);

 //eliminate el primer elemento del arreglo
 frutas.pop();
 console.log("frutas con el primer elemento eliminado:");
 console.log(frutas);

 const numeros = [1, 2, 3, 4, 5];
//forEach()
//el método forEach() ejecuta una función proporcionada una vez por cada elemento del array. Por ejemplo, para imprimir cada número en el arreglo:
//el forEach() no devuelve un nuevo arreglo, simplemente ejecuta la función para cada elemento del arreglo original.


console.log("números iniciales:");
console.log(numeros);


numeros.forEach((numero) => {
    console.log(numero);
});

//map()
//el método map() crea un nuevo arreglo con los resultados de la llamada a una función proporcionada aplicada a cada elemento del arreglo. Por ejemplo, para crear un nuevo arreglo con el cuadrado de cada número en el arreglo original:
//el map() devuelve un nuevo arreglo con los resultados de la función aplicada a cada elemento del arreglo original.
const cuadrados = numeros.map((numero) => {
    return numero * numero;
});
console.log("cuadrados de los números:");
console.log(cuadrados);

//objetos
//Un objeto es una colección de propiedades, cada una con un nombre y un valor. En JavaScript, los objetos se crean utilizando llaves {} y pueden contener cualquier tipo de dato, incluyendo números, cadenas de texto, arreglos e incluso otras funciones. Por ejemplo:
//un objetos es pasar de algo reala una representacion en codigo, por ejemplo un objeto persona con sus propiedades nombre, edad y profesion

const frutas2 = {
    nombre: "banana",
    color: "amarillo",  
    sabor: "dulce"
};
console.log(frutas2.nombre); // Imprime "banana"
console.log(frutas2.color); // Imprime "amarillo"
console.log(frutas2.sabor); // Imprime "dulce" 

//agregar una nueva propiedad a un objeto
frutas2.tamaño = "mediano";
console.log(frutas2.tamaño); // Imprime "mediano"

//eliminar una propiedad de un objeto
delete frutas2.sabor;
console.log(frutas2.sabor); // Imprime "undefined"  

//modificar el valor de una propiedad de un objeto
frutas2.color = "verde";
console.log(frutas2.color); // Imprime "verde"


//funciones

//normal o declarada
function sumar(a, b) {
    return a + b;
}
console.log(sumar(5, 3)); // Imprime 8

//funcion expresada o anonima
const restar = function(a, b) {
    return a - b;
};      
console.log(restar(5, 3)); // Imprime 2

//funcion flecha
const multiplicar = (a, b) => {
    return a * b;
}
console.log(multiplicar(5, 3)); // Imprime 15

//funcion con un solo parametro
const cuadrado = (x) => {
    return x * x;
}                                       
console.log(cuadrado(5)); // Imprime 25

//funcion sin parametros
const saludo = () => {
    console.log("¡Hola! Bienvenido a JavaScript.");
}
saludo(); // Imprime "¡Hola! Bienvenido a JavaScript."




