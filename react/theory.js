/*========== 1.What is React ========== */
//A JavaScript library for building user interfaces (Библиотека JavaScript для создания пользовательских интрефесов)
//components (компоненты)
<x>
    ...
</x>
//A piece of the UI (Часть пользовательского интерфейса)
//App (Приложение)
//App -> NavBar|Profile|Trends|Feed ( NavBar | Профиль | Тенденции | Лента)
//Feed -> Tweet | like (Чирикать | лайк)
class Tweet {
    state = {}; //(состояние )
    render() { //-> React Element (оказывать -> Реактивный элемент)

    }
}
//React Element | DOM Element (Реактивный элемент | DOM Элемент)
//Virtual DOM -> React Element (Виртуальный DOM -> Реактивный элемент)
//Real DOM -> DOM Element (Реальный DOM -> DOM Элемент)
const element = document.querySelector(); //(селектор запросов) Возвращает первый элемент внутри документа
element.classList.add(); //Свойство classList возвращает псевдомассив DOMTokenList, содержащий все классы элемента.
element.addEventListener(); // (добавить прослушиватель событий) Метод EventTarget.addEventListener() регистрирует определенный обработчик события, вызванного на EventTarget.
//////////////////////
//React (реагировать)
//reacts to state changes (реагирует на изменения состояния)
//Сравнение Angular and React (Framework | View Library)
/*============= 2.Setting Up the Development Environment ========*/
//npm i -g create-react-app@1.5.2 (Команда для установки Реакта)
//Simple React Snippets - React snippets (это сокращения в редакторе, трансформируемые в полноценный код - Emmet для react)
//Prettier - для выравнивание кода
/*============= 3.Your First React App ==========================*/
//create-react-app react-app (командная строка для установки и создания реакт приложения)
//Development Server | Webpack | Babel (Сервер разработки | Webpack | галдеж)
//Babel - это компилятор JavaScript, набор инструментов, который в основном используется для преобразования кода ECMAScript 2015+ в обратно совместимую версию JavaScript в существующих старых браузерах и средах
//Webpack - это пакет статических модулей для современных приложений JavaScript, который строит граф зависимоти модулей для проекта и генерирует один или несклько пакетов.
////////////////////////////
//zero-config setup (настройка с нулевой конфигурацией)
//Inside that directory, you can run several commands: (Внутри этого каталога вы можете запустить несколько команд:)
//npm start - Starts the development server. (Запускает сервер разработки.)
//npm run build - Bundles the app into static files for production. (Объединяет приложение в статические файлы для производства.)
//npm test - Starts the test runner. (Запускает тестовый бегун.)
//npm run eject - Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back! (Удаляет этот инструмент и копирует зависимости сборки, файлы конфигурации и скрипты в каталог приложения. Если вы сделаете это, вы не сможете вернуться!)
////////////////////////////
//manifest.json - Предоставляет метаданные, используемые при установке веб-приложения на мобильное устройство пользователя или рабочий стол.
//Является простой JSON - файл , который сообщает браузеру о вашем веб - приложения и как он должен себя вести , когда «установлен» на мобильном устройстве или на рабочем столе пользователя. Chrome требует наличия манифеста для отображения
//Типичный файл манифеста содержит информацию о приложении name, которое icons оно должно использовать, с которого start_url оно должно начинаться при запуске, и многое другое.
//Обратите внимание на использование% PUBLIC_URL% в тегах выше.
//       Он будет заменен URL-адресом папки `public` во время сборки.
//       Только файлы внутри папки `public` могут ссылаться из HTML.
//
//       В отличие от "/favicon.ico" или "favicon.ico", "% PUBLIC_URL% / favicon.ico" будет
//       работать корректно как с маршрутизацией на стороне клиента, так и с общедоступным URL без полномочий root.
//       Узнайте, как настроить общедоступный URL без полномочий root, запустив `npm run build`.
/*=============== 4.Hello World ===================================*/
import React from 'react'; //подключаем зависимости главнй модуль react
import ReactDom from 'react-dom'; //подключаем виртуальный DOM react

const element = <h1>Hello World</h1>; //константа преобразуется в объект
ReactDom.render(element, document.getElementById('root')); //используя виртуальный dom преобразуем объект в html, воторым параметром указываем контейнер
/*=============== 5.Custom Configs =================================*/
//package.json - это файл с найстройками проекта, где хранится зависимы модули, а так же настройка вызова и т.д.
//"scripts": {...} - тут прописываются команды для вызова из консоли
//"dependencies": {...} - зависимости, тут хранятся модули и их версии, которые используются в проекте
//https://stackoverflow.com/questions/48854585/error-with-run-npm-run-eject-error-remove-untracked-files-stash-or-commit-a
//npm run eject
/*=============== 6.Full-stack Architecture =================================*/
//Front-end - Client | Back-end - Server <--> HTTP
//Backend - C#/ASP.NET | JavaScript/Node + Express
//Firebase -service provider google
/*=============== 7.Course Structure =================================*/
//JavaScripts
//Basics JavaScript - https://coursehunters.net/course/osnovy-javascript-dlya-nachinayushchih
//OOP JavaScript - https://coursehunters.net/course/obektno-orientirovannoe-programmirovanie-v-javascript
//Components
//Tables
//Forms
//Routing (маршрутизация)
//HTTP Services
//Auth
//Deployment (развертывание)
/*=============== 8.Introduction (Вступление) ==============================*/
//Let/Const
//Object
//this
//Arrow Funcs
//Destructuring (деструктурирующие)
//Spread (распространение)
//Classes
//Modules
/*=============== 9.Let vs Var vs Const ==============================*/
//var -> function
//let -> block
//const -> block
function sayHello() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log(i);
}

sayHello();
/*=============== 10.Objects ==============================*/
const person = {
    name: 'Mosh',
    walk: function() {},
    talk() {}
};

person.talk();
person.name = '';
const targetMember = 'name';
// person['name'] = 'John';
person[targetMember] = 'John';
/*=============== 11.The this Keyword ==============================*/
const person = {
    name: 'Mosh',
    walk() {
        console.log(this);
    }
};

person.walk();

const walk = person.walk;
console.log(walk);
walk(); //undefined
/*=============== 12.Binding this ==============================*/
const person = {
    name: 'Mosh',
    walk() {
        console.log(this);
    }
};

person.walk();

const walk = person.walk.bind(person);
walk();
/*=============== 13.Arrow Functions ==============================*/
const square =  function(number) {
    return number * number;
}
const square =  number => number * number;
console.log(square(5));

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false }
];
const activeJobs = jobs.filter(function(job) {
    return job.isActive;
});
const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs);
/*=============== 14.Arrow Functions and this ==============================*/
const person = {
    talk() {
        console.log('this', this);
    }
};

person.talk(); //объект person
///////////////////////////////
const person = {
    talk() {
        setTimeout(function(){
            console.log('this', this);
        }, 1000);
    }
};

person.talk(); //объект window
///////////////////////////////
const person = {
    talk() {
        var self = this;
        setTimeout(function(){
            console.log('self', self);
        }, 1000);
    }
};

person.talk(); //объект person
//////////////////////////////
const person = {
    talk() {
        setTimeout(() => {
            console.log('this', this);
        }, 1000);
    }
};

person.talk(); //объект person
/*=============== 15.Array.map Method ==============================*/
const colors = ['red', 'green', 'blue'];
const items = colors.map(function(color) {
    return '<li>' + color + '</li>';
});
const items = colors.map(color => '<li>' + color + '</li>');
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);
/*=============== 16.Object Destructuring ==============================*/
const address = {
    street: '',
    city: '',
    country: ''
};

const street = address.street;
const city = address.city;
const country = address.country;

const {street, city, country} = address;
const {street: st} = address;
/*=============== 17.Spread Operator (оператор распространения) ==================*/
const first = [1,2,3];
const second = [4,5,6];

const combined = first.concat(second);
const combined = [...first, 'a', ...second, 'b'];

const clone = [...first];
console.log(clone);
///////////////////////////
const first = { name: 'Mosh' };
const second = { job: 'Instructor' };

const combined = {...first, ...second, location: 'Australia'};
console.log(combined);

const clone = {...first};
/*=============== 18.Classes ==================*/
const person = {
    name: 'Maxim',
    walk() {
        console.log('walk');
    }
};

const person2 = {
    name: 'Maxim',
    walk() {
        console.log('walk');
    }
};
///////////////////////////
class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walk');
    }
}
//////////////////////////
class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walk');
    }
}

const person = new Person('Maxim');
/*=============== 19.Inheritance (наследование) ==================*/
class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walk');
    }
}

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log('teach');
    }
}

const teacher = new Teacher('Maxim', 'MSc');
/*=============== 20.Modules ==================*/
//person.js
export class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walk');
    }
}
//teacher.js
import { Person } from './person';
export class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log('teach');
    }
}
//index.js
import { Teacher } from './teacher';

const teacher = new Teacher('Maxim', 'MSc');
teacher.teach(); //teach
/*=============== 21.Named and Default Exports (Именованные и экспорт по умолчанию) ==================*/
//teacher.js
import { Person } from './person';

export function promote() {}

export default class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log('teach');
    }
}
//index.js
import Teacher, { promote } from './teacher';
// import React, { Component } from 'react';

//Default -> import ... from '';
//Named -> import {...} from '';

const teacher = new Teacher('Maxim', 'MSc');
teacher.teach();
/*=============== 22.Introduction (Вступление) ==================*/
//Components (Компоненты)
/*=============== 23.Setting Up the Project (Настройка проекта) ==================*/
//create-react-app counter-app (команда на создание проекта - имя проекта)
//cd counter-app (переходим в директорию проекта)
//npm start (запускаем)
//npm i bootstrap@4.1.1 (устанавливаем модель boostrap)

