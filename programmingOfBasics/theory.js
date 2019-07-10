/* ======== 1.What is OOP (Что такое программирование) ======= */
// A proramming paradigm centered around objects rather than functions.
// Парадигма программирования сосредоточена вокруг объектов, а не функций.
// OOP is not a programming language or tool!
// ООП не является языком программирования или инструментом!
// LANGUAGES (ЯЗЫКИ)
// С#
// Java
// Ruby
// Python
// JavaScript
/////////
// Так что же такое объектно-ориентированное программирование?
// Объектно-ориентированное программирование-это парадигма программирования или
// стиль программирования, который сосредоточен вокруг объектов, а не функций.
// Это ничего нового, это было вокруг с 70-х годов,
// но в отличие от инструментов и механизмов, которые приходят и уходят, объектно-ориентированное программирование
// по-прежнему очень актуально сегодня, это потому, что это не
// язык программирования или инструмент. Это стиль программирования или
// парадигма программирования. Существует несколько языков программирования
// которые поддерживают объектно-ориентированное программирование, такое как C#, Java,
// Ruby, Python, JavaScript и многое другое. Сейчас
// JavaScript немного спорный, но я вернусь к этому позже. Оно
// возможно, Вам будет интересно узнать, что многие из популярных фреймворков там, что вы можете знать
// или использовать на самом деле разработаны с объектно-ориентированного программирования
// концепции в уме. Угловой пример этих рамок.
// Итак, объектно-ориентированное программирование-очень популярный стиль
// программирования, и это всплывает во многих технических интервью.
// Так что если вы действительно хотите быть серьезным разработчиком, вы должны понять
// объектно-ориентированное программирование. Как технический интервьюер, если я вижу
// кандидат с объектно-ориентированным программированием в своем резюме, этот кандидат
// выделяется для меня. И вот где этот ускоренный курс входит.
// В этом курсе вы узнаете и поймете объектно-ориентированный
// принципы и способы их реализации в JavaScript.
/* ========= 2.Four Pillars of OOP (Четыре столпа ООП)============== */
// Инкапсуляция | абстракция | полиморфизом | наследование
/* ========= 3.Setting Up the Development Environment (Настройка среды разработки)============== */
//Live Server - install plugin
/* ========= 4.Course Structure (Структура курса)============== */
/* ========= 5.Asking Questions (Задавать вопросы)============== */
// У вас могут быть вопросы на протяжении всего курса. Выполните следующие шаги, чтобы максимально использовать свой курс и стать лучшим программистом, которым вы можете быть.
// 1. Проведите собственное исследование. Обычно вы можете найти ответ на свой вопрос, погуглив вопрос или ошибку, с которой вы столкнулись.
// 2. Попробуйте решить проблему, не «звоня другу». Принятие решения самостоятельно поможет вам вырасти и стать более сильным программистом.
// 3. Все еще застряли? Опубликуйте свой вопрос на доске для обсуждения курса. Моя команда здесь, чтобы помочь!
// 4. Помогайте другим ученикам, отвечая на их вопросы на доске обсуждений. Лучший способ чему-то научиться - это научить этому.
// «Каждый должен знать, как кодировать компьютер, потому что он учит вас думать!» - Стив Джобс
/* ========= 6.Introduction (Вступление)============== */
/* ========= 7.Object Literals (Объектные литералы)============== */
const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 1
	},
	draw: function(){
		console.log('draw');
	}
};

circle.draw();
/* ========= 8.Factories (Фабрики)============== */
//Поведении - методы в объектах
// Factory Function
function createCircle(radius) {
	return {
		radius,
		draw: function() {
			console.log('draw');
		}
	};
}

const circle = createCircle(1);
circle.draw();
/* ========= 9.Constructors (Конструкторы)============== */
//new - создает новый пустой объект {}, привязывает this к объекту и возвращает объект без return 
//this - ссылается на новый созданный объект, или на глобальный объект window
// Constructor Function
function Circle(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log('draw');
	}
}

const another = new Circle(1);
/* ========= 10.Constructor Property (Свойство конструктора)============== */
//another.constructor - возвращает функцию
//circle.constructor - возвращает объект (new Object())
new String(); // '',"",``
new Boolean(); // true, false
new Number(); //1,2,3,...
//У каждого объекта есть свойство конструктор, который ссылается на функцию, которая использовалась для создания этого объекта.
/* ========= 11.Functions are Objects (Функции являются объектами)============== */
//Фиолетовые - это методы call, bind, apply
//Синие - являются свойствами
//Конструктор Function()
new Function();
///////
const Circle1 = new Function('radius', `
	this.radius = radius;
	this.draw = function() {
		console.log('draw');
	}
`);

const circle = new Circle1(1);
///////////
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.call({}, 1,2,3);
Circle.apply({}, [1,2,3]);
/* ========= 12.Value vs Reference Types (Значение по сравнению с ссылочными типами)============== */
//Value Types (Примитивные типы) | Reference Types (Ссылочные типы)
//Number, String, Boolean, Symbol, undefined, null | Object, Function, Array
/* ========= 13.Adding or Removing Properties (Добавление или удаление свойств)============== */
function Circle(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log('draw');
	}
}

const circle = new Circle(10);

circle.location = { x: 1 };

const propertyName = 'center-location';
circle[propertyName] = { x: 1 };
console.log(circle);

delete circle.location;
/* ========= 14.Enumerating Properties (Перечисление свойств)============== */
function Circle(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log('draw');
	}
}

const circle = new Circle(10);

for (let key in circle) {
	if (typeof circle[key] !== 'function')
		console.log(key, circle[key]);
}

const keys = Object.keys(circle); //вернет все ключи в виде массива
console.log(keys);

if ('radius' in circle)
	console.log('Circle has a radius.');
/* ========= 15.Abstraction (Абстракция)============== */
// Hide the details Show the essentials (Скрыть детали Показать основы)
function Circle(radius) {
	this.radius = radius;
	this.defaultLocation = { x: 0, y: 0 };
	this.computeOptimumLocation = function(factor) {
		// ...
	}
	this.draw = function() {
		this.computeOptimumLocation(0.1);
		console.log('draw');
	}
}

const circle = new Circle(10);
circle.draw();
/* ========= 16.Private Properties and Methods (Частная собственность и методы)============== */
function Circle(radius) {
	this.radius = radius;
	let defaultLocation = { x: 0, y: 0 };
	let computeOptimumLocation = function(factor) {
		// ...
	}
	this.draw = function() {	
		computeOptimumLocation(0.1);
		// defaultLocation
		// this.radius
		console.log('draw');
	}
}

const circle = new Circle(10);
circle.draw();







