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
/* ========= 17.Getters and Setters (Добытчики и сеттеры)============== */
function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 };
    this.getDefaultLocation = function() {
        return defaultLocation;
    };
    this.draw = function() {
        console.log('draw');
    };
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location')
            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
console.log(circle);
// circle.getDefaultLocation();
// circle.getDefaultLocation;
/* ========= 19.Exercise- Stop Watch (Упражнение - Секундомер)============== */
function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function() {
        if (running)
            throw new Error('Stopwatch has already started.');
        running = true;
        startTime = new Date();
    };
    this.stop = function() {
        if (!running)
            throw new Error('Stopwatch is not started.');
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
    Object.defineProperty(this,'duration',{
        get: function() {
            return duration;
        }
    });
}



// const sw = new Stopwatch();
// sw.start(); //Stopwatch has already started. (Секундомер уже запущен)
// sw.stop();
// sw.reset();
// sw.duration; //продолжительность
/* ========= 21.Inheritance (Вступление)============== */
//Наследование
//Shape //Base/Super/Parent//(computeOptimumLocation()) -> Circle //Derived(Прямой)|Sub(Подкласс)|Child(Дочерний)// | Square
//IS-A (Отношения)
//В JS нет классов, есть только объекты
//Classical vs Prototypical
/* ========= 22.Prototypes and Prototypical Inheritance (Прототипы и прототипическое наследование)============== */
//Prototype - родитель другого объекта. (Родитель)
//обычный объект в пямяти, каждый объект имеет прототип или родитель, кроме корневого объекта.
//__proto__ - это свойство устарело и мы не должны името к нему прямой доступ
//хранятся свойства и методы родителя
//constructor - который ссылается на функцию, которая использовалась для создания это объекта
//__proto__.toString
//x.toString();
let x = {};
let y = {};
//objectBase -> x | y
Object.getPrototypeOf(x) === Object.getPrototypeOf(y) //true
x.__proto__ === y.__proto__ // true - это свойство устарело
x.toString() //"[object Object]"
//JS движок сначала ищет запрашиваемое свойство на самом объекте. Если не находит, то смотрит на прототайпе для этого объекта
// до коренового объекта родительского объекта
/* ========= 23.Multi-level Inheritance (Многоуровневое наследование)============== */
let arr = []; //new Array() -> new Object();
//myArray -> arrayBase -> objectBase - многоуровневое наследование
//new Circle - создается прототайп для всех всех объектов круга, которые мы создаем, используя наш круг
// Object created by a given constructor will have the same protorype. (Объект, созданный данным конструктором, будет иметь такой же прототип.)
//circle -> circleBase -> objectBase
/* ========= 24.Property Descriptors (Дескрипторы свойств)============== */
let person = { name: 'Maxim' };

let objectBase = Object.getPrototypeOf(person);
Object.getOwnPropertyDescriptor(objectBase, 'toString');
//configurable: true - можно удалить этого участника
//enumerable: false - не можем увидить метод toString в person
//writable: true - мы можем переписать этот метод, изменить его реализацию, а затем установить его значение.
let person = { name: 'Maxim' };

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
});

person.name = 'John';
delete person.name;

console.log(person); // имя не изменяется
console.log(Object.keys(person)); //
/* ========= 25.Constructor Prototypes (Конструктор Прототипы)============== */
Object.getPrototypeOf(myObj);

// myObj.__proto__ (parent of myObj)

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype

const circle = new Circle(1);
/* ========= 26.Prototype vs. Instance Members (Прототип против Экземпляров памяти)============== */
function Circle(radius) {
    // Instance members
    this.radius = radius;

    this.move = function() {
        this.draw();
        console.log('move');
    }
}

// Circle.prototype === c1.__proto__

// Prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);

Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}
/* ========= 27.Iterating Instance and Prototype Members (Итерация элементов экземпляра и прототипа)============== */
function Circle(radius) {
    // Instance members
    this.radius = radius;

    this.move = function() {
        console.log('move');
    }
}

const c1 = new Circle(1);

// Prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

// Returns instance members
console.log(Object.keys(c1)); //['radius', 'move']

// Returns all members (instance + prototype)
for (let key in c1) console.log(key); // radius, move, draw

// c1.hasOwnProperty('radius') - true
// c1.hasOwnProperty('draw') - false
/* ========= 28.Avoid Extending the Built-in Objects (Избегайте расширения встроенных объектов)============== */
Array.prototype.shuffle = function() {
    // ...
};

const array = [];

array.shuffle();

// Don`t modify objects you don`t own! (Не изменяйте объекты, которыми вы не владеете!)
/* ========= 30.Exercise (Упражнение)============== */
function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        },
        set: function(value) {
            duration = value;
        }
    });
    Object.defineProperty(this, 'startTime', {
        get: function() {
            return startTime;
        }
    });
    Object.defineProperty(this, 'endTime', {
        get: function() {
            return endTime;
        }
    });
    Object.defineProperty(this, 'running', {
        get: function() {
            return running;
        },
        set: function (value) {
            running = value;
        }
    });
}

Stopwatch.prototype.start = function() {
    if (this.running)
        throw new Error('Секундомер уже запущен');
    this.running = true;
    this.startTime = new Date();
};
Stopwatch.prototype.stop = function() {
    if (!this.running)
        throw new Error('Секундомер уже остановлен');
    this.running = false;
    this.endTime = new Date();
    const result = (endTime.getTime() - startTime.getTime()) / 1000;
    this.duration += result;
};
Stopwatch.prototype.reset = function() {
    this.duration = 0;
    this.startTime = null;
    this.endTime = null;
    this.running = null;
};

// Premature optimization is the root of all evils (Преждевременная оптимизация - корень всех зол)
/* ========= 32.Creating Your Own Prototypical Inheritance (Создание собственного прототипического наследования)============== */

function Shape() {}

Shape.prototype.duplicate = function() {
	console.log('duplicate');
}

function Circle(radius) {
	this.radius = radius;
}

// Circle.prototype = Object.create(Object.prototype); //objectBase
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
	console.log('draw');
}

const s = new Shape();
const c = new Circle(1);

//c -> circleBase(Circle.prototype) -> objectBase
//s -> shapeBase(Shape.prototype) -> objectBase
/* ========= 33.Resetting the Constructor (Сброс Конструктора)============== */
function Shape() {}

Shape.prototype.duplicate = function() {
	console.log('duplicate');
}

function Circle(radius) {
	this.radius = radius;
}

// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor() => new Circle();
//new Circle.prototype.constructor - Shape потому что мы сбросили прототайп Circle
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
	console.log('draw');
}

const s = new Shape();
const c = new Circle(1);

// new Circle.prototype.constructor(1) === new Circle(1)
/* ========= 34.Calling the Super Constructor (Вызов Супер Конструктора)============== */
function Shape(color) {
	this.color = color;
}

Shape.prototype.duplicate = function() {
	console.log('duplicate');
}

function Circle(radius, color) {
	// Shape(color);
	Shape.call(this, color);
	this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
	console.log('draw');
}

const s = new Shape();
const c = new Circle(1, 'red');
/* ========= 35.Intermediate Function Inheritance (Наследование промежуточных функций)============== */
function Shape(color) {
	this.color = color;
}

Shape.prototype.duplicate = function() {
	console.log('duplicate');
}

function extend(Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Circle;
}

function Circle(radius, color) {
	Shape.call(this, color);
	this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
	console.log('draw');
}

function Square(size) {
	this.size = size;
}

extend(Square, Shape);

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;

const s = new Shape();
const c = new Circle(1, 'red');
/* ========= 36.Method Overriding (Переопределение метода)============== */
function extend(Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Circle;
}

function Shape() {}

Shape.prototype.duplicate = function() {
	console.log('duplicate');
}

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
	Shape.prototype.duplicate.call(this);
	console.log('duplicate cirle');
}

const c = new Circle();
/* ========= 37.Polymorphism (Полиморфизм)============== */
//Много форм
function extend(Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Circle;
}

function Shape() {}

Shape.prototype.duplicate = function() {
	console.log('duplicate');
}

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {	
	console.log('duplicate cirle');
}

function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function() {
	console.log('duplicate square');
}

const shapes = [
	new Circle(),
	new Square()
];

for (let shape of shapes)
	shape.duplicate();

// for (let shape of shapes) {
// 	if (shape.type === 'circle')
// 		duplicateCircle();
// 	else if (shape.type === 'square')
// 		duplicateSquare();
// 	else
// 		duplicateShare();
// }
/* ========= 38.When to Use Inheritance (Когда использовать наследование) ============== */
// Composition - Состав
// objectAnimal - methodEat(), methodWalk()
// objectPerson | objectDog | objectGoldfish
/////////////////
// objectAnimal - eat();
// Mammal - walk() | Fish - swim()
// Person - Dog | Goldfish
// Avoid creating inheritance hierarchies - Избегайте создания иерархий наследования
// Favor Composition over Inheritance - Фавор состав по наследству
/////////////
//canWalk, canEat, canSwim
//Mixins
/* ========= 39.Mixins (Примеси) ============== */
function mixin(target, ...sources) {
	Object.assign(target, ...sources);
}

const canEat = {
	eat: function() {
		this.hunger--;
		console.log('eating');
	}
};

const canWalk = {
	walk: function() {
		console.log('walking');
	}
};

const canSwim = {
	swim: function() {
		console.log('swim');
	}
};

function Person() {}

mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);

function goldFish() {}

mixin(goldFish.prototype, canEat, canSwim);

const goldfish = new goldFish();
console.log(goldfish);
/* ========= 41.Exercise Prototypical Inheritence (Осуществление прототипического наследования) ============== */
function HtmlElement() {
	this.click = function() {
		console.log('click');
	}
}

HtmlElement.prototype.focus = function() {
	console.log('focus');
};

function HtmlSelectElement(items = []) {		
	this.items = items;

	this.addItem = function(item) {
		this.items.push(item);
	};

	this.removeItem = function(item) {
		this.items.splice(this.items.indexOf(item), 1);
	}
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
/* ========= 43.Exercise - Polymorphism (Задача - Полиморфизм) ============== */
function HtmlElement() {
	this.click = function() {
		console.log('click');
	}
}

HtmlElement.prototype.focus = function() {
	console.log('focus');
};

function HtmlSelectElement(items = []) {		
	this.items = items;

	this.addItem = function(item) {
		this.items.push(item);
	};

	this.removeItem = function(item) {
		this.items.splice(this.items.indexOf(item), 1);
	}

	this.render = function() {	
		return `<select>
						${
							this.items.map(n => 
							`<option>${n}</option>`).join('')
						}
					</select>`;
	}
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
	this.src = src;
	this.render = function() {			
			return `<img src="${this.src}" />`;				
	}
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
	new HtmlSelectElement([1,2,3]),
	new HtmlImageElement('http://')
];

for (let element of elements)
	console.log(element.render());
/* ========= 45.ES6 Classes (ES6 Классы) ============== */
//https://babeljs.io/
//typeof Circle - function
// function Circle(radius) {
// 	this.radius = radius;

// 	this.draw = function() {
// 		console.log('draw');
// 	}
// }

class Circle {
	constructor(radius) {
		this.radius = radius;
		this.move = function() {
			console.log('move');
		}
	}

	draw() {
		console.log('draw');
	}
}

const c = new Circle(1);
/* ========= 46.Hoisting (Подъемно) ============== */
// Function Declaration
function name() {}

// Function Expression
const sayGood = function() {};

// Class Declaration
class Circle {}
// Class Expression
const Square = class {};
/* ========= 47.Static Methods (Статические Методы) ============== */
class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	// Instance Method - Метод экземпляра (__proto__)
	draw() {}
	// Static Method
	static parse(str) {
		const radius = JSON.parse(str).radius;
		return new Circle(radius);
	}
}

// const circle = new Circle(10);
// Circle.parse(); //его нету в объекте, мы работаем напрямую через класс
const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);
//////////////
class Math2 {
	static abs(value) {
		//...
	}
}

Math2.abs();
/* ========= 48.The This Keyword (Это ключевое слово) ============== */
'use strict'; //window - undefined

const Circle = function() {
	this.draw = function() {
		console.log(this);
	}
}

const c = new Circle();
// Method Call
c.draw(); //вызов метода на объекте

const draw = c.draw;
// Function Call
draw(); //вызов функции, котоаря не является частью объекта, по этому this будет ссылаться на глобальны объект window
//////////////////
class Circle {
	draw() {
		console.log(this);
	}
}

const c = new Circle();
const draw = c.draw;
draw(); // undefined - класс всегда работает по умолчанию как strict,
// чтобы не менять глобальный объект window
/* ========= 49.Private Members Using Symbols (Частные пользователи, использующие символы) ============== */
// Абстракция - скрытие и показаны только основные
// Symbol - это функция, которая мы вызываем для генерации символа.
// Символ - это уникальный идентификатор.
const _radius = Symbol();
const _draw = Symbol();
class Circle {
	constructor(radius) {
		// this.radius = radius;
		// this['radius'] = radius;
		this[_radius] = radius; //Symbol
	}	
	[_draw]() {}
}

const c = new Circle(1);
// console.log(Object.getOwnPropertyNames(c));
// console.log(Object.getOwnPropertySymbols(c));
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]); //1
/* ========= 50.Private Members Using WeakMaps (Частные пользователи, использующие WeakMaps) ============== */
// WeakMap - словарь где ключи являются объектами, а значения могут быть устранены.
// Ключи слабые, если нет ссылок на эти ключи они будут удалены уборщиком мусора.
const _radius = new WeakMap();
const _move = new WeakMap();
const privateProps = new WeakMap();
class Circle {
	constructor(radius) {
		// privateProps.set(this,{
			// 	radius: radius,
			// 	move: () => {}
			// });
			// privateProps.get(this).radius;
			
			_radius.set(this, radius);
			_move.set(this, () => {
				console.log('move', this);
			});
		}		
		draw() {
			// console.log(_radius.get(this));
			_move.get(this)();
		}
	}
	
	const c = new Circle(1);
	
	/* ========= 51.Getters and Setters (Добытчики и сеттеры) ============== */
	const _radius = new WeakMap();
class Circle {
	constructor(radius) {		
		_radius.set(this, radius);		

		// Object.defineProperties(this, 'radius', {
		// 	get: function() {},
		// 	set: function() {}
		// });
	}	
	
	get radius() {
		return _radius.get(this);
	}

	set radius(value) {
		if (value <= 0) throw new Error('Invalid radius.');		
		_radius.set(this, value);
	}
}

const c = new Circle(1);
	/* ========= 52.Inheritance (наследование) ============== */
	class Shape {
		constructor(color) {
			this.color = color;
		}
		move() {
			console.log('move');
		}
	}
	
	class Circle extends Shape {
		constructor(color, radius) {
			super(color);
			this.radius = radius;
		}
		draw() {
			console.log('draw');
		}
	}
	
	const c = new Circle('red', 23);
	/* ========= 53.Method Riding (Метод верховой езды) ============== */
	class Shape {
		move() {
			console.log('move');
		}
	}
	
	class Circle extends Shape {
		move() {
			super.move();
			console.log('circle move');
		}
	}
	
	const c = new Circle();
	/* ========= 55.Exercise (Задача) ============== */
	// STACK - это особый вид стурктуры данных, как физический стек, или труба
	const _items = new WeakMap();
	class Stack {
		constructor() {
			_items.set(this,[]);
		}
		push(obj) {
			_items.get(this).push(obj);
		}
		pop() {
			const items = _items.get(this);
			if (items.length === 0) throw new Error('Stack is empty.');
			return items.pop();
		}
		peek() {
			const items = _items.get(this);
			if (items.length === 0) throw new Error('Stack is empty.');
			// return items.slice(-1)[0];		
			return items[items.length - 1];		
		}
		get count() {
			return _items.get(this).length;
		}
	}
	
	const stack = new Stack();
/* ========= 57.Modules (Модули) ============== */
// MODULARITY
// Maintainability
// Reuse
// Abstract
/////////////
// No modules in ES5
// MODULES
// AMD - асинхронный модуль, в основном используется в приложениях браузера
// CommonJS - используется в Node
// UMD - универсальный определение модуля, можно использовать как в Browser / Node.js
// ES6 Modules - native поддерживает формат модуля.
// CommonJS (Node.js)	| ES6 Modules (Browser)
const _radius = new WeakMap();

class Circle {
	constructor(radius) {
		_radius.set(this, radius);
	}
	draw() {
		console.log('Circle with radius ' + _radius.get(this));
	}
}

const c = new Circle(10);
console.log(_radius.get(c));
c.draw();
/* ========= 58.CommonJS Modules (Модуль CommonJS) ============== */
// Things that are highly related should go together (Вещи, которые тесно связаны, должны идти вместе)
// Cohesion - сплаченость
// circle.js
// Implementation Detail
const _radius = new WeakMap();

// Public Interface
class Circle {
	constructor(radius) {
		_radius.set(this, radius);
	}
	draw() {
		console.log('Circle with radius ' + _radius.get(this));
	}
}

// module.exports.Circle = Circle;
module.exports = Circle;
// index.js
const Circle = require('./circle');

const c = new Circle(10);
c.draw();
/* ========= 59.ES6 Modules (Модуль ES6) ============== */
// circlees6.js
const _radius = new WeakMap();

export class Circle {
	constructor(radius) {
		_radius.set(this, radius);
	}
	draw() {
		console.log('Circle with radius ' + _radius.get(this));
	}
}
//index.js
import { Circle } from './circlees6.js';

const c = new Circle(10);
c.draw();
//index.html
<script type="module" src="index.js"></script>
/* ========= 60.ES6 Tooling (ES6 Инструменты) ============== */
// Transpiler (транспортер) | Bundler (упаковщик)
// Transpiler - переводчик и компилятор. (Modern -> |BABEL| -> ES5)
// Bundler - упаковывает все файлы js в одни файл bundler (.js.js.js -> | WEBPACK | -> .js)
/* ========= 61.Babel ============== */
// npm i babel-cli babel-core babel-preset-env --save-dev
// babel-cli - это интерфейс командной сторки Babel
// babel-core - это ядро вся логика реализации кода.
// babel-preset-env - это комбинация всех плагинов для ES6, он понимает все новые функции в JS
// --save-dev - они будут частью нашего приложения, и находятся исключительно на машине разработки
// code . - запускает VSCode
// package.json
// "scripts": {
// 	"babel": "babel --presets env index.js -o build/index.js"
// }
// balbe - это интерфейс командной строки Babel, которую мы запускаем из терминала
// нужно создать директорию build
/* ========= 62.Webpack ============== */
// npm i -g webpack-cli
// webpack-cli init
// uglifyjs - сокращение имени
//"build": "webpack --config webpack.config.js"
// npm run build
//"build": "webpack --w" - автоматически изменять 
















