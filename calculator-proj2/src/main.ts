import '../SCSS/main.css';

console.log("Hello World!")

// HTML SELECTOR
const displayInput = document.querySelector<HTMLElement>(".calculator__output--input")
const displayResult = document.querySelector<HTMLElement>(".calculator__output--result") 
const calcButtons = document.querySelectorAll<HTMLButtonElement>(".calculator__buttons--indiv")

//ELEMENT VALIDATION
if(!displayInput || !displayResult){
    throw new Error("Issue with the selector of our container")
}

if(calcButtons.length ===0){
    throw new Error("Issue with the QuerySelectorAll");

}

// HANDLER FUNCTIONS 
const handleButtonClick = () =>{
    
}

//