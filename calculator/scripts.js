const display = document.getElementById('display');

function appendValue(value) {
    if (value === '=') {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}
