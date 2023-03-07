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

//Pantalla
let screenNumber = document.querySelector("#screenNumber");
screenNumber.textContent = '0';

//Punto
let perButton = document.getElementById("dot");

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
                console.log('Created by Kevin Chaires during The Odin Project 2023');
                break;
            case 'C': //Clear
                writeMode = false;
                screenNumber.textContent = '0';
                firstNumber = " ";
                secondNumber = " ";
                operation = " ";
                break;
            case 'backspace':
                if(screenNumber.textContent.length > 1){
                    console.log(screenNumber.textContent.length);
                    screenNumber.textContent = screenNumber.textContent.slice(0, -1);    
                }
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
                let periodTest = screenNumber.textContent; //Solo un punto
                periodTest.includes(".") ? perButton.disabled = true : perButton.disabled = false;
                break;    
        }
    })
}

function operateResult(){ //Igual u opcion repetida
    let temp = " ";
    if(secondNumber == " "){ //si el segundo esta vacion
        secondNumber = parseFloat(screenNumber.textContent); //guardar en segundo numero
    }
    temp = operate();
    if(secondNumber == "0" && operation == "divide"){
        screenNumber.textContent = "Haha";
    }
    else{
        let periodTest = temp.toString();
        if(periodTest.includes('.')){
            screenNumber.textContent = temp.toFixed(5);
        }
        else{
            screenNumber.textContent = temp.toFixed(0); //operar y mostrar en pantalla
        }
    }
    firstNumber = parseFloat(screenNumber.textContent); //guardar en primer numero
}

function operationWork(){ //Operaciones
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

document.addEventListener("keydown", function(event){ //Teclado
    switch(event.key){
        case 'C': case 'c':
            event.preventDefault();
            document.getElementById('btnC').click();
            break;  
        case 'Backspace':
            console.log('work>');
            event.preventDefault();
            document.getElementById('btnBac').click();
            break;          
        case '/':
            event.preventDefault();
            document.getElementById('btnDiv').click();
            break;
        case 'X': case 'x': case '*':
            event.preventDefault();
            document.getElementById('btnMul').click();
            break;
        case '-':
            event.preventDefault();
            document.getElementById('btnSub').click();
            break;
        case '+':
            event.preventDefault();
            document.getElementById('btnAdd').click();
            break;
        case '=': case 'Enter':
            event.preventDefault();
            document.getElementById('btnEqu').click();
            break;
        case '.':
            event.preventDefault();
            document.getElementById('dot').click();
        case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '0':
            event.preventDefault();
            document.getElementById(`btn${event.key}`).click();
        default:
            console.log("Pressed: "+ event.key);
    }
})