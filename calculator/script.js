const calcInput = document.getElementsByClassName("calc-input")[0];

console.log("chota3 ", calcInput);
const buttonArray = document.querySelectorAll("button");
console.log(buttonArray);

let left = null;
let right = null;
let actionSymbol = null;

for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", function (event) {
        // buttonArray[i].innerText = calcInput.value;
        // calcInput.value += buttonArray[i].value;
        // const calcSaver = buttonArray[i].value;
        // calcInput.value = calcSaver;

        console.log("chota ", buttonArray[i].value);
        console.log("chota2 ", calcInput.value);

        // if (event.target === buttonArray[0]) {
        //     console.log("Нажата кнопка 1");
        // } else if (event.target === buttonArray[1]) {
        //     console.log("Нажата кнопка 2");
        // } else if (event.target === buttonArray[2]) {
        //     console.log("Нажата кнопка 3");
        // } else if (event.target === buttonArray[3]) {
        //     console.log("Нажата кнопка 4");
        // } else if (event.target === buttonArray[4]) {
        //     console.log("Нажата кнопка 5");
        // } else if (event.target === buttonArray[5]) {
        //     console.log("Нажата кнопка 6");
        // } else if (event.target === buttonArray[6]) {
        //     console.log("Нажата кнопка 7");
        // } else if (event.target === buttonArray[7]) {
        //     console.log("Нажата кнопка 8");
        // } else if (event.target === buttonArray[8]) {
        //     console.log("Нажата кнопка 9");
        // } else if (event.target === buttonArray[9]) {
        //     console.log("Нажата кнопка 10");
        // } else if (event.target === buttonArray[10]) {
        //     console.log("Нажата кнопка 11");
        // } else if (event.target === buttonArray[11]) {
        //     console.log("Нажата кнопка 12");
        // } else if (event.target === buttonArray[12]) {
        //     console.log("Нажата кнопка 13");
        // } else if (event.target === buttonArray[13]) {
        //     console.log("Нажата кнопка 14");
        // } else if (event.target === buttonArray[14]) {
        //     console.log("Нажата кнопка 15");
        // } else if (event.target === buttonArray[15]) {
        //     console.log("Нажата кнопка 16");
        // }

        // switch (i) {
        //     case 0:
        //         console.log("button1 was clicked");
        //         calcInput.value += "7";
        //         break;

        //     case 1:
        //         console.log("button2 was clicked");
        //         calcInput.value += "8";
        //         break;
        //     case 2:
        //         console.log("button3 was clicked");
        //         calcInput.value += "9";
        //         break;
        //     case 3:
        //         console.log("button4 was clicked");
        //         const add = (calcInput.value += "+");
        //         break;
        //     case 4:
        //         console.log("button5 was clicked");
        //         calcInput.value += "4";
        //         break;
        //     case 5:
        //         console.log("button6 was clicked");
        //         calcInput.value += "5";
        //         break;
        //     case 6:
        //         console.log("button7 was clicked");
        //         calcInput.value += "6";
        //         break;
        //     case 7:
        //         console.log("button8 was clicked");
        //         calcInput.value += "-";
        //         break;
        //     case 8:
        //         console.log("button9 was clicked");
        //         calcInput.value += "1";
        //         break;
        //     case 9:
        //         console.log("button10 was clicked");
        //         calcInput.value += "2";
        //         break;
        //     case 10:
        //         console.log("button11 was clicked");
        //         calcInput.value += "3";
        //         break;
        //     case 11:
        //         console.log("button12 was clicked");
        //         calcInput.value += "*";
        //         break;
        //     case 12:
        //         console.log("button13 was clicked");
        //         calcInput.value = "";
        //         break;
        //     case 13:
        //         console.log("button14 was clicked");
        //         calcInput.value += "0";
        //         break;
        //     case 14:
        //         console.log("button15 was clicked");
        //         // calcInput.value = math.evaluate(calcInput.value);
        //         break;
        //     case 15:
        //         console.log("button16 was clicked");
        //         calcInput.value += "/";
        //         break;
        //     default:
        //         console.log("button was clicked");
        // }

        switch (i) {
            case 0:
                calcInput.value += "7";
                break;
            case 1:
                calcInput.value += "8";
                break;
            case 2:
                calcInput.value += "9";
                break;
            case 3:
                calcInput.value += "+";
                break;
            case 4:
                calcInput.value += "4";
                break;
            case 5:
                calcInput.value += "5";
                break;
            case 6:
                calcInput.value += "6";
                break;
            case 7:
                calcInput.value += "-";
                break;
            case 8:
                calcInput.value += "1";
                break;
            case 9:
                calcInput.value += "2";
                break;
            case 10:
                calcInput.value += "3";
                break;
            case 11:
                calcInput.value += "*";
                break;
            case 12:
                calcInput.value = "";
                break;
            case 13:
                calcInput.value += "0";
                break;
            case 14:
                calc();
                let result;
                switch (actionSymbol) {
                    case "+":
                        result = plus(left, right);
                        break;
                    case "-":
                        result = minus(left, right);
                        break;
                    case "*":
                        result = mnoz(left, right);
                        break;
                    case "/":
                        result = delit(left, right);
                        break;
                }
                calcInput.value = result;
                break;
            case 15:
                calcInput.value += "/";
                break;
        }
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
