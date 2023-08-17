function getValueById (inputId){
    const inputField = document.getElementById(inputId);
    const newInput = parseFloat(inputField.value);
    inputField.value = '';

    return newInput
}

function getElementById (inputId){
    const inputTotalElement = document.getElementById(inputId);
    const previousInputTotal = parseFloat(inputTotalElement.innerText);
    return previousInputTotal 
}

function updateValue(inputId, currentInputTotal){
    const inputTotalElement = document.getElementById(inputId);
    inputTotalElement.innerText = currentInputTotal;
}