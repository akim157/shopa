//в консоле с помощью node можно вызвать отработка скрипта
node index.js
//Variables - переменные
//We use a variable to store data temporarily (Мы используем переменную для временного хранения данных)
//Cannot be a reserved keyword (Нельзя использовать резервированные слова для объявления переменной такие как if, for...)
//Should be meaningful (имена переменных должны быть значимыми т.е firstName)
//Cannot start with a number (Нельзя начинать с чисел например: 1name)
//Cannot contain a space or hyphen (Нельзя использовать пробелы или дифисы -)
// Are case-sensitive (переменные чувствительны к регистру)
let firstName = 'Maxim', lastName = 'Fedorov';
console.log(firstName);
console.log(lastName);

//Primitive Types (Примитивные типы)/reference types(ссылочные типы)
//String / Object
//Number / Array
//Boolean / Function
//undefined
//null

let name = 'Maxim'; //String literal (Строковый литерал/буквальный)
let age = 30; //Number literal
let isApproved = true; //(approved - одобренный) Boolean literal
let firstName; //undefined
let lastName = null;

//Dynamic Typing (Динамический набор текста)
//Languages (языки)
//Static - Statically-typed (Статический - Статически-типизированный)/ Dynamic - Dynamically-typed (Динамический - Динамически типизированный)
string name = 'John';  / let name = 'John';
//Object
let name = 'Maxim';
let age = 30;
/////////////////
let person = {
    name: 'Maxim',
    age: 30
};
//Dot Notation
console.log(person);
//Dot Notation (Тотечная запись)
person.name = 'John';
console.log(person.name);
//Bracket Notation (Обозначение скобки)
person['name'] = 'Mary';
console.log(person.name); //Mary
let selection = 'name';
person[selection] = 'Mary';
//Array
let selectedColors = ['red', 'blue'];
console.log(selectedColors[0]); //red
selectedColors[2] = 'green';
console.log(selectedColors.length); //3
//Functions
function greet() {
    console.log('Hello world');
}
greet();
function greet2(name){
    console.log('Hello ' + name);
}
greet2('John');
function greet3(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}
greet3('John', 'Smith');
//Types of Functions
//Performing a task (Выполнения задания)
function greet4(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}
greet4('John', 'Smith');
//Calculating a value (Вычисление стоимости)
function square(number) {
    return number * number;
}
let number = square(2);
console.log(number);
console.log(square(2));
//JavaScript Operators (Операторы JavaScript)
//Operators Variables (Переменная оператора) / Expressions (Выражение) / Algorithms (Алгоритмы)
//Arithmetic (Арифметика)
//Assignment (Присваивание)
//Comparison (Сравнение)
//Logical (Логический)
//Bitwise (Побитовое)
////////////////////////////////
//Arithmetic Operators
let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//Increment (++)
console.log(++x); //11 префиксная форма
console.log(x++); //10 постфиксная форма
console.log(x); //11
//Decrement (++)
console.log(--x); //9
console.log(x--);
//Assignment Operators (Оператор присваивания)
let x = 10;
x++;
x = x + 1;
x = x + 5;
x += 5;

x = x * 3;
x *= 3;
//Comparison Operators (Оператор сравнения)
let x = 1;
//Relational (Реляционный)
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

//Equality (Равенство)
//Strict Equality - Type + Value (Строгое равенство - Тип + Значение)
console.log(x === 1);
console.log('1' === 1); //false

//Lose Equality - Value (Потерять равенство - Значение)
console.log(x == 1);
console.log('1' == 1); //true
console.log(true == 1); //true
console.log(x !== 1);

//Ternary (троичный)
//If a customer has more than 100 points, (Если клиент имеет больше 100 баллов)
//then are a 'gold' customer, otherwise, (тогда это золотой клиент, в противном случае)
//they are a 'silver' customer.(они серебренный клиент.)
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);
//Logical Operators with Non-booleans (Логические операторы с небулевыми значениями)
//Logical AND - && (Логическая И)
//Returns TRUE if both operands are TRUE (Вернет TRUE если оба операнда TRUE)
console.log(true && true); //true
console.log(false && true); //false
console.log(false && false); //false

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan); //true

//Logical OR - || (Логисеская ИЛИ - ||)
//Returns TRUE if one of the operands is TRUE (возвращает TRUE если один операнд TRUE)
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan); //true

//NOT - ! (Нет - не)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused); //false

/*CODE*/

//For (Циклы)
//Loops (Петли)
//For / While / Do...while / For...in / For...of
//initial Expression (Начальное вырожение)
//condition (состояние)
//increment Expression (выражение приращения)
for (let i = 1; i <= 5; i++) {
    //statement (заявление)
    console.log('Hello world', i);
    if(i % 2 !== 0) console.log(i);
}
for (let i = 5; i >= 1; i--) {
    if(i % 2 !== 0) console.log(i);
}
//While
let i = 0;
while (i <= 5) {
    if(i % 2 !== 0) console.log(i);
    i++;
}
//Do...While
let i = 0;
do {
    if(i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);
//Infinite Loops (Бесконесные циклы - зацыкливание)
let i = 0;
while(i < 5) {
    console.log(i);
}

while (true) {}
let x = 0;
do {} while (x < 5);
//For...In
const person = {
    naem: 'Maxim',
    age: 30
};
for (let key in person)
    console.log(key, person.key);
//Dot Notation (Тотечная запись)
person.name
//Bracket Notation (скобочная запись)
person['name']

const colors = ['red', 'green', 'blud'];
for (let index in colors)
    console.log(index, colors[index]); //0 red
//For...of
for (let color of colors)
    console.log(color); //red
//Break and Continue (Перерыв и продолжить)
let i = 0;
while (i <= 10) {
    if (i === 5) break;
    if (i % 2 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}
//Max of Two Numbers (Максимальный двух чисел)
//Write a function that takes two numbers and returns the maximum of the two. (Написать функцию которая возьмет два числа и вернут максимальное из вдух)
let number = max(1,2);
console.log(number);
function max(a,b) {
    // if (a > b) return a;
    // else return b;
    return (a > b) ? a : b;
}
//Exercise-Landscape or Portrait (Упражнение-Пейзаж или Портрет)
console.log(isLandscape(800,600));
function isLandscape(width, height) {
    // if(width > height) return true;
    // return false;
    // return (width > height) ? true : false;
    return (width > height);
}
//Exercise-FizzBuzz
//Divisible by 3 => Fizz (Делится на 3 => Fizz)
//Divisible by 5 => Buzz (Делится на 5 => Buzz)
//Divisible by both 3 and 5 => FizzBuzz (Делится на оба 3 и 5 => FizzBuzz)
//Not divisible by 3 or 5 => input (Не делится на 4 или 5 => вход)
//Not a number => 'Not a number' (Нет номера)
const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        // return 'Not a number';
        return 'NaN';
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';
    if (input % 3 === 0)
        return 'Fizz';
    if (input % 5 === 0)
        return 'Buzz';
    return input;
}
typeof NaN //number
//Exercise-Demerit Points (Упражнение недостатка очков)
//Speed Limit = 70 (Ограничение скорости - 70)
//5 -> 1 point
//12 points -> suspended (12 точек/пунктов - подвешанный)
Math.floor(1.3) //возвращает целое число 1
checkSpeed(50);
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
            console.log('License suspended'); //Лицензия приостановлена
        else
            console.log('Points', points); //Точки
    }
}
//Exercise-Even and Odd Numbers (Упражнения-четные и нечетные числа)
showNumbers(10);
function showNumbers (limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) console.log(i, 'EVEN');
        else console.log(i, 'ODD');

        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}
//Exercise-Count Truthy (Упражнение-Граф/подсчитывать Истина)
const isActive = true;
const name = 'Maxim'; //Truthy (true)
const name = ''; //Falsy (false)
//Falsy
//undefined
//null
//''
//false
//0
//NaN

const array = [0, null, undefined, '', 2,3];
console.log(countTruthy(array));
if (isActive) console.log('Hello');

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        // if (value !== false || value !== undefined)
        if (value)
            count++;
    return count;
}
//Exercise-String Properties (Упражнение свойства строки)
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};
showProperties(movie);
function showProperties(obj) {
    for (let key in obj)
        // console.log(key);
        if(typeof obj[key] === 'string')
            console.log(key, obj[key]);
}
//Exercise-Sum of Multiples 3 and 5 (Упражнение Сумма 3 и 5)
console.log(sum(10));
//Multiples of 3: 3, 6, 9 (Множественные/Кратно 3)
//Multiples of 5: 5, 10 (Кратно 5)
function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    return sum;
}
//Exercise - Grade (Упражнение - класс/оценка)
const marks = [80,80,50];
//Average = 70 (Средний)
//1-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A
console.log(calculateGrade(marks)); //рассчитать оценку
function calculateGrade(marks){
    const average = calculateAverage(marks);
    // if (average >= 0 && average <= 59) return 'F';
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / marks.length;
}
//Exercise - Stars (Упражнение звезды)
showStars(5);
function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}
//Exercise - Prime Numbers (Упражнение - простые числа)