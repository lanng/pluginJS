console.log("The extension is up and running");

const inputValue = document.getElementsByName('ctl00$ContentPlaceHolder$txtEstimateCost');
const inputAssist = document.getElementsByName('ctl00$ContentPlaceHolder$txtFile');
const td = document.getElementsByTagName('td');

let totalValue = 0;
let lastAssistNumber = 0;
let isTheSameNumber = false;

inputAssist[0].addEventListener('change', () => {
    console.log('assist change');
    isTheSameNumber = validateAssisNumber(inputAssist[0].value, lastAssistNumber);
    console.log(isTheSameNumber);
});

function calculate(value) {
    const floatValue = convertToFloatFormat(value);
    if(isTheSameNumber){
        totalValue += floatValue; 
    }else { 
        totalValue = floatValue;
    }
    console.log('value fn - ' + totalValue + ' - ' + value + floatValue)
    return totalValue;
}

function validateAssisNumber(assistNumber, lastNumber){
    if(lastNumber != assistNumber && lastNumber != 0){
        lastAssistNumber = 0;
        return false;
    }
    lastAssistNumber = assistNumber;
    return true;
}

function addCustomButton() {
    const button = document.createElement('button');
    const span = document.createElement('span');

    button.id = 'btnAdd'
    button.textContent = 'Adicionar Valor';
    button.style = 'style="color:White;background-color:#red;width:100px;height: 20px"';
    td[84].appendChild(button);
    td[83].appendChild(span);

    button.addEventListener('click', function(e){
    span.textContent = parseFloat(calculate(inputValue[0].value));
    e.preventDefault();
    });
}

function convertToFloatFormat(input) {
    // Remove dots as thousand separators and replace comma with dot as decimal separator
    const cleanedInput = input.replace(/\./g, '').replace(',', '.');

    // Convert the cleaned input to a float
    const floatValue = parseFloat(cleanedInput);

    return floatValue;
}

const checkButtonSpanInterval = setInterval(() => {
    const existingButton = document.getElementById('btnAdd');
    if (!existingButton) {
        // If the button doesn't exist, add it
        addCustomButton();
    }
}, 500);