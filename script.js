function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = '';
}

function calculate() {
    const display = document.getElementById("display");
    let expression = display.value;

    // Replace symbols
    expression = expression.replace(/cos\(/g, 'Math.cos(')
                               .replace(/sin\(/g, 'Math.sin(')
                               .replace(/tan\(/g, 'Math.tan(')
                               .replace(/sqrt\(/g, 'Math.sqrt(')
                               .replace(/\*\*2/g, '**2') // Power of 2
                               .replace(/%/g, '/100') // Percentage
                               .replace(/x/g, '*'); // Replace 'x' with '*' for multiplication

    try {
        display.value = eval(expression).toString();
    } catch (e) {
        display.value = 'Error';
    }
}

function showSymbolsPage() {
    document.getElementById("numeric-page").style.display = "none";
    document.getElementById("symbols-page").style.display = "grid";
}

function showNumericPage() {
    document.getElementById("symbols-page").style.display = "none";
    document.getElementById("numeric-page").style.display = "grid";
}
