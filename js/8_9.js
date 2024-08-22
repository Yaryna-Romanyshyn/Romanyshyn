//!Функція в JavaScript — це блок коду, який можна викликати для виконання певного завдання. 
//!Функції дозволяють повторно використовувати код, організовувати його та робити його більш читабельним та зрозумілим.

//?Іменована функція — це функція, яка має ім'я. Її можна викликати як за допомогою імені, так і через змінну.
//?Іменовані функції підлягають підняттю (hoisting), що означає, що їх можна викликати до оголошення в коді.
//*варіант1
function greet() {
    return console.log("Привіт!");
}
greet(); // Виведе "Привіт!"

function match(a, b) {
    return a * b
}

function match1(a, b) {
    const dobutok = a * b
    return dobutok
}

console.log(match(1, 2))
console.log(match1(1, 2))
function hi(name) {
    console.log("Привіт " + name)
}
hi("Яринка")
hi("Олеся")
hi("Соля")

const cat = match(2, 2);
console.log(cat)

const Any = hi("Any")
console.log(Any)

const plus = (a, b) => a + b
console.log(plus(5, 9))
////*варіант2
//greet(); // Виведе "Привіт!"

//function greet() {
//    console.log("Привіт!");
//}

//?Анонімна функція
//?Анонімна функція — це функція, яка не має імені і зазвичай присвоюється змінній або використовується як аргумент іншої функції.

//const greet = function() {
//    console.log("Привіт!");
//};

//greet(); // Виведе "Привіт!"


//?Стрілкова функція
//?Стрілкова функція (arrow function) — це новий синтаксис для оголошення функцій, введений в ECMAScript 6 (ES6). 
//?Стрілкові функції мають коротший синтаксис і не мають власного значення this, arguments, super та new.target.

//const greet = () => {
//    console.log("Привіт!");
//};

//greet(); // Виведе "Привіт!"
//const day=(d)=>{
//    return console.log(`Сьогодні ${d} `)
//}
//day("Четверг")
//const match = (x,y)=>{
//    c = x*y-y+2*x;
//    return testFunction (c)
//}
//const testFunction = (c)=>{ 
//    c = c**2
//    return console.log(`Результат обчислень ${c}`)
//}
//match(3,4)
//!Проект
//?У вас є початковий стейт.Реалізуйте:
//*фільтр за типом продуктів
//* Підрахунок цін обраного типу продуктів
const state = [
    { name: "Хліб", price: 20, description: "Свіжий пшеничний хліб", type: "Випічка" },
    { name: "Молоко", price: 25, description: "Свіже коров'яче молоко", type: "Молочні продукти" },
    { name: "Сир", price: 150, description: "Твердий сир з натурального молока", type: "Молочні продукти" },
    { name: "Масло", price: 80, description: "Вершкове масло", type: "Молочні продукти" },
    { name: "Яйця", price: 30, description: "Свіжі курячі яйця, 10 шт", type: "Молочні продукти" },
    { name: "Курка", price: 120, description: "Ціла курка, охолоджена", type: "М'ясо" },
    { name: "Яблука", price: 40, description: "Свіжі червоні яблука", type: "Фрукти" },
    { name: "Банани", price: 50, description: "Свіжі банани", type: "Фрукти" },
    { name: "Апельсини", price: 60, description: "Свіжі апельсини", type: "Фрукти" },
    { name: "Картопля", price: 15, description: "Молода картопля", type: "Овочі" },
    { name: "Морква", price: 18, description: "Свіжа морква", type: "Овочі" },
    { name: "Помідори", price: 45, description: "Свіжі червоні помідори", type: "Овочі" },
    { name: "Огірки", price: 35, description: "Свіжі зелені огірки", type: "Овочі" },
    { name: "Цибуля", price: 10, description: "Ріпчаста цибуля", type: "Овочі" },
    { name: "Часник", price: 20, description: "Свіжий часник", type: "Овочі" },
    { name: "Борошно", price: 25, description: "Пшеничне борошно, 1 кг", type: "Сухі продукти" },
    { name: "Цукор", price: 30, description: "Білий цукор, 1 кг", type: "Сухі продукти" }
]

const objProject = {
    open: document.getElementsByClassName('open')[0],
    filter(nameProduct) {
        let sumProduct = 0;
        for (let i = 0; i < state.length; i++) {
            if (state[i].type === nameProduct) {
                console.log(`
    Назва - ${state[i].name}.
    Опис - ${state[i].description}.
    Тип - ${state[i].type}.`);
                sumProduct += state[i].price;
            }
        }
        console.log('Загальна сума:' + sumProduct + 'грн. Вид товару:' + nameProduct)
    },
    newPriceProduct(newPrice, nameProduct) {
        for (let i = 0; i < state.length; i++) {
            if (state[i].name === nameProduct) {
                state[i].price = newPrice
                return console.log(state[i])
            }
        }
    },
    render() {
        console.log(this.open)
        this.open.addEventListener('click', () => {
            console.log(1)
            this.filter("Випічка")
            this.newPriceProduct(100, "Курка")
        })
    }
}
objProject.render()

//?Самостійне завдання
//* Написати функцію, яка приймає рядок і повертає повідомлення про те, чи є довжина рядка меншою, більшою чи рівною 10 символам.
function number10(number) {
    if (number.length > 10) {
        console.log('Довжина рядка більша 10 символів')
    } if (number.length < 10) {
        console.log('Довжина рядка менша 10 символів')
    } if (number.length === 10) {
        console.log('Довжина рядка рівна 10 символів')
    }
}
//* Написати функцію, яка приймає номер місяця (1-12) і повертає номер кварталу (1-4)
function returnQuarterNumber(a) {
    if (a >= 1 && a <= 3) {
        console.log('a належить до першого кварталу, бо дорівнює ' + a)
    } else if (a >= 4 && a <= 6) {
        console.log('a належить до другого кварталу, бо дорівнює ' + a)
    } else if (a >= 7 && a <= 9) {
        console.log('a належить до третього кварталу, бо дорівнює ' + a)
    } else if (a >= 10 && a <= 12) {
        console.log('a належить до четвертого кварталу, бо дорівнює ' + a)
    }
}
//* Написати функцію, яка приймає число і повертає повідомлення про те, чи є це число позитивним, негативним чи нульовим.
function definitionOfNumberType() {
    let i = 0
    if (i > 0) {
        console.log('i позитивне число, бо дорівнює ' + i)
    } else if (i < 0) {
        console.log('i негативне число, бо дорівнює ' + i)
    } else if (i === 0) {
        console.log('i нульве число, бо дорівнює ' + i)
    }
}
//* Написати функцію, яка приймає число і повертає повідомлення про те,
//* чи входить це число в один з заданих діапазонів: [0-10], [11-20], [21-30], чи ні.
function returningMessageAboutNumber(i) {
    if (i >= 0 && i <= 10) {
        console.log('i належить до першого діапазону, бо дорівнює ' + i)
    } else if (i >= 11 && i <= 20) {
        console.log('i належить до другого діапазону, бо дорівнює ' + i)
    } else if (i >= 21 && i <= 30) {
        console.log('i належить до третього діапазону, бо дорівнює ' + i)
    } else {
        console.log('i не належить до жодного діапазону, бо дорівнює ' + i)
    }
}
//* Створіть функцію, яка обчислює площу трикутника за трьома сторонами, введеними користувачем.
function calculatingAreaTriangle(a, b, c) {
    if ((a + b) > c & (a + c) > b & (c + b) > a) {
        let p = (a + b + c) / 2
        let s = Math.sqrt(p * (p - a) * (p - b) * (p - c))
        console.log('Площа прямокутника ' + s + 'см²')
    }
    else {
        console.log('Такого трикутника неіснує')
    }
}
//*Створіть функцію,для пошук мінімального значення в масиві чисел.
function findingMinimumValueArray() {
    const numbers = [8, 3, 1, 6, 9, 2, 0, 4, 5, 7,]
    let min = numbers[0];
    for (a = 1; a < numbers.length; a++) {
        if (min > numbers[a]) {
            min = numbers[a];
        }
    }
    console.log('Найменше число ' + min)
}
//*Створіть функцію, для пошук всіх індексів елементу в масиві.
function findingValuesInArray(n) {
    let found = false;
    numbers2 = [1, 4, 892, 0, 35, 5982, 65, 577,]
    for (k = 0; k < numbers2.length; k++) {
        if (n === numbers2[k]) {
            found = true
            console.log('Це число під номером ' + k)
        }
    } if (!found) {
        console.log('Цього числа немає в масиві')
    }
}