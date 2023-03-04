let firstNumber = 1;
let secondNumber =1;
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

//Test
const buttons = document.querySelectorAll(".btn");
for(const button of buttons){
    button.addEventListener('click', function(){
        console.log(this.value);
    });
}