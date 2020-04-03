let prevInput = '';
let calculationOperator = '';
let currInput = '0';
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
}
const operators = document.querySelectorAll(".operator");

operators.forEach( (operator) => {
    operator.addEventListener("click", (e) => {
        inputOperator(e.target.value);
    });
    
});

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevInput = currInput;
    };
    
    calculationOperator = operator;
    currInput = '';
}
const numbers = document.querySelectorAll(".number");

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        inputNumber(e.target.value); 
        updateScreen(currInput); 
    }); 
});

const inputNumber = (number) => {
    if (currInput === '0') {
        currInput = number;
    } else {
        currInput += number; 
    }
}
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currInput);
});

const calculate = () => {
    let result ='';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevInput) + parseFloat(currInput);
            break
        case "-":
            result = parseFloat(prevInput) - parseFloat(currInput);
            break
        case "*":
            result = prevInput * currInput;
            break
        case "/":
            result = prevInput / currInput;
            break
        default:
            break
    }
    currInput = result;
    calculationOperator = '';

}
const ac = document.querySelector(".ac");

const clear = () => {
    prevInput = '';
    calculationOperator = '';
    currInput = '';
}

ac.addEventListener('click', () => {
    clear();
    updateScreen(currInput);
});
const decimal = document.querySelector(".decimal");

decimal.addEventListener('click', (e) => {
    inputDecimal(e.target.value);
});

inputDecimal = (dot) => {
    if(currInput.includes(".")) {
        return
    } 
    currInput += dot;
}
const percent = document.querySelector(".percentage");

ac.addEventListener('click', () => {
    currInput = '0';
    updateScreen(currInput);
});