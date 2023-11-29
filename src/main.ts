import '../SCSS/main.scss';
import confetti, {Options} from "canvas-confetti"

// HTML SELECTOR - for screen & all buttons 
const display = document.querySelector<HTMLDivElement>(".calculator__screen") 
const calcNumButtons = document.querySelectorAll<HTMLButtonElement>(".calculator__buttons--nmbr")
const calcMathButtons = document.querySelectorAll<HTMLButtonElement>(".calculator__buttons--math")
const clear = document.querySelector<HTMLButtonElement>("#AC")
const del = document.querySelector<HTMLButtonElement>("#del")
const percentage = document.querySelector<HTMLButtonElement>("#percentage")
const equals = document.querySelector<HTMLButtonElement>("#equals")
const themeButton = document.querySelector<HTMLButtonElement>("#theme-button")
const body = document.body;
const heading = document.querySelector<HTMLHeadingElement>("#heading")

//ELEMENT VALIDATION
if(!display || !clear || !del || !percentage || !equals || !themeButton || !heading){
    throw new Error("Issue with the selector of our container")
};

if(calcNumButtons.length === 0 || calcMathButtons.length === 0){
    throw new Error("Issue with the QuerySelectorAll");
};

// INITIALIZING currentEquation
let currentEquation: string = "";

// EVENT LISTENERS FOR THE NUMBER & OPERATOR BUTTONS
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

// EVENT LISTENERS FOR AC & DEL BUTTONS
clear.addEventListener("click", () =>{
    currentEquation = "";
    display.innerHTML = "";
});

del.addEventListener("click",() =>{
    currentEquation = currentEquation.slice(0, -1);
    display.innerHTML = currentEquation;
})

// EVENT LISTENER FOR THE % BUTTON 
percentage.addEventListener("click", () =>{
    currentEquation += "*0.01";
    display.innerHTML = currentEquation
})

// ADDING CONFETTI TO THE CALCULATOR
// CREATING OBJECT
const confettiOptions : Options ={
    particleCount: 200,
    spread: 359,
    colors: ["#de3163", "#ff69b4", "#ffb6c1"]
}

// EVENT LISTENER FOR THE = BUTTON 
equals.addEventListener("click", () =>{
    confetti(confettiOptions)
    const {result, error} = performOperation(currentEquation);
    if (result !== undefined && result !== null) {
        currentEquation = result.toString();
        display.innerHTML = currentEquation
    } else {
        currentEquation = "";
        display.innerHTML = error || "Error";
    }
});

// performOperation FUNCTION & DEFINING THE OPERATORS & EQUATION
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
        
        // SWITCH STATEMENT BASED ON THE OPERATOR
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
                case '%':
                    result = num1 * (num2/100);
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

// ADDING THEME FUNCTIONALITY
// DECLARATION OF wavyMode variable
let wavyMode = true;

// CHANGETHEME FUNCTION
const changeTheme = () => {
    if (wavyMode){
        body.style.backgroundImage = 'url(../assets/daysi-pattern-design_25030-55737.avif)';
        heading.style.color = 'rgb(240,78,138)';
        themeButton.style.backgroundColor = 'rgb(240,78,138)';
    } else {
        body.style.backgroundImage = 'url(../assets/4945415.jpg)'
        heading.style.color = 'white';
        themeButton.style.backgroundColor = 'rgb(37,159,164)';
    }
    wavyMode = !wavyMode;
}

//EVENT LISTENER FOR THE THEME BUTTON/TOGGLE
themeButton.addEventListener("click", () =>{
    changeTheme()
})
