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
        const value = event.target.value; //click value
        calcInput.value += value; //input value

        // if (value === "=") {
        //     if (actionSymbol === "+") {
        //         console.log("calc input", calcInput.value);
        //     } else if (actionSymbol === "-") {
        //     }
        // }

        if (value === "+") {
            console.log("calc input", calcInput.value);
            actionSymbol = value;
            left = calcInput.value;
            left.replace(value, "");
            console.log(left);
        } else if (actionSymbol === "-") {
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
