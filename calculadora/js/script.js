
document.getElementById("calculate").addEventListener("click", function () {
    const num1 = parseFloat(document.getElementById("first-number").value);
    const num2 = parseFloat(document.getElementById("second-number").value);
    const operation = document.getElementById("operation").value;
    const resultValue = document.getElementById("result-value");

    let result;

    if (isNaN(num1) || isNaN(num2)) {
        resultValue.textContent = "Error: introduce números válidos.";
        return;
    }

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num2 !== 0 ? num1 / num2 : "Error: división por cero";
            break;
    }

    resultValue.textContent = result;

    // Agregar al historial si el resultado es válido
    if (!isNaN(result)) {
        addToHistory(num1, num2, operation, result);
    }
});

function addToHistory(num1, num2, operation, result) {
    const historyList = document.getElementById("history-list");
    const li = document.createElement("li");

    let symbol;
    switch (operation) {
        case "add": symbol = "+"; break;
        case "subtract": symbol = "-"; break;
        case "multiply": symbol = "×"; break;
        case "divide": symbol = "÷"; break;
    }

    li.textContent = `${num1} ${symbol} ${num2} = ${result}`;
    historyList.appendChild(li);
}

document.getElementById("clear-history").addEventListener("click", function () {
    document.getElementById("history-list").innerHTML = "";
});
