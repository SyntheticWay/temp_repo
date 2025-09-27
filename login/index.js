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
    const demo = document.getElementById("demo");
    demo.innerText = "button was clicked";
    demo.style.color = "purple";
}
function loginHandler() {
    const loginValue = document.getElementById("login").value;
    const loginBox = document.getElementById("loginBox");

    loginBox.innerHTML = "login: " + loginValue;

    // login.innerHTML = "login: " + loginValue;
    console.log("Value: " + loginValue);
}
function passwordHandler() {
    const passwordBox = document.getElementById("passwordBox");
    const passwordValue = document.querySelector(".passwordInput").value;
    const h2 = document.createElement("h2");
    h2.innerText = `password: ${passwordValue}`;
    // if(h2.value = 0){

    // }else{

    // }
    console.log(h2.textContent.length);

    passwordBox.innerHTML = h2;
    const boxWrapper = document.getElementsByClassName("boxWrapper")[0];
    console.log(boxWrapper);
    boxWrapper.appendChild(h2);

    //1. положить что-то в х2  2. проверить что лежит в х2  3. куда то положить х2(3.1 положить в демо 3.2 положить в boxWrapper)

    // h2.innerText = "lala";
    console.log(h2);

    //prompt alert
    // prompt("password value: " + passwordValue);
}
