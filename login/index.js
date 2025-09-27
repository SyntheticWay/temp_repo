// console.log(document.getElementById("input1").value);
// console.log(document.getElementById("input2").value);

// onclick = "console.log(document.querySelector('input1').value)";
//задание 1
//обратиться к элементу через addEventListener и в скрипте на хтмл
//задание 2
// если значение логина !=0, тогда положить значение в коробку
// если значение пароля !=0, тогда положить значение в коробку
// по дефолту - console.log('nothing is here');
// function lala() {
//     // value
//     const loginValue = document.getElementById("input1").value;
//     const passwordValue = document.getElementById("input2").value;
//     //box
//     const login = document.getElementById("login");
//     const password = document.getElementById("password");

//     login.innerHTML = "login: " + loginValue;
//     password.innerHTML = "password: " + passwordValue;
//     console.log("login: ", loginValue);
//     console.log("password: ", passwordValue);
// }
function buttonHandler() {
    console.log("button");
}
function loginHandler() {
    const loginValue = document.getElementById("login").value;
    const loginBox = document.getElementById("loginBox");

    loginBox.innerHTML = "login: " + loginValue;

    // login.innerHTML = "login: " + loginValue;
    console.log("Value: " + loginValue);
}
