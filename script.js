let firstNumber = " ";
let secondNumber = " ";
let result = 0;
let operation = "";

function add (firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function substract (firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

function multiply (firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}

function operate(operation, firstNumber, secondNumber){
    let currentOperation = 0;
    switch(operation){
        case "add":
            currentOperation += add(firstNumber, secondNumber);
            break;
        case "substract":
            currentOperation += substract(firstNumber, secondNumber);
            break;
        case "multiply":
            currentOperation += multiply(firstNumber, secondNumber);
            break;
        case "divide":
            currentOperation += divide(firstNumber, secondNumber);
            break;
        default:
            alert("Error");
            break;
    }
    return currentOperation;
}

//firstNumber = parseFloat(prompt("First number?"));
//operation = prompt("Add, substract multiply, or divide?");
//secondNumber = parseFloat(prompt("Second number?"));
//console.log(operate(operation, firstNumber, secondNumber));


//Pantalla
let screenNumber = document.querySelector("#screenNumber");
screenNumber.textContent = '0';

let actual = "";
let currentNumber = "";
let operationMode = "false";


const buttons = document.querySelectorAll(".btn");
for(const button of buttons){
    button.addEventListener('click', function(){
        actual = this.value;
        switch(actual){
            case 'C':
                console.log(actual);
                firstNumber = " ";
                secondNumber = " ";
                result = 0;
                operation = "";
                actual = "";
                currentNumber = "";
                operationMode = "false";
                screenNumber.textContent = "0";
                break;
            
            case 'divide':
                console.log(actual);
                operationMode = "true";
                operation = "divide";
                if(firstNumber == " "){
                    firstNumber = parseFloat(currentNumber);
                }
                else{
                    secondNumber = parseFloat(currentNumber);
                    result = operate(operation, firstNumber, secondNumber);
                    screenNumber.textContent = result;
                    firstNumber = result;
                    secondNumber = " ";
                }
                break;

            case 'multiply':
                console.log(actual);
                operationMode = "true";
                operation = "multiply";
                if(firstNumber == " "){
                    firstNumber = parseFloat(currentNumber);
                }
                else{
                    secondNumber = parseFloat(currentNumber);
                    result = operate(operation, firstNumber, secondNumber);
                    screenNumber.textContent = result;
                    firstNumber = result;
                    secondNumber = " ";
                }
                break;
            
            case 'substract':
                console.log(actual);
                operationMode = "true";
                operation = "substract";
                if(firstNumber == " "){
                    firstNumber = parseFloat(currentNumber);
                }
                else{
                    secondNumber = parseFloat(currentNumber);
                    result = operate(operation, firstNumber, secondNumber);
                    screenNumber.textContent = result;
                    firstNumber = result;
                    secondNumber = " ";
                }
                break;

            case 'add':
                operationMode = "true";
                operation = "add";
                console.log(actual);
                if(firstNumber == " "){
                    firstNumber = parseFloat(currentNumber);
                    console.log("suma - firstNumber: " + firstNumber);
                }
                else{
                    secondNumber = parseFloat(currentNumber);
                    result = operate(operation, firstNumber, secondNumber);
                    screenNumber.textContent = result;
                    firstNumber = result;
                    secondNumber = " ";
                }
                break;
            
            case 'equals':
                console.log(actual);
                secondNumber = parseFloat(currentNumber);
                if(operation == ""){
                    console.log("perame") //FALTA
                }
                else{
                    result = operate(operation, firstNumber, secondNumber);
                    screenNumber.textContent = result;
                    firstNumber = result;
                    secondNumber = " ";
                }
                break;

            case 'Creator':
                console.log(actual);
                break;
            default: //Numeros
                console.log("Number " + actual);
                operationMode == "true" ? currentNumber = actual : currentNumber += actual;
                operationMode = "false";
                console.log(currentNumber);
                screenNumber.textContent = currentNumber;
                break;
        }
    })};