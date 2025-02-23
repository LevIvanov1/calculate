function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let expression = document.getElementById('display').value;
    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
        addToHistory(expression + ' = ' + result);
    } catch (error) {
        document.getElementById('display').value = 'Ошибочка';
    }
}

function addToHistory(entry) {
    const historyDiv = document.getElementById('history');
    const newEntry = document.createElement('p');
    newEntry.textContent = entry;
    historyDiv.appendChild(newEntry);
}