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
//src/index.js -> import "bootstrap/dist/css/bootstrap.css";
/*=============== 24.Your first React Component ==================*/
//components/counter.jsx
//JSX – это препроцессор, который добавляет синтаксис XML к JavaScript. Вы можете использовать React без JSX, но JSX делает React более элегантным.
import React, { Component } from 'react';
class Counter extends Component {
    render() {
        // React.createElement()
        return <h1>Hello World</h1>
    }
}

export default Counter;
//index.js
import Counter from './components/counter';
ReactDOM.render(<Counter />, document.getElementById('root'));
/*=============== 25.Specifying Children (Указание детей) ==================*/
//counter.jsx
import React, {Component} from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <button>Increment</button>
            </div>
        );
    }
}

export default Counter;
/////////////////////////
import React, {Component} from 'react';

class Counter extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hello World</h1>
                <button>Increment</button>
            </React.Fragment>
        );
    }
}

export default Counter;
/*=============== 26.Embedding Expressons (Встраивание экспрессонов) ==================*/
//counter.jsx
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 1
        // address: {
        //     street: ''
        // }
    };
    render() {
        return (
            <div>
                <span>{this.state.count}</span>
                <button>Increment</button>
            </div>
        );
    }
}

export default Counter;
//////////////////////////
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
        // address: {
        //     street: ''
        // }
    };
    render() {
        return (
            <div>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </div>
        );
    }
    formatCount() {
        const { count } = this.state;
        // return this.state.count === 0 ? 'Zero' : this.state.count;
        // return count === 0 ? 'Zero' : count;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}

export default Counter;
/*=============== 27.Setting Attributes ==================*/
//counter.jsx
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200'
    };
    render() {
        return (
            <div>
                <img src={this.state.imageUrl} alt=""/>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </div>
        );
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}

export default Counter;
///////////////////////////////
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    styles = {
        fontSize: 50,
        fontWeight: 'bold',
    };
    render() {
        return (
            <div>
                <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
//////////////////////////////
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    render() {
        return (
            <div>
                <span style={{ fontSize: 30,fontWeight: 'bold'}} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
/*=============== 28.Rendering Classes Dynamically (Динамическое рендеринг классов) ==================*/
//counter.jsx
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    render() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return (
            <div>
                <span className={classes}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
/////////////////////////
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }
}

export default Counter;
/*=============== 29.Rendering Lists (Списки рендеринга) ==================*/
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    { this.state.tags.map( tag => <li>{ tag }</li>) }
                </ul>
            </div>
        );
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }
}

export default Counter;
/*=============== 30.Conditional Rendering (Условный рендеринг) ==================*/
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{ this.state.tags.map( tag => <li key={tag}>{ tag }</li>) }</ul>;
    }
    render() {
        return (
            <div>
                {this.renderTags()}
            </div>
        );
    }
}

export default Counter;
////////////////////////////
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{ this.state.tags.map( tag => <li key={tag}>{ tag }</li>) }</ul>;
    }
    render() {
        return (
            <div>
                {this.state.tags.length === 0 && 'Please create a new tag!'}
                {this.renderTags()}
            </div>
        );
    }
}

export default Counter;
/*=============== 31.Handling Events (Обработка событий) ==================*/
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        let { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
    handleIncrement() {
        console.log('Increment Clicked', this.state.count); //undefined
    }
}

export default Counter;
/*=============== 32.Binding Event Handlers (Обязательные обработчики событий) ==================*/
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 1
    };
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        let { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    handleIncrement() {
        console.log('Increment Clicked', this.state.count); //1
        //obj.method();
        //function();
    }
}

export default Counter;
///////////////////////////
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 1
    };
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        let { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    handleIncrement = () => {
        console.log('Increment Clicked', this.state.count);
        //obj.method();
        //function();
    }
}

export default Counter;
/*=============== 33.Updating the State (Объявление состояния) ==================*/
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 1
    };
    handleIncrement = () => {
        // this.state.count++;
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        let { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
/*=============== 34.What Happens When State Changes (Что происходит, когда меняется состояние) ==================*/
//VIRTUAL DOM (Виртуальный DOM)
//New Tree (Новое дерево) | Old Tree (Старое дерево)
//div -> span | button -- div -> span | button
/*=============== 35.Passing Event Arguments (Аргументы прохождения событий) ==================*/
//counter.jsx
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 1
    };
    handleIncrement = (product) => {
        console.log(product);
        this.setState({ count: this.state.count + 1 });
    }
    doHandleIncrement = () => {
        this.handleIncrement({ id: 1});
    }
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.doHandleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        let { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
////////////////////////
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 1
    };
    handleIncrement = (product) => {
        console.log(product);
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({ id: 1})} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        let { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
/*=============== 36.Setting Up the Vidly Project (Настройка проекта Vidly) ==================*/
//create-react-app vidly
//npm i bootstrap font-awesome
//src/index.js
//import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/css/font-awesome.css';
/*=============== 37.Exercises (Упражнение) ==================*/
/*=============== 38.Building the Movies Component (Компонент «Фильмы») ==================*/
//App.js
import React, { Component } from 'react';
import Movies from './components/movies';
import './App.css';

class App extends Component {
    render() {
        return (
            <main className="container">
                <Movies/>
            </main>
        );
    }
}

export default App;
//movies.jsx
import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    };
    render() {
        return <table className="table">
            <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
            </tr>
            </thead>
            <tbody>
            { this.state.movies.map(movie => (
                <tr>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                </tr>
            ))}
            </tbody>
        </table>;
    }
}

export default Movies;
/*=============== 39.Deleting a Movie (Удаление фильмов) ==================*/
//movies.jsx
import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    };
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies: movies});
    };
    render() {
        return <table className="table">
            <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            { this.state.movies.map(movie => (
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
            ))}
            </tbody>
        </table>;
    }
}

export default Movies;
/*=============== 40.Conditional Rendering (Условный рендеринг) ==================*/
//movies.jsx
import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    };
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    render() {

        if(this.state.movies.length === 0)
            return <p>There are no movies the database.</p>;

        return (
            <React.Fragment>
                <p>Showing {this.state.movies.length} movies in the database.</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Movies;
/////////////////////
import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    };
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    render() {
        const { length: count } = this.state.movies;

        if(count === 0)
            return <p>There are no movies the database.</p>;

        return (
            <React.Fragment>
                <p>Showing {this.state.movies.length} movies in the database.</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Movies;
/*=============== 41.Summary (Резюме) ==================*/
//JSX
//Rendering Lists (Списки рендеринга)
//Conditional Rendering (Условный рендеринг)
//Handling Events (Обработка событий)
//Updating the State (Обновление состояния)
/*=============== 42.Introduction (Вступление) ==================*/
//Composing Componennts (Составление компонентов)
//Pass Data (Передать данные)
//Raise and Handle Events (Поднимать и обрабатывать события)
//Multiple Components in Sync (Синхронизация нескольких компонентов)
//Functional Components (Функциональные компоненты)
//Lifecycle Hooks (Крючки жизненного цикла)
/*=============== 43.Composing Componennts (Составление компонентов) ==================*/
//Components (Компоненты)
//Counters (Счетчики)
//Counter (Счетчик)
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import Counters from './components/counters';

ReactDOM.render(<Counters />, document.getElementById('root'));

serviceWorker.unregister();
//counters.jsx
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {}
    render() {
        return (
            <div>
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter />
            </div>
        );
    }
}

export default Counters;
//counters.jsx
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };
    render() {
        return (
            <div>
                { this.state.counters.map(counter => <Counter key={counter.id} />)}
            </div>
        );
    }
}

export default Counters;
/*=============== 44.Passing Data to Components (Передача данных в компоненты) ==================*/
//counters.jsx
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };
    render() {
        return (
            <div>
                { this.state.counters.map(counter =>
                    <Counter key={counter.id} value={counter.value} selected={true} />)}
            </div>
        );
    }
}

export default Counters;
//counter.jsx
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    handleIncrement = (product) => {
        console.log(product);
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        console.log('props', this.props);
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({ id: 1})} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        let { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
//conuter.jsx
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: this.props.value
    };
    handleIncrement = (product) => {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({ id: 1})} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        let { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
////////////////
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };
    handleIncrement = (product) => {
        this.setState({ value: this.state.value + 1 });
    }
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({ id: 1})} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        let { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
/*=============== 45.Passing Children (Проходящие дети) ==================*/
//counters.jsx
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };
    render() {
        return (
            <div>
                { this.state.counters.map(counter =>
                    <Counter key={counter.id} value={counter.value}>
                        <h4>Title</h4>
                    </Counter>
                )}
            </div>
        );
    }
}

export default Counters;
//counter.jsx
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };
    handleIncrement = (product) => {
        this.setState({ value: this.state.value + 1 });
    }
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({ id: 1})} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        let { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
//counters.jsx
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };
    render() {
        return (
            <div>
                { this.state.counters.map(counter =>
                    <Counter key={counter.id} value={counter.value}>
                        <h4>Counter #{counter.id}</h4>
                    </Counter>
                )}
            </div>
        );
    }
}

export default Counters;
/*=============== 46.Debugging React Apps (Отладка приложений React) ==================*/
//install React Developer Tools
//$r | $r.render() | $0.click()
/*=============== 47.Props vs State (Реквизит против состояния) ==================*/
// this.props.value = 0; (Будет ошибка)
/*=============== 48.Raising and Handling Events (Повышение и обработка событий) ==================*/
//The component that owns a piece of the state, should be the one modifying it. (Компонент, которому принадлежит кусок состояния, должен быть тем, кто его модифицирует.)
//Counter -> (onDelete) -> Counters (handleDelete())
//counters.jsx
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };
    handleDelete = () => {
        console.log('Event Handler Called');
    };
    render() {
        return (
            <div>
                { this.state.counters.map(counter =>
                    <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id} />
                )}
            </div>
        );
    }
}

export default Counters;
//counter.jsx
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };
    handleIncrement = (product) => {
        // this.props.value = 0;
        this.setState({ value: this.state.value + 1 });
    };
    render() {
        console.log(this.props);
        return (
            <div>
                <h4>{this.props.value}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({ id: 1})} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        let { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
/*=============== 49.Updating the State (Обнавления состояния) ==================*/
//counter.jsx
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };
    handleIncrement = (product) => {
        // this.props.value = 0;
        this.setState({ value: this.state.value + 1 });
    };
    render() {
        console.log(this.props);
        return (
            <div>
                <h4>{this.props.value}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({ id: 1})} className="btn btn-secondary btn-sm">Increment</button>
                <button
                    onClick={() => this.props.onDelete(this.props.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        let { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
//counters.jsx
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };
    handleDelete = (counterId) => {
        console.log('Event Handler Called', counterId);
    };
    render() {
        return (
            <div>
                { this.state.counters.map(counter =>
                    <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id} />
                )}
            </div>
        );
    }
}

export default Counters;
//counters.jsx
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({ counters });
    };
    render() {
        return (
            <div>
                { this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        value={counter.value}
                        counter={counter}
                    />
                )}
            </div>
        );
    }
}

export default Counters;
//counter.jsx
import React, {Component} from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value
    };
    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    };
    render() {
        return (
            <div>
                <h4>{this.props.value}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({ id: 1})} className="btn btn-secondary btn-sm">Increment</button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        let { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
/*=============== 50.Single Source of Truth (Единый Источник Истины) ==================*/
//counters.jsx
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({ counters });
    };
    render() {
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                { this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        value={counter.value}
                        counter={counter}
                    />
                )}
            </div>
        );
    }
}

export default Counters;
//Counters (counters[]) -> Counter
/*=============== 51.Removing the Local State (Удаление местного состояния) ==================*/
//[] -> (Data) <--> (Events) <- Controlled Component
//counters.jsx
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({ counters });
    };
    render() {
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                { this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        counter={counter}
                    />
                )}
            </div>
        );
    }
}

export default Counters;
//counter.jsx
import React, {Component} from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value
    // };
    // handleIncrement = () => {
    //     this.setState({ value: this.state.value + 1 });
    // };
    render() {
        return (
            <div>
                <h4>{this.props.value}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    // onClick={ () => this.handleIncrement({ id: 1})}
                    onClick={ () => this.props.onIncrement(this.props.counter) }
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        // classes += this.state.value === 0 ? "warning" : "primary";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        // let { value } = this.state;
        let { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
/*=============== 52.Multiple Components in Sync (Синхронизация нескольких компонентов) ==================*/
//Components (Компоненты)
//App
//NavBar | Counters (counters[]) -> (props) Counter
//App (counters[])
//NavBar | Counters (counters[]) -> (props) Counter
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
//App.js
import React from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <main className="container">
                <Counters />
            </main>
        </React.Fragment>
    );
}

export default App;
//navbar.jsx
import React, { Component } from 'react';

class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
            </nav>
        );
    }
}

export default NavBar;
/*=============== 53.Lifting the State Up (Поднимая состояние) ==================*/
//App.js
import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({ counters });
    };
    render() {
        return (
            <React.Fragment>
                <NavBar
                    totalCounters={this.state.counters.filter(c => c.value > 0).length}
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
//counters.jsx
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                { this.props.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        counter={counter}
                    />
                )}
            </div>
        );
    }
}

export default Counters;
//navbar.jsx
import React, { Component } from 'react';

class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar
                    <span className="badge badge-pill badge-secondary ml-2">{this.props.totalCounters}</span>
                </a>
            </nav>
        );
    }
}

export default NavBar;
/*=============== 54.Stateless Functional Components (Функциональные компоненты без состояния) ==================*/
//navbar.jsx
import React, { Component } from 'react';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary ml-2">
                        {props.totalCounters}
                    </span>
            </a>
        </nav>
    );
};

export default NavBar;
/*=============== 55.Destructuring Arguments (Разрушительные аргументы) ==================*/
//navbar.jsx
import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary ml-2">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};

export default NavBar;
//counters.jsx
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const { onReset, counters, onDelete, onIncrement } = this.props;
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                { counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                    />
                )}
            </div>
        );
    }
}

export default Counters;
/*=============== 56.Lifecycle Hooks (Крючки жизненного цикла) ==================*/
//Mount (Гора, крепление) -> Constructor (Конструктор) | render (оказывать) | componentDidMount (компонент сделал крепление)
//Update (Обнавить) -> render | componentDidUpdate
//Unmount (Размонтируйте) -> componentWillUnmount (Компонент будет размонтирован)
/*=============== 57.Mounting Phase (Фаза монтажа) ==================*/
// App - Constructor {}
// App - Rendered
// NavBar - Rendered
// Counters Rendered
// Counter - Rendered 4
// App - Mounted
/*=============== 58.Updating Phase (Фаза обнавления) ==================*/
//counter.jsx
import React, {Component} from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState){
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            //Ajax call and get new data from the server (Ajax позвони и получи новые данные с сервера)
        }
    }
    render() {
        console.log('Counter - Rendered');
        return (
            <div>
                <h4>{this.props.value}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={ () => this.props.onIncrement(this.props.counter) }
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        let { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
//App - Rendered
// NavBar - Rendered
// Counters Rendered
// Counter - Rendered
// prevProps {onDelete: ƒ, onIncrement: ƒ, counter: {…}}
// prevState null
// prevProps {onDelete: ƒ, onIncrement: ƒ, counter: {…}}
// prevState null
// prevProps {onDelete: ƒ, onIncrement: ƒ, counter: {…}}
// prevState null
// prevProps {onDelete: ƒ, onIncrement: ƒ, counter: {…}}
// prevState null
/*=============== 59.Unmounthing Phase (Фаза размонтирования) ==================*/
// App - Rendered
// NavBar - Rendered
// Counters Rendered
// Counter - Rendered
// Counter - Unmount
// prevProps {onDelete: ƒ, onIncrement: ƒ, counter: {…}}
// prevState null
// prevProps {onDelete: ƒ, onIncrement: ƒ, counter: {…}}
// prevState null
// prevProps {onDelete: ƒ, onIncrement: ƒ, counter: {…}}
// prevState null
/*=============== 60.Exercise - Decrement Button (Упражнение - кнопка декремента) ==================*/
//Zero + - X
/*=============== 61.Solution - Decrement Button (Решение - Кнопка уменьшения) ==================*/
//counter.jsx
import React, {Component} from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState){
        // console.log('Counter - Updated');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            //Ajax call and get new data from the server (Ajax позвони и получи новые данные с сервера)

        }
    }
    componentWillUnmount() {
        console.log('Counter - Unmount');
    }
    render() {
        console.log('Counter - Rendered');
        return (
            <div>
                <h4>{this.props.value}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    // onClick={ () => this.handleIncrement({ id: 1})}
                    onClick={ () => this.props.onIncrement(this.props.counter) }
                    className="btn btn-secondary btn-sm mr-2"
                >
                    +
                </button>
                <button
                    onClick={ () => this.props.onDecrement(this.props.counter) }
                    className="btn btn-secondary btn-sm"
                >
                    -
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        // classes += this.state.value === 0 ? "warning" : "primary";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        // let { value } = this.state;
        let { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
//counters.jsx
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        console.log('Counters Rendered');
        const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                { counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={counter}
                    />
                )}
            </div>
        );
    }
}

export default Counters;
//App.js
import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };
    constructor(props) {
        super(props);
        console.log('App - Constructor', this.props);
        // this.state = this.props.something;
    }
    componentDidMount() {
        //Ajax call
        // this.setState({ movies })
        console.log('App - Mounted');
    }
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };
    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
    }
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({ counters });
    };
    render() {
        console.log('App - Rendered');
        return (
            <React.Fragment>
                <NavBar
                    totalCounters={this.state.counters.filter(c => c.value > 0).length}
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
/////////////////////////////
//counter.jsx
import React, {Component} from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState){
        // console.log('Counter - Updated');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            //Ajax call and get new data from the server (Ajax позвони и получи новые данные с сервера)

        }
    }
    componentWillUnmount() {
        console.log('Counter - Unmount');
    }
    render() {
        console.log('Counter - Rendered');
        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button
                        onClick={ () => this.props.onIncrement(this.props.counter) }
                        className="btn btn-secondary btn-sm"
                    >
                        +
                    </button>
                    <button
                        onClick={ () => this.props.onDecrement(this.props.counter) }
                        className="btn btn-secondary btn-sm m-2"
                        disabled={this.props.counter.value === 0}
                    >
                        -
                    </button>
                    <button
                        onClick={() => this.props.onDelete(this.props.counter.id)}
                        className="btn btn-danger btn-sm"
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        // classes += this.state.value === 0 ? "warning" : "primary";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        // let { value } = this.state;
        let { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
/*=============== 62.Exercise - Like Component (Упражнение - как компонент) ==================*/
/*=============== 63.Solution - Like Component (Решение - как компонент) ==================*/
//movies.jsx
import React, { Component } from 'react';
import Like from './common/like';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    };
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    render() {
        const { length: count } = this.state.movies;

        if(count === 0)
            return <p>There are no movies the database.</p>;

        return (
            <React.Fragment>
                <p>Showing {this.state.movies.length} movies in the database.</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th />
                        <th />
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like liked={true} />
                            </td>
                            <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Movies;
//like.jsx
import React, {Component} from 'react';
//Input: liked: boolean
//Output: onClick
class Like extends Component {
    render() {
        let classes = "fa fa-heart";
        if(!this.props.liked) classes += "-o";
        return <i className={classes}></i>;
    }
}

export default Like;
//movies.jsx
import React, { Component } from 'react';
import Like from './common/like';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    };
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    handleLike = () => {
        console.log('Like Clicked');
    };
    render() {
        const { length: count } = this.state.movies;

        if(count === 0)
            return <p>There are no movies the database.</p>;

        return (
            <React.Fragment>
                <p>Showing {this.state.movies.length} movies in the database.</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th />
                        <th />
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like
                                    liked={movie.liked}
                                    onClick={this.handleLike}
                                />
                            </td>
                            <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Movies;
//like.jsx
import React, {Component} from 'react';
//Input: liked: boolean
//Output: onClick
class Like extends Component {
    render() {
        let classes = "fa fa-heart";
        if(!this.props.liked) classes += "-o";
        return <i
            onClick={this.props.onClick}
            style={{cursor: "pointer"}}
            className={classes}
        />;
    }
}

export default Like;
//movies.jsx
import React, { Component } from 'react';
import Like from './common/like';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    };
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    handleLike = movie => {
        const movies = [ ...this.state.movies ];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    render() {
        const { length: count } = this.state.movies;

        if(count === 0)
            return <p>There are no movies the database.</p>;

        return (
            <React.Fragment>
                <p>Showing {this.state.movies.length} movies in the database.</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th />
                        <th />
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like
                                    liked={movie.liked}
                                    onClick={() => this.handleLike(movie)}
                                />
                            </td>
                            <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Movies;
//like.jsx
import React from 'react';

const Like = props => {
    let classes = "fa fa-heart";
    if(props.liked) classes += "-o";
    return <i
        onClick={props.onClick}
        style={{cursor: "pointer"}}
        className={classes}
    />;
};

export default Like;
/*=============== 64.Summary (Резюме) ==================*/
//Props (Реквизит)
//Raising and Handling Events (Повышение и обработка событий)
//Lifting the State (Снятие состояния)
//Functional Components (Функциональные компоненты)
//Lifecycle Hooks (Крючки жизненного цикла)
/*=============== 65.Introduction (Вступление) ==================*/
//Pagination, Filtering and Sorting (Нумерация страниц, фильтрация и сортировка)
/*=============== 66.Exercise - Pagination Component (Упражнение - Компонент пагинации) ==================*/
/*=============== 67.Pagination - Component Interface (Пагинация - интерфейс компонентов) ==================*/
//pagination.jsx
import React, {Component} from 'react';

const Pagination = props => {
    return null;
};

export default Pagination;
//movies.jsx
import React, { Component } from 'react';
import Like from './common/like';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4
    };
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    handleLike = movie => {
        const movies = [ ...this.state.movies ];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    handlePageChange = page => {
        console.log(page);
    };
    render() {
        const { length: count } = this.state.movies;

        if(count === 0)
            return <p>There are no movies the database.</p>;

        return (
            <React.Fragment>
                <p>Showing {this.state.movies.length} movies in the database.</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th />
                        <th />
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like
                                    liked={movie.liked}
                                    onClick={() => this.handleLike(movie)}
                                />
                            </td>
                            <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Pagination
                    itemsCount={count}
                    pageSize={this.state.pageSize}
                    onPageChange={this.handlePageChange}
                />
            </React.Fragment>
        );
    }
}

export default Movies;
/*=============== 68.Pagination - Displaying Pages (Нумерация страниц - Отображение страниц) ==================*/
//npm i lodash@4.17.10 (устанавливаем библиотеку утилит JavaScrip)
//https://lodash.com/
//pagination.jsx
import React, {Component} from 'react';
import _ from 'lodash';

const Pagination = props => {
    // [1,2,3].map()
    const { itemsCount, pageSize } = props;
    const pageCount = itemsCount / pageSize;
    const pages = _.range(1, pageCount + 1);
    return <nav>
        <ul className="pagination">
            { pages.map(page => (
                <li key={page} className="page-item">
                    <a className="page-link" href="#">{page}</a>
                </li>
            ))}
        </ul>
    </nav>;
};

export default Pagination;
//pagination.jsx
import React, {Component} from 'react';
import _ from 'lodash';

const Pagination = props => {
    const { itemsCount, pageSize } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return <nav>
        <ul className="pagination">
            { pages.map(page => (
                <li key={page} className="page-item">
                    <a className="page-link" href="#">{page}</a>
                </li>
            ))}
        </ul>
    </nav>;
};

export default Pagination;
/*=============== 69.Pagination - Handling Page Changes (Пагинация - обработка изменений страницы) ==================*/
//pagination.jsx
import React, {Component} from 'react';
import _ from 'lodash';

const Pagination = props => {
    const { itemsCount, pageSize, onPageChange } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return <nav>
        <ul className="pagination">
            { pages.map(page => (
                <li key={page} className="page-item active">
                    <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                </li>
            ))}
        </ul>
    </nav>;
};

export default Pagination;
//movies.jsx
import React, { Component } from 'react';
import Like from './common/like';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    };
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    handleLike = movie => {
        const movies = [ ...this.state.movies ];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage } = this.state;

        if(count === 0)
            return <p>There are no movies the database.</p>;

        return (
            <React.Fragment>
                <p>Showing {this.state.movies.length} movies in the database.</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th />
                        <th />
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like
                                    liked={movie.liked}
                                    onClick={() => this.handleLike(movie)}
                                />
                            </td>
                            <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    onPageChange={this.handlePageChange}
                    currentPage={currentPage}
                />
            </React.Fragment>
        );
    }
}

export default Movies;
//pagination.jsx
import React, {Component} from 'react';
import _ from 'lodash';

const Pagination = props => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;
    console.log(currentPage);
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return <nav>
        <ul className="pagination">
            { pages.map(page => (
                <li key={page} className={ page === currentPage ? "page-item active" : "page-item"}>
                    <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                </li>
            ))}
        </ul>
    </nav>;
};

export default Pagination;
/*=============== 70.Pagination - Paginating Data (Пагинация данных) ==================*/
//paginate.js
import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    // _.slice(items, startIndex);
    // _.take()
    return _(items).slice(startIndex).take(pageSize).value();
}
//movies.jsx
import React, { Component } from 'react';
import Like from './common/like';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { paginate } from "../utils/paginate";

class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    };
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    handleLike = movie => {
        const movies = [ ...this.state.movies ];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;

        if(count === 0)
            return <p>There are no movies the database.</p>;
        const movies = paginate(allMovies, currentPage, pageSize);
        console.log(movies);
        return (
            <React.Fragment>
                <p>Showing {this.state.movies.length} movies in the database.</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th />
                        <th />
                    </tr>
                    </thead>
                    <tbody>
                    { movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like
                                    liked={movie.liked}
                                    onClick={() => this.handleLike(movie)}
                                />
                            </td>
                            <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    onPageChange={this.handlePageChange}
                    currentPage={currentPage}
                />
            </React.Fragment>
        );
    }
}

export default Movies;
/*=============== 71.Pagination - Type Checking with Prop Types (Проверка типов с типами проп) ==================*/
//npm i prop-types@15.6.2
//pagination.jsx
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = props => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;
    console.log(currentPage);
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return <nav>
        <ul className="pagination">
            { pages.map(page => (
                <li key={page} className={ page === currentPage ? "page-item active" : "page-item"}>
                    <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                </li>
            ))}
        </ul>
    </nav>;
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
/*=============== 72.Exercise - ListGroup Component (Упражнение - Компонент ListGroup) ==================*/
/*=============== 73.Filtering - Component Interface (Фильтрация - интерфейс компонентов) ==================*/
//listGroup.jsx
import React from 'react';

const ListGroup = () => {
    return null;
}

export default ListGroup;
//movies.jsx
import React, { Component } from 'react';
import Like from './common/like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from "../utils/paginate";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1
    };
    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() });
    }
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    handleLike = movie => {
        const movies = [ ...this.state.movies ];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    handleGenreSelect = genre => {
        console.log(genre);
    };
    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;

        if(count === 0)
            return <p>There are no movies the database.</p>;
        const movies = paginate(allMovies, currentPage, pageSize);
        return (
            <div className="row">
                <div className="col-2">
                    <ListGroup
                        items={this.state.genres}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {this.state.movies.length} movies in the database.</p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th />
                            <th />
                        </tr>
                        </thead>
                        <tbody>
                        { movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like
                                        liked={movie.liked}
                                        onClick={() => this.handleLike(movie)}
                                    />
                                </td>
                                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
/*=============== 74.Filtering - displaying items (Фильтрация - отображение элементов) ==================*/
//movies.jsx
import React, { Component } from 'react';
import Like from './common/like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from "../utils/paginate";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1
    };
    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() });
    }
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    handleLike = movie => {
        const movies = [ ...this.state.movies ];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    handleGenreSelect = genre => {
        console.log(genre);
    };
    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;
        if(count === 0)
            return <p>There are no movies the database.</p>;
        const movies = paginate(allMovies, currentPage, pageSize);
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        textProperty="name"
                        valueProperty="_id"
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {this.state.movies.length} movies in the database.</p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th />
                            <th />
                        </tr>
                        </thead>
                        <tbody>
                        { movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like
                                        liked={movie.liked}
                                        onClick={() => this.handleLike(movie)}
                                    />
                                </td>
                                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
//listGroup.jsx
import React from 'react';

const ListGroup = props => {
    const { items, textProperty, valueProperty } = props;
    return (
        <ul className="list-group">
            { items.map(item =>
                <li key={item[valueProperty]} className="list-group-item">
                    {item[textProperty]}
                </li>)
            }
        </ul>
    );
}

export default ListGroup;
/*=============== 75.Filtering - Default Props (Фильтрация - Реквизит по умолчанию) ==================*/
//listGroup.jsx
import React from 'react';

const ListGroup = props => {
    const { items, textProperty, valueProperty } = props;
    return (
        <ul className="list-group">
            { items.map(item =>
                <li key={item[valueProperty]} className="list-group-item">
                    {item[textProperty]}
                </li>)
            }
        </ul>
    );
};

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}

export default ListGroup;
/*=============== 76.Filtering - Handling Selection (Фильтрация - Выбор обработки) ==================*/
//movies.jsx
import React, { Component } from 'react';
import Like from './common/like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from "../utils/paginate";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1
    };
    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() });
    }
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    handleLike = movie => {
        const movies = [ ...this.state.movies ];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre });
    };
    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;
        if(count === 0)
            return <p>There are no movies the database.</p>;
        const movies = paginate(allMovies, currentPage, pageSize);
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {this.state.movies.length} movies in the database.</p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th />
                            <th />
                        </tr>
                        </thead>
                        <tbody>
                        { movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like
                                        liked={movie.liked}
                                        onClick={() => this.handleLike(movie)}
                                    />
                                </td>
                                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
//listGroup.jsx
import React from 'react';

const ListGroup = props => {
    const {
        items,
        textProperty,
        valueProperty,
        onItemSelect,
        selectedItem
    } = props;
    return (
        <ul className="list-group">
            { items.map(item =>
                <li
                    onClick={() => onItemSelect(item) }
                    key={item[valueProperty]}
                    className={ item === selectedItem ? "list-group-item active" : "list-group-item"}
                >
                    {item[textProperty]}
                </li>)
            }
        </ul>
    );
};

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}

export default ListGroup;
/*=============== 77.Filtering - Implementing Filtering (Фильтрация - Реализация фильтрации) ==================*/
//movies.jsx
import React, { Component } from 'react';
import Like from './common/like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from "../utils/paginate";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1
    };
    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() });
    }
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    handleLike = movie => {
        const movies = [ ...this.state.movies ];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre });
    };
    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, selectedGenre, movies: allMovies } = this.state;
        if(count === 0)
            return <p>There are no movies the database.</p>;
        const filtered = selectedGenre
            ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies;
        const movies = paginate(filtered, currentPage, pageSize);
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {filtered.length} movies in the database.</p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th />
                            <th />
                        </tr>
                        </thead>
                        <tbody>
                        { movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like
                                        liked={movie.liked}
                                        onClick={() => this.handleLike(movie)}
                                    />
                                </td>
                                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Pagination
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
/*=============== 78.Filtering - Adding All Genres (Фильтрация - Добавление всех жанров) ==================*/
//movies.jsx
import React, { Component } from 'react';
import Like from './common/like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from "../utils/paginate";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1
    };
    componentDidMount() {
        const genres = [{ name: 'All Genres'}, ...getGenres()]
        this.setState({ movies: getMovies(), genres });
    }
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    handleLike = movie => {
        const movies = [ ...this.state.movies ];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    };
    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, selectedGenre, movies: allMovies } = this.state;
        if(count === 0)
            return <p>There are no movies the database.</p>;
        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies;
        const movies = paginate(filtered, currentPage, pageSize);
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {filtered.length} movies in the database.</p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th />
                            <th />
                        </tr>
                        </thead>
                        <tbody>
                        { movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like
                                        liked={movie.liked}
                                        onClick={() => this.handleLike(movie)}
                                    />
                                </td>
                                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Pagination
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
/*=============== 79.Sorting - Extracting Movies Table (Сортировка - Извлечение таблицы фильмов) ==================*/
//moviesTable.jsx
import React from 'react';
import Like from './common/like';


const MoviesTable = props => {
    const { movies, onDelete, onLike } = props;
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
                <th />
            </tr>
            </thead>
            <tbody>
            { movies.map(movie => (
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                        <Like
                            liked={movie.liked}
                            onClick={() => onLike(movie)}
                        />
                    </td>
                    <td>
                        <button
                            onClick={() => onDelete(movie)}
                            className="btn btn-danger btn-sm"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default MoviesTable
//movies.jsx
import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from "../utils/paginate";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1
    };
    componentDidMount() {
        const genres = [{ name: 'All Genres'}, ...getGenres()]
        this.setState({ movies: getMovies(), genres });
    }
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    handleLike = movie => {
        const movies = [ ...this.state.movies ];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    };
    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, selectedGenre, movies: allMovies } = this.state;
        if(count === 0)
            return <p>There are no movies the database.</p>;
        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies;
        const movies = paginate(filtered, currentPage, pageSize);
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {filtered.length} movies in the database.</p>
                    <MoviesTable
                        movies={movies}
                        onLike={() => this.handleLike}
                        onDelete={() => this.handleDelete}
                    />
                    <Pagination
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
/*=============== 80.Sorting - Raising the Sort Event (Сортировка - Повышение события сортировки) ==================*/
//moviesTable.jsx
import React from 'react';
import Like from './common/like';


const MoviesTable = props => {
    const { movies, onDelete, onLike, onSort } = props;
    return (
        <table className="table">
            <thead>
            <tr>
                <th onClick={() => onSort('title')}>Title</th>
                <th onClick={() => onSort('genre.name')}>Genre</th>
                <th onClick={() => onSort('numberInStock')}>Stock</th>
                <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
                <th />
                <th />
            </tr>
            </thead>
            <tbody>
            { movies.map(movie => (
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                        <Like
                            liked={movie.liked}
                            onClick={() => onLike(movie)}
                        />
                    </td>
                    <td>
                        <button
                            onClick={() => onDelete(movie)}
                            className="btn btn-danger btn-sm"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default MoviesTable
//movies.jsx
import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from "../utils/paginate";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1
    };
    componentDidMount() {
        const genres = [{ _id: "", name: 'All Genres'}, ...getGenres()]
        this.setState({ movies: getMovies(), genres });
    }
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    handleLike = movie => {
        const movies = [ ...this.state.movies ];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    };
    handleSort = path => {
        console.log(path);
    };
    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, selectedGenre, movies: allMovies } = this.state;
        if(count === 0)
            return <p>There are no movies the database.</p>;
        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies;
        const movies = paginate(filtered, currentPage, pageSize);
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {filtered.length} movies in the database.</p>
                    <MoviesTable
                        movies={movies}
                        onLike={() => this.handleLike}
                        onDelete={() => this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
/*=============== 81.Sorting - Implementing Sorting (Сортировка - Внедрение сортировки) ==================*/
//movies.jsx
handleSort = path => {
    this.setState({ sortColumn: {path, order: 'asc'} });
};
//movies.jsx
import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from "../utils/paginate";
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: { path: 'title', order: 'asc' }
    };
    componentDidMount() {
        const genres = [{ _id: "", name: 'All Genres'}, ...getGenres()]
        this.setState({ movies: getMovies(), genres });
    }
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    handleLike = movie => {
        const movies = [ ...this.state.movies ];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    };
    handleSort = path => {
        const sortColumn = { ...this.state.sortColumn };
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.setState({ sortColumn });
    };
    render() {
        const { length: count } = this.state.movies;
        const {
            pageSize,
            currentPage,
            selectedGenre,
            movies: allMovies,
            sortColumn
        } = this.state;
        if(count === 0)
            return <p>There are no movies the database.</p>;
        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies;
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const movies = paginate(sorted, currentPage, pageSize);
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {filtered.length} movies in the database.</p>
                    <MoviesTable
                        movies={movies}
                        onLike={() => this.handleLike}
                        onDelete={() => this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
/*=============== 82.Sorting - Moving Responsibility (Сортировка - Перемещение ответственности) ==================*/
//moviesTable.jsx
import React, { Component } from 'react';
import Like from './common/like';

class MoviesTable extends Component {
    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    };
    render() {
        const { movies, onDelete, onLike } = this.props;
        return (
            <table className="table">
                <thead>
                <tr>
                    <th onClick={() => this.raiseSort('title')}>Title</th>
                    <th onClick={() => this.raiseSort('genre.name')}>Genre</th>
                    <th onClick={() => this.raiseSort('numberInStock')}>Stock</th>
                    <th onClick={() => this.raiseSort('dailyRentalRate')}>Rate</th>
                    <th />
                    <th />
                </tr>
                </thead>
                <tbody>
                { movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <Like
                                liked={movie.liked}
                                onClick={() => onLike(movie)}
                            />
                        </td>
                        <td>
                            <button
                                onClick={() => onDelete(movie)}
                                className="btn btn-danger btn-sm"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default MoviesTable
//movies.jsx
import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from "../utils/paginate";
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: { path: 'title', order: 'asc' }
    };
    componentDidMount() {
        const genres = [{ _id: "", name: 'All Genres'}, ...getGenres()]
        this.setState({ movies: getMovies(), genres });
    }
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    handleLike = movie => {
        const movies = [ ...this.state.movies ];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    };
    handleSort = sortColumn => {
        this.setState({ sortColumn });
    };
    render() {
        const { length: count } = this.state.movies;
        const {
            pageSize,
            currentPage,
            selectedGenre,
            movies: allMovies,
            sortColumn
        } = this.state;
        if(count === 0)
            return <p>There are no movies the database.</p>;
        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies;
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const movies = paginate(sorted, currentPage, pageSize);
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {filtered.length} movies in the database.</p>
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={() => this.handleLike}
                        onDelete={() => this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
/*=============== 83.Sorting - Extracting TableHeader (Сортировка - Извлечение заголовка таблицы) ==================*/
//tableHeader.jsx
import React, { Component } from 'react';

//columns: array
//sortColumn: object
//onSort: function

class TableHeader extends Component {
    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    };
    render() {
        return (
            <thead>
            <tr>
                { this.props.columns.map(column => (
                    <th
                        key={column.path || column.key}
                        onClick={() => this.raiseSort(column.path)}
                    >
                        {column.label}
                    </th>
                )) }
            </tr>
            </thead>
        );
    }
}

export default TableHeader;
//moviesTable.jsx
import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import Like from './common/like';

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        { key: 'like' },
        { key: 'delete' }
    ];
    render() {
        const { movies, onDelete, onLike, onSort, sortColumn } = this.props;
        return (
            <table className="table">
                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
                <tbody>
                { movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <Like
                                liked={movie.liked}
                                onClick={() => onLike(movie)}
                            />
                        </td>
                        <td>
                            <button
                                onClick={() => onDelete(movie)}
                                className="btn btn-danger btn-sm"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default MoviesTable
/*=============== 84.Sorting - Extracting TableBody (Сортировка - Извлечение тела таблицы) ==================*/
//tableBody.jsx
import React, { Component } from 'react';

class TableBody extends Component {
    render() {
        const { data, columns } = this.props;
        return (
            <tbody>
            {data.map(item =>
                <tr>
                    {columns.map(column => <td></td>)}
                </tr>
            )}
            </tbody>
        );
    }
}

export default TableBody;
//moviesTable.jsx
import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import Like from './common/like';

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        { key: 'like' },
        { key: 'delete' }
    ];
    render() {
        const { movies, onDelete, onLike, onSort, sortColumn } = this.props;
        return (
            <table className="table">
                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
                <TableBody
                    data={movies}
                />
                <tbody>
                { movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <Like
                                liked={movie.liked}
                                onClick={() => onLike(movie)}
                            />
                        </td>
                        <td>
                            <button
                                onClick={() => onDelete(movie)}
                                className="btn btn-danger btn-sm"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default MoviesTable
/*=============== 85.Sorting - Rendering Cell Content (Сортировка - Рендеринг содержимого ячеек) ==================*/
//tableBody.jsx
import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {
    renderCell = (item, column) => {
        if (column.content) return column.content(item)
        return _.get(item, column.path);
    };
    render() {
        const { data, columns } = this.props;
        return (
            <tbody>
            {data.map(item =>
                <tr>
                    {columns.map(column => <td>{this.renderCell(item, column)}</td>)}
                </tr>
            )}
            </tbody>
        );
    }
}

export default TableBody;
//moviesTable.jsx
import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
import Like from './common/like';

// const x = <like></like>; //React Element {}

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        {
            key: 'like',
            content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>
        },
        {
            key: 'delete',
            content: movie => (
                <button
                    onClick={() => this.props.onDelete(movie)}
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            )
        }
    ];
    render() {
        const { movies, onDelete, onLike, onSort, sortColumn } = this.props;
        return (
            <table className="table">
                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
                <TableBody
                    data={movies}
                    columns={this.columns}
                />
            </table>
        );
    }
}

export default MoviesTable
/*=============== 86.Sorting - Unique Keys - Final (Сортировка - Уникальные ключи - финал) ==================*/
//tableBody.jsx
// <tbody>
// {data.map(item =>
//     <tr key={item._id}>
//         {columns.map(column => <td key={item._id + (column.path || column.key)}>{this.renderCell(item, column)}</td>)}
//     </tr>
// )}
// </tbody>
//tableBody.jsx
import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {
    renderCell = (item, column) => {
        if (column.content) return column.content(item)
        return _.get(item, column.path);
    };
    createKey = (item, column) => {
        return item._id + (column.path || column.key);
    };
    render() {
        const { data, columns } = this.props;
        return (
            <tbody>
            {data.map(item =>
                <tr key={item._id}>
                    {columns.map(column => <td key={this.createKey(item, column)}>{this.renderCell(item, column)}</td>)}
                </tr>
            )}
            </tbody>
        );
    }
}

export default TableBody;
/*=============== 87.Sorting - Adding the Sort Icon (Сортировка - Добавление значка сортировки) ==================*/
//tableHeader.jsx
import React, { Component } from 'react';

//columns: array
//sortColumn: object
//onSort: function

class TableHeader extends Component {
    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    };
    renderSortIcon = column => {
        const { sortColumn } = this.props;
        if (column.path !== sortColumn.path) return null;
        if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>;
        return <i className="fa fa-sort-desc"></i>;
    };
    render() {
        return (
            <thead>
            <tr>
                { this.props.columns.map(column => (
                    <th
                        className="clickable"
                        key={column.path || column.key}
                        onClick={() => this.raiseSort(column.path)}
                    >
                        {column.label} {this.renderSortIcon(column)}
                    </th>
                )) }
            </tr>
            </thead>
        );
    }
}

export default TableHeader;
/*=============== 88.Sorting - Extracting Table (Сортировка - Извлечение таблицы) ==================*/
//table.jsx
import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = props => {
    const { columns, sortColumn, onSort, data } = props;
    return (
        <table className="table">
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />
            <TableBody
                data={data}
                columns={columns}
            />
        </table>
    );
}

export default Table
//moviesTable.jsx
import React, { Component } from 'react';
import Table from './common/table';
import Like from './common/like';

// const x = <like></like>; //React Element {}

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        {
            key: 'like',
            content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>
        },
        {
            key: 'delete',
            content: movie => (
                <button
                    onClick={() => this.props.onDelete(movie)}
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            )
        }
    ];
    render() {
        const { movies, onSort, sortColumn } = this.props;
        return (
            <Table
                columns={this.columns}
                data={movies}
                onSort={onSort}
                sortColumn={sortColumn}
            />
        );
    }
}

export default MoviesTable
/*=============== 89.Sorting - Extracting a Method (Сортировка - Извлечение метода) ==================*/
//movies.jsx
import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from "../utils/paginate";
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: { path: 'title', order: 'asc' }
    };
    componentDidMount() {
        const genres = [{ _id: "", name: 'All Genres'}, ...getGenres()]
        this.setState({ movies: getMovies(), genres });
    }
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    handleLike = movie => {
        console.log(movie);
        const movies = [ ...this.state.movies ];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    };
    handleSort = sortColumn => {
        this.setState({ sortColumn });
    };
    getPageData = () => {
        const {
            pageSize,
            currentPage,
            selectedGenre,
            movies: allMovies,
            sortColumn
        } = this.state;

        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies;
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const movies = paginate(sorted, currentPage, pageSize);
        return { totalCount: filtered.length, data: movies};
    }
    render() {
        const { length: count } = this.state.movies;
        const {
            pageSize,
            currentPage,
            sortColumn
        } = this.state;
        if(count === 0) return <p>There are no movies the database.</p>;
        const { totalCount, data: movies } = this.getPageData();
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {totalCount} movies in the database.</p>
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={() => this.handleLike}
                        onDelete={() => this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        itemsCount={totalCount}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
/*=============== 90.Destrucuring Arguments (Уничтожающие аргументы) ==================*/
//table.jsx
import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({ columns, sortColumn, onSort, data }) => {
    return (
        <table className="table">
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />
            <TableBody
                data={data}
                columns={columns}
            />
        </table>
    );
}

export default Table
/*=============== 91.Summary (Резюме) ==================*/
//Component Design (Компонентный дизайн)
//Component Interface (Компонентный интерфейс)
//Reusable Components (Многоразовые компоненты)
//Refacroting (Рефакторинг)
//Writing Clean Code (Написание чистого кода)
/*=============== 92.Introduction (Вступление) ==================*/
//Route Parameters (Параметры маршрута)
//Query String (Строка запроса)
//Redirect (переадресовывать)
//Not Found (404) Pages (Не найдено (404) Страницы)
//Nested Routing (Вложенная маршрутизация)
/*=============== 93.Setup (Настроить) ==================*/
//Auto Import - ES6, TS, JSX, TSX
/*=============== 94.Adding Routing (Добавление маршрутизации) ==================*/
//create-react-app router-app (команда для создания нового проекта)
//npm i react-router-dom (Привязки DOM для React Router)
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();
//App.js
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="content">
                    <Route path='/products' component={Products} />
                    <Route path='/posts' component={Posts} />
                    <Route path='/admin' component={Dashboard} />
                    <Route path='/' component={Home} />
                </div>
            </div>
        );
    }
}

export default App;
/*=============== 95.Switch (переключатель) ==================*/
//App.js
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="content">
                    <Switch>
                        <Route path='/products' component={Products} />
                        <Route path='/posts' component={Posts} />
                        <Route path='/admin' component={Dashboard} />
                        {/*<Route path='/' exact component={Home} />*/}
                        <Route path='/' component={Home} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
/*=============== 96.Link (ссылка) ==================*/
//navbar.jsx
import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/posts/2018/06">Posts</Link>
            </li>
            <li>
                <Link to="/admin">Admin</Link>
            </li>
        </ul>
    );
};

export default NavBar;
/*=============== 97.Route Props (Маршрут Реквизит) ==================*/
//https://reacttraining.com/react-router/web/guides/quick-start
/*=============== 98.Passing Props (Прохождение реквизита) ==================*/
//App.jsx
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="content">
                    <Switch>
                        <Route
                            path='/products'
                            render={(props) => <Products sortBy="newest" {...props} />}
                        />
                        <Route path='/posts' component={Posts} />
                        <Route path='/admin' component={Dashboard} />
                        {/*<Route path='/' exact component={Home} />*/}
                        <Route path='/' component={Home} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
/*=============== 99.Route Parameters (Параметры маршрута) ==================*/
//App.js
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="content">
                    <Switch>
                        <Route path="/products/:id" component={ProductDetails} />
                        <Route
                            path='/products'
                            render={(props) => <Products sortBy="newest" {...props} />}
                        />
                        <Route path='/posts/:year/:month' component={Posts} />
                        <Route path='/admin' component={Dashboard} />
                        {/*<Route path='/' exact component={Home} />*/}
                        <Route path='/' component={Home} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
//products.jsx
import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Products extends Component {
    state = {
        products: [
            { id: 1, name: "Product 1" },
            { id: 2, name: "Product 2" },
            { id: 3, name: "Product 3" }
        ]
    };

    render() {
        return (
            <div>
                <h1>Products</h1>
                <ul>
                    {this.state.products.map(product => (
                        <li key={product.id}>
                            <Link to={`/products/${product.id}`}>{product.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Products;
/*=============== 100.Optional Parameters (Необязательные параметры) ==================*/
//App.js
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="content">
                    <Switch>
                        <Route path="/products/:id" component={ProductDetails} />
                        <Route
                            path='/products'
                            render={(props) => <Products sortBy="newest" {...props} />}
                        />
                        <Route path='/posts/:year?/:month?' component={Posts} />
                        <Route path='/admin' component={Dashboard} />
                        {/*<Route path='/' exact component={Home} />*/}
                        <Route path='/' component={Home} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
//posts.jsx
import React from "react";

const Posts = ({ match }) => {
    return (
        <div>
            <h1>Posts</h1>
            Year: {match.params.year}, Month: {match.params.month}
        </div>
    );
};

export default Posts;
/*=============== 101.Query String Parameters (Параметры строки запроса) ==================*/
//npm i query-string@6.1.0
//posts.jsx
import React from "react";
import queryString from 'query-string';

const Posts = ({ match, location }) => {
    const result = queryString.parse(location.search);
    console.log(result);
    return (
        <div>
            <h1>Posts</h1>
            Year: {match.params.year}, Month: {match.params.month}
        </div>
    );
};

export default Posts;
/*=============== 102.Redirects (Перенаправление) ==================*/
//App.js
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="content">
                    <Switch>
                        <Route path="/products/:id" component={ProductDetails} />
                        <Route
                            path="/products"
                            render={props => <Products sortBy="newest" {...props} />}
                        />
                        <Route path="/posts/:year?/:month?" component={Posts} />
                        <Route path="/admin" component={Dashboard} />
                        <Redirect from="/messages" to="/posts" />
                        <Route path="/not-found" component={NotFound} />
                        <Route path="/" exact component={Home} />
                        <Redirect to="/not-found" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
/*=============== 103.Programmatic Navigation (Программная навигация) ==================*/
//productDetails.jsx
import React, { Component } from "react";

class ProductDetails extends Component {
    handleSave = () => {
        // Navigate to /products
        //   this.props.history.push('/products');
        this.props.history.replace("/products");
    };

    render() {
        return (
            <div>
                <h1>Product Details - {this.props.match.params.id}</h1>
                <button onClick={this.handleSave}>Save</button>
            </div>
        );
    }
}

export default ProductDetails;
/*=============== 104.Nested Routing (Вложенная маршрутизация) ==================*/
//dashboard.jsx
import React from "react";
import { Route } from 'react-router-dom';
import Users from './users';
import Posts from './posts';
import SideBar from "./sidebar";

const Dashboard = ({ match }) => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <SideBar />
            <Route path='/admin/users' component={Users}/>
            <Route path='/admin/posts' component={Posts}/>
        </div>
    );
};

export default Dashboard;
//sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <ul>
            <li>
                <Link to="/admin/posts">Post</Link>
            </li>
            <li>
                <Link to="/admin/users">Users</Link>
            </li>
        </ul>
    );
};

export default SideBar;
/*=============== 105.Exercises NavBar and Routing (Упражнения Навбар и Маршрутизация) ==================*/
/*=============== 106.Adding React Router (Добавление React Router) ==================*/
//npm i react-router-dom
//index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
//create files
//customers.jsx | movieForm.jsx | notFound.jsx | rentals.jsx
import React from 'react';

const Customers = () => {
    return <h1>Customers</h1>;
}

export default Customers;
/*=============== 107.Adding Routers (Добавление маршрутизаторов) ==================*/
//App.js
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route path="/movies" component={Movies} />
                    <Route path="/customers" component={Customers} />
                    <Route path="/rentals" component={Rentals} />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect from="/" exact to="movies" />
                    <Redirect to="/not-found" />
                </Switch>
            </main>
        );
    }
}

export default App;
/*=============== 108.Adding the NavBar (Добавление NavBar) ==================*/
//App.js
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <main className="container">
                    <Switch>
                        <Route path="/movies" component={Movies} />
                        <Route path="/customers" component={Customers} />
                        <Route path="/rentals" component={Rentals} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
//navbar.jsx
import React from "react";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Vidly
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/movies">
                            Movies
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/customers">
                            Customers
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/rentals">
                            Rentals
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
/*=============== 109.Linking to the MovieForm (Ссылка на форму фильма) ==================*/
//App.js
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <main className="container">
                    <Switch>
                        <Route path="/movies/:id" component={MovieForm}/>
                        <Route path="/movies" component={Movies} />
                        <Route path="/customers" component={Customers} />
                        <Route path="/rentals" component={Rentals} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
//movesTable.jsx
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Table from "./common/table";
import Like from "./common/like";

// const x = <like></like>; //React Element {}

class MoviesTable extends Component {
    columns = [
        {
            path: "title",
            label: "Title",
            content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        },
        { path: "genre.name", label: "Genre" },
        { path: "numberInStock", label: "Stock" },
        { path: "dailyRentalRate", label: "Rate" },
        {
            key: "like",
            content: movie => (
                <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
            )
        },
        {
            key: "delete",
            content: movie => (
                <button
                    onClick={() => this.props.onDelete(movie)}
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            )
        }
    ];
    render() {
        const { movies, onSort, sortColumn } = this.props;
        return (
            <Table
                columns={this.columns}
                data={movies}
                onSort={onSort}
                sortColumn={sortColumn}
            />
        );
    }
}

export default MoviesTable;
//movieForm.jsx
import React from "react";

const MovieForm = ({ match, history }) => {
    return (
        <div>
            <h1>MovieForm {match.params.id}</h1>
            <button
                className="btn btn-primary"
                onClick={() => history.push("/movies")}
            >
                Save
            </button>
        </div>
    );
};

export default MovieForm;
/*=============== 110.Summary (Резюме) ==================*/
//Route Parameters (Параметры маршрута)
//Query String (Строка запроса)
//Redirect (переадресовывать)
//Not Found (404) Pages (Не найдено (404) Страницы)
//Nested Routing (Вложенная маршрутизация)
/*=============== 111.Introduction (Вступление) ==================*/
//Forms (Формы)
//Let`s get started (Давайте начнем)
/*=============== 112.Building a Bootstrap Form (Создание формы начальной загрузки) ==================*/
//App.js
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <main className="container">
                    <Switch>
                        <Route path="/login" component={LoginForm}/>
                        <Route path="/movies/:id" component={MovieForm}/>
                        <Route path="/movies" component={Movies} />
                        <Route path="/customers" component={Customers} />
                        <Route path="/rentals" component={Rentals} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
//navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Vidly
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/movies">
                            Movies
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/customers">
                            Customers
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/rentals">
                            Rentals
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
//loginForm.jsx
import React, { Component } from "react";

class LoginForm extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="username">UserName</label>
                        <input id="username" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="text" className="form-control" />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
/*=============== 113.Handling Form submission (Форма обработки заявки) ==================*/
//loginForm.jsx
import React, { Component } from "react";

class LoginForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        //Call the server
        console.log('submitted');
    };
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">UserName</label>
                        <input id="username" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="text" className="form-control" />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
/*=============== 114.Refs ==================*/
import React, { Component } from "react";

class LoginForm extends Component {
    username = React.createRef();
    // componentDidMount() {
    //   this.username.current.focus();
    // }

    handleSubmit = e => {
        e.preventDefault();
        //Call the server
        // const username = document.getElementById('username').value;
        const username = this.username.current.value;
        console.log("submitted");
    };
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">UserName</label>
                        <input
                            autoFocus
                            ref={this.username}
                            id="username"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="text" className="form-control" />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;

/*=============== 115.Controlled Elements (Контролируемые элементы) ==================*/

































