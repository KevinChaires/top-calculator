let firstNumber = " ";
let secondNumber = " ";
let operation = " ";

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

function operate(){
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
            console.log("error");
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
let writeMode = false;
let repeatCounter = 0; 

const buttons = document.querySelectorAll(".btn");
for(const button of buttons){
    button.addEventListener('click', function(){
        actual = this.value;
        switch(actual){
            case 'Creator':
                writeMode = false;
                screenNumber.textContent = '0';
                firstNumber = " ";
                secondNumber = " ";
                operation = " ";
                break;
            case 'C': //Clear
                break;
            case 'divide': //Divide
                operationWork();    
                operation = "divide";
                break;
            case 'multiply':
                operationWork();
                operation = "multiply";
                break;
            case 'substract':
                operationWork();
                operation = "substract";
                break;
            case 'add':
                operationWork();
                operation = "add"; //dice que la operacion es suma
                break;
            case 'equals':
                writeMode = false; //apagar
                console.log(operation);
                if(firstNumber == ' '){ //si no hay primer numero
                    console.log("No hay primer numero");
                    //edit
                }
                else if(operation == " "){
                    console.log("No hay operacion determinada");
                    //edit
                }
                else{
                    operateResult();
                }
                break;
            default: //Numeros
                console.log(actual); //Decir numero introducido
                if(!writeMode){ //Si esta apagado
                    screenNumber.textContent = actual; //Remplazar
                    writeMode = true; //prender
                }
                else{
                    screenNumber.textContent += actual; //anadirle
                }
                if(firstNumber != " " && secondNumber != " "){
                    firstNumber = " ";
                    secondNumber = " "; 
                }
                break;    
        }
    })
}

function operateResult(){
    let temp = " ";
    if(secondNumber == " "){ //si el segundo esta vacion
        secondNumber = parseFloat(screenNumber.textContent); //guardar en segundo numero
    }
    temp = operate();
    if(secondNumber == "0" && operation == "divide"){
        screenNumber.textContent = "Haha";
    }
    else{
        screenNumber.textContent = temp.toFixed(5); //operar y mostrar en pantalla
    }
    firstNumber = parseFloat(screenNumber.textContent); //guardar en primer numero
}

function operationWork(){
    if(firstNumber == " "){ //si el primero esta vacio
        console.log("this");
        firstNumber = parseFloat(screenNumber.textContent); //llenar el primero
    }
    else if(writeMode == true){
        console.log("else");
        secondNumber = " "; //vaciar segundo numero
        operateResult();
    }
    writeMode = false; //apagar
    secondNumber = " "; //vaciar segundo numero
}

