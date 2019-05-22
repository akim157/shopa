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
//String primitive (Примитивная строка)
const message =
    'This is my\n' +
    ' \'first\' message';
//Object {}
//Boolean true, false
//String '', ""
//Template ``
const another =
    `This is my
    first message`;

const another =
    `Hi John,
    
    Thank you for joining my mailing list.
    
    Regards,
    Maxim`;
//(Привет Джон, Спасибо тебе за присоединения к моему списку рассылки. С уважением, Максим)
const name = 'John';
const message = 'Hi ' + name + ',\n';
const another =
    `Hi ${name} ${2 + 3},
    
    Thank you for joining my mailing list.
    
    Regards,
    Maxim`;
//Date
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
const date2 = new Date(2018, 4, 11, 9);
now.setFullYear(2017);
now.toDateString(); //Thu May 11 2017
now.toTimeString() //11:35:01 GMT-0700 (PDT)
now.toISOString(); //2017-05-11T18:35:01.212Z
//Exercise 1 - Address Object (Упражнение 1 - Адрес объекта)
//street (улица)
//city (город)
//zipCode (Почтовый индекс)
//showAddress(address) (Показать адрес)
let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};
function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}
showAddress(address);
//Exercise - Factory and Constructor (Упражнение - Фабрика и Конструктор)
let address = createAddress('a', 'b', 'c');
console.log(address);
//Factory function (Фабричная функция)
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}
//Constructor function (Функция конструктора)
let address = new Address('a', 'b', 'c');
console.log(address);
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
//Exercise 3 - Object Equality (Упражнение 3 - Объект равенство)
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;

console.log(areEqual(address1, address2)); //true
console.log(areSame(address1, address2)); //false
console.log(areSame(address1, address3)); //true

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    return address1.street === address2.street &&
            address1.city === address2.city &&
            address1.zipCode === address2.zipCode;
}
function areSame(address1, address2) {
    return address1 === address2;
}
//Exercise 4 - Blog Post Object (Упражнение 4 - Объект блога)
//title (Заголовок)
//body (Тело)
//author (автор)
//views (Просмторы)
//comments (Комментарии)
// (author, body) (автор, тело)
//isLive (в прямом эфире)
let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        { author: 'a', body: 'b' },
        { author: 'c', body: 'd' },
    ],
    isLive: true
};
console.log(post);
//Exercise 5 - Constructor Functions (Упражнение 5 - Функции конструктора)
let post = new Post('a', 'b', 'c');
console.log(post);

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}
//Exercise 6 - Price Range Objects (Упражнение 6 - Диапазон цен объекта)
let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 20, maxPerPerson: 50 }
];
//( tooltip (Подсказка), min per person (мин на человека), Inexpensive (Недорогой), Moderate (Умеренный), Expensive (Дорого))
let restaurants = [
    { averagePerPerson: 5}
];
//( average per person (в среднем на человека))
//Introduction (Вступление)
//Array (массив)
//Adding new elements (Добавление новых элементов)
//Finding elements (Поиск элементов)
//Removing elements (Удаление элементов)
//Splitting arrays (Расщепление массивов)
//Combining arrays (Объединение массивов)
////////////////////////////////////////
//Adding Elements (добавление элементов)
const numbers = [3,4];
//End (Конец)
numbers.push(5,6);
console.log(numbers); //[3,4,5,6]
//Beginning (начало)
numbers.unshift(1,2);
console.log(numbers); //[1,2,3,4,5,6]
//Middle (средний)
numbers.splice(2,0, 'a', 'b');
console.log(numbers); //[1,2,'a','b',3,4,5,6]
//Finding Elements (Primitives) (Поиск элементов (Примитивный))
const numbers = [1,2,3,4];
console.log(numbers.indexOf('a')); //-1
console.log(numbers.indexOf(1)); //0
console.log(numbers.indexOf('1')); //-1
const numbers2 = [1,2,3,4,1,5];
console.log(numbers2.lastIndexOf(1)); //4

console.log(numbers2.indexOf(1) !== -1);
console.log(numbers2.includes(1)); //true
//Finding Elements (Reference Types) (Поиск элементов (Ссылочный тип))
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];
console.log(courses.includes({ id: 1, name: 'a' })); //false - потому что объект
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const course = courses.find(function(course) {
    return course.name === 'a';
});
console.log(course); //{ id: 1, name: 'a' }
const course = courses.find(function(course) {
    return course.name === 'zyx';
});
console.log(course); //undefined
const course = courses.findIndex(function(course) {
    return course.name === 'zyx';
});
console.log(course); //-1
const course = courses.find(function(course) {
    return course.name === 'a';
});
console.log(course); //0
//Arrow Functions (Стрелочная функция)
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];
const course = courses.find(course => course.name === 'a');
console.log(course); //0
//Removing Elements (Удаление элементов)
const numbers = [1,2,3,4];
//end
const last = numbers.pop();
console.log(numbers); //[1,2,3]
console.log(last); //4
//beginning
const first = numbers.shift();
console.log(numbers); //[2,3]
console.log(first); //1
//middle
numbers.splice(2,1);
console.log(numbers);//[1,2,4]
//Emptying an Array (Очистка массива)
let numbers = [1,2,3,4];
let another = numbers;
//Solution 1 (Решение 1)
numbers = []; //!
console.log(numbers) //[]
console.log(another) //[1,2,3,4]
//Solution 2 (Решение 2)
numbers.length = 0; //!
console.log(numbers) //[]
console.log(another) //[]
//Solution 3 (Решение 3)
numbers.splice(0, numbers.length);
console.log(numbers) //[]
console.log(another) //[]
//Solution 4 (Решение 4)
while (numbers.length > 0)
    numbers.pop();
console.log(numbers) //[]
console.log(another) //[]
//Combining and Slicing Arrays (Объединение и нарезка массивов)
const first = [1,2,3];
const second = [4,5,6];
const combined = first.concat(second);
console.log(combined);//[1,2,3,4,5,6]
const slice = combined.slice(2,4);
console.log(combined);//[1,2,3,4,5,6]
console.log(slice);//[3,4]
/////////////////////////
const first = [{ id: 1 }];
const second = [4,5,6];
const combined = first.concat(second);
first[0].id = 10;
console.log(combined); //[{id:10},4,5,6]
//The Spread Operator (Оператор спреда)
const first = [1,2,3];
const second = [4,5,6];
const combined = [...first, 'a', ...second, 'b'];
const copy = [...combined];
//Iterating an Array (Итерация массива)
const numbers = [1,2,3];
for (let number of numbers)
    console.log(number); //1,2,3
numbers.forEach(function(number){
    console.log(number); //1,2.3
});
numbers.forEach(number => console.log(number)); //1,2.3
numbers.forEach((number, index) => console.log(index, number)); //0 1,1 2,2 3
//Joining Arrays (Объединение массивов)
const numbers = [1,2,3];
const joined = numbers.join(',');
console.log(joined); //1,2,3

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts); //[This, is, my, first, message]
const combined = parts.join('-');
console.log(combined); //This-is-my-first-message
//Creating arrays in Javascript (Создание массивов в Javascript)
//https://stackoverflow.com/questions/9543518/creating-arrays-in-javascript
//Sorting Arrays (Сортировка массивов)
const numbers = [3,2,1];
numbers.sort();
console.log(numbers); //[1,2,3]

numbers.reverse();
console.log(numbers); //[3,2,1]
///////////////
const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' }
];
courses.sort();
console.log(courses);// [{ id: 1, name: 'Node.js' },{ id: 2, name: 'JavaScript' }]
courses.sort(function(a, b){
    // a < b => -1
    //a > b => 1
    //a === b => 0
    // const nameA = a.name.toUpperCase();
    // const nameB = b.name.toUpperCase();
    // const nameA = a.name.toLowerCase();
    // const nameB = b.name.toLowerCase();
    //
    // if (nameA < nameB) return -1;
    // if (nameA > nameB) return 1;

    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log(courses);// [{ id: 2, name: 'JavaScript' },{ id: 1, name: 'Node.js' }]
//ascii table
//https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html
//Testing the Elements of an Array (Тестирование элементов массива)
const numbers = [1,2,3,-3];
const allPositive = numbers.every(function(value) {
    return value >= 0;
});
console.log(allPositive); //false
///////////////////////
const numbers = [1,2,3,-3];
//every()
//some()
const atLeastOnePositive = numbers.some(function(value) {
    return value >= 0;
});
console.log(atLeastOnePositive); //false
//Filtering an Array (Фильтрация массива)
const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(function(value){
    return value >= 0;
});
console.log(filtered); //[1,2,3]
//////
const filtered = numbers.filter(n => n >= 0);
console.log(filtered); //[1,2,3]
//Mapping an Array (Картирование массива)
