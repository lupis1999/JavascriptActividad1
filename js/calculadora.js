const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".btn-num");
const operatorButtons = document.querySelectorAll(".btn-op");
const functionButtons = document.querySelectorAll(".btn-func");
const equalsButton = document.getElementById("equals");

let currentInput = '0'; // Variable para almacenar la entrada actual

// Actualizar la pantalla de la calculadora
function updateDisplay() {
    display.textContent = currentInput;

}

// Agregar un número o un punto decimal a la entrada actual para formar un numero completo.
function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
        return;
    }

    const parts = currentInput.split(/([+\-*/%])/);// Dividir la cadena en números y operadores
    const lastPart = parts[parts.length - 1]; // Obtener la última parte (número o operador)

    if (number === '.' && lastPart.includes('.')) return; // Evitar agregar un segundo punto decimal

    currentInput += number;  // Agregar el número al final de la cadena
}

function appendOperator(operator) {
    const lastChar = currentInput.slice(-1); // Obtener el último carácter de la cadena
    if ('+-x/%'.includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator; // Reemplazar el operador si el último carácter es un operador
    }
    else {
        currentInput += operator; // Agregar el operador al final de la cadena
    }
}

// Eliminar todo el contenido del display
function clearAll() {
    currentInput = '0';
}


// Eliminar el último carácter de la entrada actual para corregir errores de tipeo.
function deleteLast() {
    if (currentInput.length === 1) {
        currentInput = '0'; // si solo queda un careácter, restablecer a "0"
    }
    else {
        currentInput = currentInput.slice(0, -1); // Eliminar el último carácter de la cadena
    }
}

function calculateResult() {
    try {//try es para intentar evaluar la expresión y catch para manejar cualquier error que pueda ocurrir durante la evaluación
        const result = eval(currentInput); // Evaluar la expresión matemática en currentInput
        currentInput = result.toString(); // Convertir el resultado a cadena y asignarlo a currentInput
    } catch (error) {//catch captura el error y evita que la aplicación se bloquee, mostrando "sin definir" en caso de error
        currentInput = "sin definir"; // Mostrar "sin definir" en caso de error
    }
}

// Agregar eventos a los botones numéricos
numberButtons.forEach(button => {
    button.className = 'btn-num bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-2xl h-16 text-2xl font-semibold shadow-md transition active:scale-95';
    button.addEventListener("click", () => {
        if (currentInput === "sin definir") currentInput = "0";
        appendNumber(button.textContent);
        updateDisplay(); // Actualiza pantalla de la calculadora (zona negra)
    });
});


// Agregar event listeners a los botones de operadores
operatorButtons.forEach(button => {
    button.className += ' rounded-2xl h-16 text-2xl font-semibold shadow-md transition active:scale-95';
    button.addEventListener("click", () => {
        if (currentInput === "sin definir") currentInput = "0";
        appendOperator(button.textContent);
        updateDisplay(); // Actualiza pantalla de la calculadora (zona negra)
    });
});

// Agrega event listener a los botones de operaciones especiales (clearAll, delete, %)
functionButtons.forEach(button => {
    button.className += ' rounded-2xl h-16 text-xl font-semibold shadow-md transition active:scale-95';
    button.addEventListener("click", () => {
        const action = button.textContent;
        if (action === "AC") {
            clearAll(); // Limpia la entrada actual
        } else if (action === "DEL") {
            deleteLast(); // Elimina el último carácter de la entrada actual
        } else if (action === "%") {
            appendOperator("%"); // Agrega el operador de porcentaje a la entrada actual
        }

        updateDisplay(); // Actualiza la pantalla de la calculadora
    });
});

// Agrega event listener al botón de igual para calcular el resultado
equalsButton.addEventListener("click", () => {
    calculateResult(); // Calcula resultado de la expresion actual
    updateDisplay(); // Actualiza la pantalla de la calculadora con el resultado
});
document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (!isNaN(key) || key === '.') {
        if (currentInput === "sin definir") currentInput = "0";
        appendNumber(key);
    } else if ('+-x/%'.includes(key)) {
        if (currentInput === "sin definir") return;
        appendOperator(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key.toLowerCase() === 'c') {
        clearAll();
    }

    updateDisplay();
});


