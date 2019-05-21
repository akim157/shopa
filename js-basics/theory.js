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
//Logical Operators with Non-booleans
//false || true - true
//false || 'Mosh' - Mosh
//false || 1 - 1
////////////////////////
//Falsy (false)
//undefined
//null
//0
//false
//''
//NaN
//Anything that is not Falsy -> Truthy (Все, что не является ложью -> Истина)
//false || 1 || 2 - 1
//Short-circuiting (Короткое замыкание)
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor); //red
///////////////////////
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor); //blue
//BitWise (Побитовое)
//1 = 00000001
//2 = 00000010
//3 = 00000011
//R = 00000000

//Read, Write, Execute (Читать, писать, выполнять)
//00000100
//00000110
//00000111
console.log(1 | 2); //Bitwise OR (Побитовое или)
console.log(1 & 2); //Bitwise AND (Побитовое и)

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message); //yes
//Operator Precedence (оператор старшинства)
let x = 2 + 3 * 4;
console.log(x); //14
let x = (2 + 3) * 4;
console.log(x); //20
//Exercise-Swapping Variables (Переменные с заменой упражнений - Обмен местами)
let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a); //blue
console.log(b); //red
//if...else (Если...еще)
//conditional statements (условные заявления)
//if...else | switch...case
// Hour (час)
//If hour is between 6am and 12pm: Good morning! (Если час между 6 утра и 12 дня: Доброе утро!)
//If it is between 12pm and 6pm: Good afternoon! (Если между 12 дня и 6 вечера: Добрый день!)
//Otherwise: Good evening! (Иначе: Добрый вечер!)
if (condition) {
    statement
}
else if (anotherCondition) {
    statement
}
else if (yetAnotherCondition) {
    statement
}
else
    statement
//////////////////////////////
let hour = 10;
if(hour >= 6 && hour < 12) {
    console.log('Good morning!');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon!');
}
else
    console.log('Good evening!');
//Switch...case
let role = 'guest';
switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}
/////////////////////
if(role === 'guest') console.log('Guest');
else if(role === 'moderator') console.log('Moderator');
else console.log('Unknown User');
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
//Prime (whose factors are only 1 and itself) (Премьер (чьи факторы только 1 и сам))
//Composite (композитный)
//12 = 1,2,3,4,6,12
//Can be divided evenly by its factors (Может быть разделен равномерно по факторам)
//11 = 1,11
//13 = 1,13
showPrimes(20);
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        //2 - current (i)
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(number);
    }
}
/////////////////////////
showPrimes(20);
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) console.log(number);
    }
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    return true;
}
//Basics (основы)
let radius = 1;
let x = 1;
let y = 1;
//Object-oriented Programming (OOP) (Объектно ориентированное программирование)
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
};

function draw() {}
function move() {}

circle.draw(); //draw
//Factory Functions (Фабрика Функции)
function createCircle(radius) {
    return {
        radius, //radius : radius
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
//Constructor Functions (Функции конструктора)
//Camel Notation: oneTwoThreeFour (Обозначение верблюда: 1234)
//Pascal Notation: OneTwoThreeFour (Нотация Паскаль: 1234)
function Circle(radius) {
    this.radius = radius; //пустой объект
    this.draw = function(){
        console.log('draw');
    }
    // return this;
}

const circle = new Circle(1);
const x = {};
//Dynamic Nature of Objects (Динамическая природа объектов)
const circle = {
    radius: 1
};
circle.color = 'yellow';
circle.draw = function(){};
delete circle.color; //удаление свойства
delete circle.draw;
console.log(circle);
//Constructor Property (Свойство конструктора)
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle = createCircle(1);
circle.constructor; //Object

let x = {};
//let x = new Object();
new String(); // '',"",``
new Boolean(); // true, false
new Number(); //1,2,3,...
//Functions are Objects (Функции являются объектами)
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
Circle.name //Circle
Circle.length //1
Circle.constructor //function

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
`);
const circle = new Circle1(1);
const another = new Circle(1);

Circle.call({}, 1);
Circle.apply({}, [1,2,3]);
//Value vs. Reference Types (Соотношение типов и ссылок)
//Value Types (Типы значений) / Reference Types (Типы ссылок)
//Number / Object
//String / Function
//Boolean / Array
//Symbol
//undefined
//null
//////////////////////////////////
let x = 10;
let y = x;
x = 20;
// x - 20, y - 10
let x = { value: 10 };
let y = x;
x.value = 20;
// x - {value: 20}, y - {value: 20}
//Primitives are copied by their value (Примитивы копируются по их стоимости)
//Objects are copied by their reference (Объекты копируются по их ссылке)
let number = 10;
function increase(number) {
    number++;
}
increase(number);
console.log(number); //10
////////////////////////
let obj = { value: 10 };
function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj); //{value: 11}
//Enumerating Properties of an Object (Перечисление свойств объекта)
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};
for (let key in circle)
    console.log(key, circle[key]);
for (let key of circle)
    console.log(key); //error
for (let key of Object.keys(circle))
    console.log(key);

// Object.keys()
for (let key of Object.keys(circle))
    console.log(key);
    for (let entry of Object.entries(circle))
        console.log(entry);
//entry - запись
if( 'radius' in circle) console.log('yes'); //yes
if( 'color' in circle) console.log('yes'); //
//Cloning an Object (Клонирование объекта)
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};
const another = {};
for(let key in circle)
    another[key] = circl[key];
// another['radius'] = circle['radius'];
console.log(another);
//////////////////
const another = Object.assign({
    color: 'yellow'
}, circle);
console.log(another);
/////////////////
const another = { ...circle };
console.log(another);
//Garbage Collection (Вывоз мусора)
let circle = {};
console.log(circle);
//Math (математический)
console.log(Math.PI); //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
//String (строка)
//String primitive (примитивная строка)
const message = 'This is my first message'; //typeof message "string"
message.length; //24
message[0]; //T - ECMAScript 5 доступ к символам
message.includes('my') //true
message.startsWith('This') //true
message.indexOf('my') //8
message.replace('first', 'second') //This is my second message
message.toUpperCase() // THIS IS MY FIRST MESSAGE
message.trim() //
message.split(' ') // []

//String object (строка объект)
const another = new String('hi'); //typeof another "object"
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
//Template Literals (Шаблонные литералы)
