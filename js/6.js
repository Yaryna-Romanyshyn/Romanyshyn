//!Змінна та константа
console.log(1)
let a = 3;
const a1 = 4;
console.log(a, typeof (a));
console.log(a1, typeof (a1));
a++;
console.log(a, typeof (a));
//! Типи даних
a2 = 'Яринка';
console.log(`Привіт ${a2}`);
a3 = [1, 2, 3, 4, 5, 6, 'cat']
console.log(a3, typeof (a3));
console.log(a3, [4]);
a4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(a4[0][2], a4[1][0], a4[2][2])
let b
console.log(typeof (b))
//! Арифметичні операції
//? + - / % ** * ++ --
b = 1
console.log(b + 5);
console.log(b - 5)
console.log(b / 5)
console.log(b ** 5)
console.log(b * 5)
console.log(b % 5)
//! Об'єкти та функції
function matchSum(a,b){
    a=a*2
return console.log(a+b)
}
//! Форми розгалуження

let x = 5, y = 6;

if (x > y) {
    console.log("x")
} else {
    console.log("y")
}

x > y ? console.log("x") : console.log("x")
x && console.log("зміна x існує")

const site = {
    login: "1",
    password: "1",
}

const login = prompt("Введи логін:")
 password = prompt("Введи пароль:")
if (login === site.login && password === site.password) {
    alert("Успішно виконано вхід")
} else {
    location.href = 'https://www.google.com/'
} 