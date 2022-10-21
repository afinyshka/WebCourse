/*
   Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений, которые ввел пользователь, вывод должен выглядеть так (пример): 
Результат сложения чисел 5 и 2 равен 7. 
*/
// let number1 = Number.parseInt(prompt('Enter first number'));
// alert(`The result of addition ${number1} and ${number2} is ${number1 + number2}`); //backticks
// alert("The result of addition " + number1 + " and " + number2 + " is " + parseInt(number1 + number2));

const number1 = Number.parseInt(prompt('Enter first number')); // значение переменной не поменяется
const number2 = Number.parseInt(prompt('Enter second number'));
alert("The result of addition " + number1 + " and " + number2 + " is " + (number1 + number2));

// Задача 3: Написать функцию, которая принимает имя пользователя при ее вызове и выводит сообщение с приветствием пользователя по имени. 
// Проверить работоспособность функции.

function fn(a, b/*parametres*/) { // если ф-ия нисего не возврацает, то она возвращает undefined
    alert("Hello!");
    console.log("Hello!"); //print in console
    return a + b;
}

function showName(userName) {
    alert(`Hello, ${userName}!`)
}


const userName = prompt("Enter your name:");
showName(userName);
// fn(/*arguments*/);
// console.log(fn(5, 7));

// Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”
// и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
// - При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.
// - При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”.

const boolAnswer = confirm("Вам хорошо живется?");
if (boolAnswer) {
    alert("Тогда мы идем к вам!")
} else {
    alert("Ну вы держитесь там!")
}

// Задача 5: перепишите код, используя конструкцию switch-case, запрашивая возраст пользователя через диалоговое окно.

//<script>
const age = Number.parseInt(prompt("Enter your age:"));

switch (age) {
    case 18:
        alert('Вы совершеннолетний, все можно!');
        break;
    case 10:
        alert('Вам надо учить уроки!');
        break;
    case 31:  
    case 32: 
    case 33:  
    case 30:
        alert('Ложитесь спать, завтра на работу');
        break;
    default:
        alert('Мы не знаем что Вам делать');
}

switch(true) {
    case age >=10 && age < 18:
        alert('Пора делать уроки!');
}

// if (age == 18) {
//     alert('Вы совершеннолетний, все можно!');
// } else if (age == 10) {
//     alert('Вам надо учить уроки!');
// } else if (age == 30) {
//     alert('Ложитесь спать, завтра на работу');
// } else {
//     alert('Мы не знаем что Вам делать');
// }
//</script>