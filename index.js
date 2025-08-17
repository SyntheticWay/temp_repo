// const root = document.getElementsByClassName("root");
// console.log("root", root);

// root.insertAdjacentHTML("beforebegin", "123");
// // root.innerText = "List of things we need to learn";

// const root = document.getElementsByClassName("root");
// let html = "<p>My new paragraph.</p>";
// root.insertAdjacentHTML(, html);
// console.log("root", root);

// (() => {
//   return 123;
// })();

// function funct1() {
//   return
// }

// // arrow function
// const func2 = () => {
//   return 1;
// };

// const func22 = () => 1;

// // function assign
// const func3 = function funct1() {};

const arg1 = 2;
const arg2 = 5;
const temp = 10;
// let, const, var

var number = 1;
const number1 = 1;
let number2 = 1;

number = 2;

console.log("number", number);

//! option 1
const calc = (even, odds) => {
  return even + odds + temp;
};

// option 2
const calc2 = (a, b) => a + b;

// option 3
function calc3(a, b) {
  return a + b;
}

//!
console.log(calc(arg1, arg2));
console.log(calc2(arg1, arg2));
console.log(calc3(arg1, arg2));
