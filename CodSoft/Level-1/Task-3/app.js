let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let operator = null;

const display = document.getElementById('display');

function appendToDisplay(num){
    displayValue = displayValue + num;
    display.value = displayValue;
}



function calculateResult() {
    if (operator && displayValue !== '') {
        secondOperand = parseFloat(displayValue);
        let result;
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                if (secondOperand === 0) {
                    alert("Error: Division by zero");
                    clearDisplay();
                    return;
                }
                result = firstOperand / secondOperand;
                break;
        }
        clearDisplay();
        appendToDisplay(result)
        // clearDisplay();
        // display.value = result;
        // displayValue = result.toString();
        firstOperand = result;
        console.log(secondOperand);
        operator = null;
    }
}


function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    operator = null;
    display.value = '';
}

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        const buttonText = button.textContent
        if(!isNaN(buttonText) || buttonText === '.'){
            appendToDisplay(buttonText);
        }
        else if(['+', '-', '*', '/'].includes(buttonText)){
            // firstOperand=parseFloat(displayValue);
            // operator = buttonText;
            // displayValue='';
            // appendToDisplay('');
            if(firstOperand===null){
                firstOperand=parseFloat(displayValue);
                operator = buttonText;
                displayValue='';
                appendToDisplay('');
            }
            else if(firstOperand!==null){
                operator = buttonText;
                calculateResult();
            }
        }
        // else if(['+', '-', '*', '/'].includes(buttonText) && firstOperand!==null){
        //     operator = buttonText;
        //     calculateResult();
        // }
        else if(buttonText==='='){
            calculateResult();
        }
        else if(buttonText==='C'){
            clearDisplay();
        }
    });
});