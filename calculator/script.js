const calcInput = document.getElementsByClassName("calc-input")[0];

// console.log("chota3 ", calcInput);
const buttonArray = document.querySelectorAll("button");
// console.log(buttonArray);

let left = null;
let right = null;
let actionSymbol = null;

for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", function (event) {
        // buttonArray[i].innerText = calcInput.value;
        // calcInput.value += buttonArray[i].value;
        // const calcSaver = buttonArray[i].value;
        // calcInput.value = calcSaver;

        const value = event.target.value;
        console.log("value", value);

        if (value === "=") {
            console.log("!!!!!!!");
            if (actionSymbol === "+") {
            } else if (actionSymbol === "-") {
            }
        }

        // switch (key) {
        //     case value:

        //         break;

        //     default:
        //         break;
        // }
    });
}

function plus(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function mnoz(a, b) {
    return a * b;
}
function delit(a, b) {
    return a / b;
}

function calc() {
    const answer = calcInput.value;

    if (answer.includes("+")) {
        actionSymbol = "+";
    } else if (answer.includes("-")) {
        actionSymbol = "-";
    } else if (answer.includes("*")) {
        actionSymbol = "*";
    } else if (answer.includes("/")) {
        actionSymbol = "/";
    }

    const parts = answer.split(actionSymbol);
    left = parseFloat(parts[0]);
    right = parseFloat(parts[1]);
}
