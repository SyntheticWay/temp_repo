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
            left = calcInput.value.replace(value, "");
        } else if (value === "-") {
            actionSymbol = value;
            left = calcInput.value.replace(value, "");
        } else if (value === "*") {
            actionSymbol = value;
            left = calcInput.value.replace(value, "");
        } else if (value === "/") {
            actionSymbol = value;
            left = calcInput.value.replace(value, "");
        } else if (value === "c") {
            actionSymbol = value;
            calcInput.value = "";
        } else if (value === "=") {
            right = calcInput.value
                .replace(left + actionSymbol, "")
                .replace(value, "");

            if (actionSymbol === "+") {
                const res = plus(left, right);
                calcInput.value = res;
                console.log(res);
            } else if (actionSymbol === "-") {
                const res = minus(left, right);
                calcInput.value = res;
                console.log(res);
            } else if (actionSymbol === "*") {
                const res = mnoz(left, right);
                calcInput.value = res;
                console.log(res);
            } else if (actionSymbol === "/") {
                const res = delit(left, right);
                calcInput.value = res;
                console.log(res);
            }

            //сменить тип переменных с стринг на инт
            //! слева и справа строка
        }
        //TODO 1 + 1, 1+"1"
        // switch (key) {
        //     case value:

        //         break;

        //     default:
        //         break;
        // }
    });
}

function plus(a, b) {
    const numberA = parseInt(a);
    const numberB = parseInt(b);
    return (numberA + numberB).toString();
}
function minus(a, b) {
    const numberA = parseInt(a);
    const numberB = parseInt(b);
    return (numberA - numberB).toString();
}
function mnoz(a, b) {
    const numberA = parseInt(a);
    const numberB = parseInt(b);
    return (numberA * numberB).toString();
}
function delit(a, b) {
    const numberA = parseInt(a);
    const numberB = parseInt(b);
    return (numberA / numberB).toString();
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
