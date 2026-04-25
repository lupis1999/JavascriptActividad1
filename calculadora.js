const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".btn-num");
const operatorButtons = document.querySelectorAll(".btn-op");
const functionButtons = document.querySelectorAll(".btn-func");
const equalsButton = document.getElementById("equals");

let currentInput = "0";

function updateDisplay() {


    display.textContent = currentInput;

}

function appendNumber(number) {
    if (currentInput === "0" && number !== ".") {
        currentInput = number;
        return;
    }

    const parts = currentInput.split(/([+\-*/])/);// Dividir la cadena en números y operadores
    const lastPart = parts[parts.length - 1]; // Obtener la última parte (número o operador)

    if (number === "." && lastPart.includes(".")) {return; // Evitar agregar un segundo punto decimal

        currentInput += number;// Agregar el número al final de la cadena
    }
    function appendOperator(operator) {
        const lastChar = currentInput.slice(-1); // Obtener el último carácter de la cadena
        if (["+", "-", "*", "/"].includes(lastChar)) {
            currentInput = currentInput.slice(0, -1) + operator; // Reemplazar el operador si el último carácter es un operador
        }
        else {
            currentInput += operator; // Agregar el operador al final de la cadena
        }   

 }
}
//eliminar todo el contenido del display
function clearDisplay() {
    currentInput = "0";
}

function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1); // Eliminar el último carácter de la cadena
    }   
    else {
        currentInput = "0"; // Si solo queda un carácter, restablecer a "0"
    }
}
function calculateResult() {
    try {
        const result = eval(currentInput); // Evaluar la expresión matemática
        currentInput = result.toString(); // Convertir el resultado a cadena para mostrarlo
    }   
    catch (error) {
        currentInput = "sin definir"; // Mostrar un mensaje de error si la expresión no es válida
    }   
}

// Agregar eventos a los botones numéricos
numberButtons.forEach(button => {
    button.className = "btn-num bg-slate-900 rounded text-white text-2xl h-16 text-2xl semi-bold shawdow-md hover:bg-slate-700 transition-colors duration-300";
    button.addEventListener("click", () => {
       if (currentInput === "sin definir" || currentInput === "0") {   
            currentInput = button.textContent;
       appendNumber(button.textContent);
         updateDisplay();
         }
    });
});
// Agregar eventos a los botones de operadores
operatorButtons.forEach(button => {
    button.className = "btn-op bg-slate-900 rounded text-white text-2xl h-16 text-2xl semi-bold shawdow-md hover:bg-slate-700 transition-colors duration-300";      
    button.addEventListener("click", () => {
        if (currentInput === "sin definir") {
            currentInput = "0"; // Restablecer a "0" si el estado actual es "sin definir"
        }   
        appendOperator(button.textContent);
        updateDisplay();
    });
});
// Agregar eventos a los botones de funciones
functionButtons.forEach(button => {
    button.className = "btn-func bg-slate-900 rounded text-white text-2xl h-16 text-2xl semi-bold shawdow-md hover:bg-slate-700 transition-colors duration-300";
    button.addEventListener("click", () => {
        if (currentInput === "sin definir") return;
    appendOperator(button.textContent);
    updateDisplay();
    });
});
// Agregar evento al botón de igual
functionButtons.forEach(button => {
    button.className = "btn-func bg-slate-900 rounded text-white text-2xl h-16 text-2xl semi-bold shawdow-md hover:bg-slate-700 transition-colors duration-300";
    button.addEventListener("click", () => {
        if (currentInput === "sin definir") return;
    calculateResult();
    updateDisplay();
    });
});