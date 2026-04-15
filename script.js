document.addEventListener('DOMContentLoaded', () => {
    let currentInput = '';
    let previousInput = '';
    let operator = null;

    const resultDisplay = document.getElementById('result');
    const historyDisplay = document.getElementById('history');

    const updateDisplay = () => {
        resultDisplay.textContent = currentInput || '0';
        if (operator) {
            historyDisplay.textContent = `${previousInput} ${operator}`;
        } else {
            historyDisplay.textContent = '';
        }
    };

    const calculate = () => {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operator) {
            case '+': result = prev + current; break;
            case '-': result = prev - current; break;
            case '*': result = prev * current; break;
            case '/': result = prev / current; break;
            case '%': result = prev % current; break;
            default: return;
        }

        currentInput = result.toString();
        operator = null;
        previousInput = '';
    };

    document.querySelectorAll('.key').forEach(key => {
        key.addEventListener('click', () => {
            const value = key.getAttribute('data-value');
            const type = key.getAttribute('data-type');
            const id = key.id;

            if (key.classList.contains('number')) {
                if (value === '.' && currentInput.includes('.')) return;
                currentInput += value;
            } else if (key.classList.contains('operator')) {
                if (currentInput === '') return;
                if (previousInput !== '') calculate();
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            } else if (id === 'equals') {
                calculate();
            } else if (type === 'clear') {
                currentInput = '';
                previousInput = '';
                operator = null;
            } else if (type === 'delete') {
                currentInput = currentInput.slice(0, -1);
            }

            updateDisplay();
        });
    });
});
