import '../SCSS/main.css';

console.log("Hello World!")

// HTML SELECTOR - for screen & all buttons 
const display = document.querySelector<HTMLDivElement>(".calculator__screen") 
const calcNumButtons = document.querySelectorAll<HTMLButtonElement>(".calculator__buttons--nmbr")
const calcMathButtons = document.querySelectorAll<HTMLButtonElement>(".calculator__buttons--math")
const clear = document.querySelector<HTMLButtonElement>("#AC")
const del = document.querySelector<HTMLButtonElement>("#del")
const percentage = document.querySelector<HTMLButtonElement>("#percentage")
const divide = document.querySelector<HTMLButtonElement>("#divide")
const multiply = document.querySelector<HTMLButtonElement>("#multiply")
const addition = document.querySelector<HTMLButtonElement>("#addition")
const subtraction = document.querySelector<HTMLButtonElement>("#subtraction")
const decimal = document.querySelector<HTMLButtonElement>("#decimal")
const equals = document.querySelector<HTMLButtonElement>("#equals")


//ELEMENT VALIDATION
if(!display || !clear || !del || !percentage || !divide || !multiply || !addition || !subtraction || !decimal || !equals){
    throw new Error("Issue with the selector of our container")
};

if(calcNumButtons.length === 0 || calcMathButtons.length === 0){
    throw new Error("Issue with the QuerySelectorAll");
};

let currentEquation: string = "";

// GETTING THE NUMBER & OPERATOR DISPLAY TO WORK
calcNumButtons.forEach(number =>{
    number.addEventListener("click", () => {
        currentEquation += number.innerHTML;
        display.innerHTML = currentEquation;
    });
});

calcMathButtons.forEach(button =>{
    button.addEventListener("click", () =>{
        currentEquation += button.innerHTML;
        display.innerHTML = currentEquation;
    });
});

// GETTING THE AC AND DEL BUTTONS TO WORK
clear.addEventListener("click", () =>{
    currentEquation = "";
    display.innerHTML = "";
});

del.addEventListener("click",() =>{
    currentEquation = currentEquation.slice(0, -1);
    display.innerHTML = currentEquation;
})

console.log("hi")

// GETTING THE EQUALS BUTTON TO PERFORM THE CALCULATION
equals.addEventListener("click", () =>{
    console.log("Current equation:", currentEquation)
    const {result, error} = performOperation(currentEquation);
    console.log("result:", result, typeof result)
    console.log("error:", error)
    if (result !== undefined && result !== null) {
        console.log("Updating display with result", result)
        currentEquation = result.toString();
        display.innerHTML = currentEquation
    } else {
        console.log("Updating display with error", error)
        currentEquation = "";
        display.innerHTML = error || "Error";
    }
});

// FUNCTION & SWITCH STATEMENT THAT DOES THE MATHS
function performOperation(equation: string): {result: number | null, error: string | null} {
    let result: number | null = null;
    let error: string | null = null;

    const operators = ["+", "-", "*", "/"];
    const operatorRegExp = new RegExp(`[${operators.join("\\")}]`)
    const equationParts = equation.split(operatorRegExp);

    if (equationParts.length !== 2){
        error = "Invalid equation"
    } else {
        const num1 = parseFloat(equationParts[0]);
        const num2 = parseFloat(equationParts[1]);
        const operatorMatch = equation.match(operatorRegExp);
        const operator = operatorMatch ? operatorMatch[0] : null
        
        if (!isNaN(num1) && !isNaN(num2) && operator){
            switch (operator){
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
        } else {
            error = "Invalid equation";
        }
    }
    return {result, error};
};



//console.log(performOperation(10, "+", 2))
//const result = performOperation




//return display.innerHTML(result)



//const result = performOperation(num1, operator, num2);
//display.innerHTML += `${result}`


/*


// DEFINING VARIABLES
let num1 = "";
let operation = "";
let num2 = "";
let equation =



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