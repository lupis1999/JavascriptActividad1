//estructura de control if
// /**La estructura de control if se utiliza para ejecutar un bloque de código si una condición es verdadera. La sintaxis básica es la siguiente:
// el usuario debe ingresar el dia y el if debe de responder si es dia habil que no sea fin de semana  */

let dia = prompt("Ingrese un  día de la semana:").toLowerCase();

if (dia === "lunes" || dia === "martes" || dia === "miércoles" || dia === "jueves" || dia === "viernes") {
    alert("Es un día hábil.");
} else {
    alert("No es un día hábil.");
}

//estructura de control for
//La estructura de control for se utiliza para repetir un bloque de código un número específico de veces. La sintaxis básica es la siguiente:
// for (inicialización; condición; incremento) {
//     // código a ejecutar
// }
//  imprimir  los dias de la semana utilizando uin ciclo for y un arreglo
let diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
for (let i = 0; i < diasSemana.length; i++) {
    console.log(diasSemana[i]);
}

//Un arreglo es una estructura de datos que puede almacenar múltiples valores en una sola variable. En JavaScript, los arreglos se crean utilizando corchetes [] y pueden contener cualquier tipo de dato, incluyendo números, cadenas de texto, objetos e incluso otros arreglos. Por ejemplo:
//si un arreglo es el tamano 6 el indice va delk 0 a 5
for (let i = 0; i < diasSemana.length; i++) {
    console.log(diasSemana[i]);
}

//estructura de control else if
//La estructura de control else if se utiliza para ejecutar un bloque de código si una condición es verdadera, y otro bloque de código si la condición es falsa. La sintaxis básica es la siguiente:
// if (condición) {
//     // código a ejecutar si la condición es verdadera
// } else if (otraCondición) {
//     // código a ejecutar si la otra condición es verdadera

let calificacion = 85;

if (calificacion >= 90) {
    console.log("Excelente");
} else if (calificacion >= 80) {
    console.log("Muy bien");
} else if (calificacion >= 70) {
    console.log("Bien");
} else if (calificacion >= 60) {
    console.log("Suficiente");
} else {
    console.log("Insuficiente");
}

