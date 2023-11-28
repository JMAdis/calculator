import '../SCSS/main.css';

console.log("Hello World!")

// HTML SELECTOR - for screen & all buttons 
const display = document.querySelector<HTMLDivElement>(".calculator__screen") 
const calcNumButtons = document.querySelectorAll<HTMLButtonElement>(".calculator__buttons--nmbr")
const calcMathButtons = document.querySelectorAll<HTMLButtonElement>(".calculator")
const clear = document.querySelector<HTMLButtonElement>("#AC")
const del = document.querySelector<HTMLButtonElement>("#del")
const percentage = document.querySelector<HTMLButtonElement>("#percentage")
const divide = document.querySelector<HTMLButtonElement>("#divide")
const multiply = document.querySelector<HTMLButtonElement>("#multiply")
const addition = document.querySelector<HTMLButtonElement>("#addition")
const subtraction = document.querySelector<HTMLButtonElement>("#subtraction")
const decimal = document.querySelector<HTMLButtonElement>("#decimal")
const equals = document.querySelector<HTMLButtonElement>("#equals")
const hi = document.querySelector<HTMLButtonElement>("#hi")


//ELEMENT VALIDATION
if(!display || !clear || !del || !percentage || !divide || !multiply || !addition || !subtraction || !decimal || !equals || !hi){
    throw new Error("Issue with the selector of our container")
}

if(calcNumButtons.length === 0 || calcMathButtons.length === 0){
    throw new Error("Issue with the QuerySelectorAll");
}

// GETTING THE NUMBER DISPLAY TO WORK
calcNumButtons.forEach(number =>{
    number.addEventListener("click", () => {
        return display.innerHTML += Number(number.innerHTML)
    });
});

calcMathButtons.forEach(button =>{
    button.addEventListener("click", () =>{
        return display.innerHTML += String(button.innerHTML)
    });
});

// FUNCTION & SWITCH STATEMENT THAT DOES THE MATHS
function performOperation(num1: number, operation: string, num2: number): {result: number | null, error: string | null} {
    let result: number | null;
    let error: string | null;

    switch (operation){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0){
                result = num1 / num2;
            } else {
                error = "Cannot divide by 0";
            }
            break;
        default: 
            error = "Invalid symbol. Please use +, -, /, or *";
    }
    return {result, error};
}


console.log(performOperation(10, "+", 2))
const result = performOperation




//return display.innerHTML(result)



//const result = performOperation(num1, operator, num2);
//display.innerHTML += `${result}`




/*
// DEFINING VARIABLES FOR THE CALCULATOR
let firstInput: number;
let secondInput: number

// DISPLAYING INPUTS
function appendToDisplay(value: string){
    currentInput += value;
    displayInput.value = currentInput;
};

// CLEARING THE DISPLAY
function clearDisplay(){
    currentInput = "";
    currentOperator = "";
    displayInput.value = "";
}

// HANDLER FUNCTIONS 
const handleButtonClick = () =>{
    
}

// GETTING THE ANSWER 
answer.addEventListener("click", () => {
    const {result, error} = performOperation(parseFloat(display.innerHTML), operator, parseFloat(display.innerHTML));

    if (error){
        display.innerHTML = "Error";
    } else {
        display.innerHTML = result;
    }

})

*/