let result = '';

function addCharacter(character) {
    result += character;
    document.getElementById('result').innerHTML = result;
}

function calculate() {
    result = eval(result);
    document.getElementById('result').innerHTML = result;
}

function clearResult() {
    result = '';
    document.getElementById('result').innerHTML = '';
}
