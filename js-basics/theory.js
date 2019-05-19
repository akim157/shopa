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