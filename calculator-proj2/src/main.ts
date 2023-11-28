import '../SCSS/main.css';

console.log("Hello World!")

// HTML SELECTOR - for screen & all buttons 
const display = document.querySelector<HTMLDivElement>(".calculator__screen") 
const calcNumButtons = document.querySelectorAll<HTMLButtonElement>(".calculator__buttons--nmbr")
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

if(calcNumButtons.length === 0){
    throw new Error("Issue with the QuerySelectorAll");

}

// DEFINING VARIABLES FOR THE DISPLAY
let currentInput = "";
let currentOperator = "";

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

//