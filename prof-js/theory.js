/* =========== 2. Работа с DOM ========== */
{/*<div id="app">Id App</div>*/}
{/*< div*/}
{/*className = "class-name" > Class*/}
{/*Name < /div>*/}
{/*<ul>*/}
    {/*<li className="q">1</li>*/}
    {/*<li className="q">2</li>*/}
    {/*<li className="q">3</li>*/}
    {/*<li className="q">4</li>*/}
    {/*<li className="q">5</li>*/}
{/*</ul>*/}
{/*< div*/}
{/*id = "test" >*/}
    {/*< h1 > Hello < /h1>*/}
{/*</div>*/}
const id = document.getElementById('app');
const className = document.getElementsByClassName('class-name')[0];
const classNameQ = document.getElementsByClassName('q');
console.log(id);
console.log(className);
console.log(classNameQ);

const element1 = document.querySelector('#app');
const element2 = document.querySelector('.class-name');
const element3 = document.querySelectorAll('.q');
const element4 = document.querySelectorAll('#test > h1');
console.log(element1);
console.log(element2);
console.log(element3);
console.log(element4);
/* ============ 3.События ============ */
{/*<button>Click</button>*/}
{/*<a href="http://google.com" target="_blank">google</a>*/}
{/*<div style="width: 150px; height: 150px; background: red; padding: 15px;" id="big">*/}
    {/*<div style="width: 50px; height: 50px; background-color: blue;" id="small"></div>*/}
{/*</div>*/}
document.querySelector('button').addEventListener('click', function(event) {
    console.log('click', event);
});
document.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault(); //сбрасывает стандартное поведение объектов
    console.log('click', event);
});

document.querySelector('#big').addEventListener('click', function (event) {
    console.log('big');
}, true); //на всплытье, а не на погружение как в стандартном варианте
document.querySelector('#small').addEventListener('click', function (event) {
    console.log('small');
}, true);
document.querySelector('#big').addEventListener('click', function (event) {
    console.log('big');
}); //на всплытье, а не на погружение как в стандартном варианте
document.querySelector('#small').addEventListener('click', function (event) {
    console.log('small');
    event.stopPropagation(); //при клике на этом элементе, дальше не нужно обрабатывать ни какие события
});
/* ============ 4.Тип данных и переменных ============ */
typeof void(0) // undefined
5 - '3'; //2
[1] + [3]; // '13'
[1] + [3] - [2]; //11
/* ============ 5.Замыкание ============ */
for (var i = 1; i< 10; i++) {
    setTimeout(function(){
        console.log('i: ', i);
    }, 1000);
}
///////////
function printConsole(x) {
    console.log('i: ', x);
}
for (var i = 1; i< 10; i++) {
    setTimeout(printConsole(i), 1000);
}
///////////
function printConsole(x) {
    return function() {
        console.log('i: ', x);
    }
}
for (var i = 1; i< 10; i++) {
    setTimeout(printConsole(i), 1000);
}
/* ============ 6.Контекст ============ */
const obj1 = {
    name: 'obj1',
    getName: function(age) {
        console.log(this.name, age);
    }
};
const obj2 = {
    name: 'obj23'
};

// const q = obj1.getName.bind(obj2);
// q();
obj1.getName.bind(obj2)(23);
obj1.getName.call(obj2, 23);
obj1.getName.apply(obj2, [23, 11]);
//////////////
const obj1 = {
    name: 'obj1',
    getName: function(age) {
        console.log(this.name, age);
    }
};
const obj2 = {
    name: 'obj23'
};

function bindRedaclare(newContext, newFunction) {
    return function() {
        newFunction.apply(newContext, arguments);
    }
}

bindRedaclare(obj2, obj1.getName)(11);
/* ============ 7.Классы ============ */
const User = function(name) {
    this.name = name || 'New User';
    this.getName = () => {
        console.log('This name', this.name);
    };
};

const user = new User('Maxim');
user.getName();
//////////
const User = function(name) {
    this.name = name || 'New User';
};

User.prototype = {
    age: 20,
    getName: function() {
        console.log('This name', this.name);
    },
    get: function(filed) {
        console.log('GET:', this[filed]);
    }
};

const user = new User('Maxim');
user.get('name');
/////////////
const User = function(name) {
    this.name = name || 'New User';
};

User.prototype = {
    age: 20,
    getName: function() {
        console.log('This name', this.name);
    },
    get: function(filed) {
        const self = this;
        setTimeout(function(){
            console.log('GET:', self[filed]);
        },1000);
    }
};

const user = new User('Maxim');
user.get('name');
/* ============ 8.Протипированное наследование ============ */
const Animal = function(name) {
	this.name = name;
};

Animal.prototype = {
	legsCount: 4,
	headsCount: 1,
	tailExists: false
};

const Cat = function() {
	this.isCat = true;
};

Cat.prototype = new Animal('Tom');

const cat = new Cat();
console.log(cat instanceof Cat);
/* ============ 8.Jquery ajax ============ */
//npm i jquery
//index.html
<button>Click</button>
<script src="node_modules/jquery/dist/jquery.min.js"></script>
//index.js
$(document).ready(function(){
	$('button').on('click', function(){
		makeReqest();
	});

	function makeReqest() {
		$.ajax({
			type: 'GET',
			url: 'http://ip.jsontest.com',
			crossDomain: true,
			success: function(data, status, xhr) {
				console.log('IP: ', data);
			},
			error: function() {
				console.log('Error', arguments);
			}
		});
	}
});
/* ============ 9.Eslint ============ */
//следить за чистатой и качествой кода
/* ============ 10.ES2015 ============ */
//Babel - компилятор для js
//Диструктуризация
//Стрелочные функции
//МОДУЛИ
import $ from 'jquery';
import * as newJq from 'jquery';
import { TEST_NAME } from './a';
// import {User} from './b';
// import User from './b';
// import User, { TEST2 } from './b';
import * as b from './b';
import {EEE} from './r/index';

console.log(EEE);
console.log(b.TEST2);
const user = new b.User();
console.log(TEST_NAME);
$.ajax();
newJq.ajax();
//a.js
export const TEST_NAME = 'TEST NAME';
console.log(TEST_NAME);
// export TEST_NAME;
//b.js
// export class User {}
export default class User {}
export const TEST2 = 'test2';
//index.js
import {TEST_NAME} from '../a';
export const EEE = 'da';
//ПРОМИСЫ
const apiCall = new Promise(function(resolve, reject) {
    $.ajax({
        url: 'http://ip.jsontest.com/',
        type: 'GET',
        crossDomain: true,
        success: function(data){
            resolve(data.ip);
        },
        error: function(){
            reject();
        }
    });
});

apiCall.then(function(ip){
    console.log('ip: ', ip);
}).catch(function(){
    console.log('error');
});

///////////////
const delay = (ms = 1000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms);
    });
};

delay(3000).then(()=>{

});
/* ============ 11.Структура ============ */
//GIT
//Project
//src - храниться исходный код проекта, js файлы и стиливые файлы (sass, less - препроцессоры)
//ProjectConfig - конфигурация проекта
//GULP/WEBPACK - СБОРЩИК проекта
//package.json | bower.json - инстуркции для библиотек
//Libraries/Modules - библиотеки и модули
//bundle.js - хранятся все библиотеки используемые в проекта и src файлы
/* ============ 12.webpack ============ */
//webpack src/index.js --output dist/bundle.js
//npm i webpack -g
//index.js
const $ = require('jquery');
const str = require('./constan');
const App = function() {
    console.log(str);
    $('body').html(str);
};

const app = new App();
//constan.js
module.exports = 'App: init!!!!!!!!';
//НАСТРОЙКИ
//webpack.config.json
const webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    }
};
//"build": "webpack",
//"start": "webpack ./src/index.js --output ./public/build.js"
/* ============ 12.ESLINT ============ */
//.eslintrc - файл создается в корне проекта, в нем описываются правила проверки кода
//npm i eslint --save-dev
//eslint ./src - прописываем команду в терминале для проверки скриптов
//"lint": "eslint ./src" - прописываем команду в package.json
/* ============ 13.LESS ============ */
//npm i --save-dev style-loader css-loader less-loader less
//webpack.config.js
//module: {
//         rules: [
//             {
//                 test: /\.less$/,
//                 loader: 'less-loader', // compiles Less to CSS
//             },
//         ],
//     }
//less/index.js
require('./main.less');
//src/index.js
require('./less');
//main.less
body {
    background-color: red;
}

@font-size: 40px;

.b-test {
    margin-top: 50px;
    padding: 30px;
    background: #fff;

&__heading {
        font-size: @font-size;
        color: blue;
    & > div {
            width: 25px;
            height: 25px;
            background: yellowgreen;
        }
    }
}
/* ============ 14.React - Создание первого компонента ============ */
//npm i react react-dom --save //react - библиотеки, react-dom - работает с shadow-dom
//index.js
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>App works!</h1>
                <h3>it`s really working!</h3>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
//index.html
<div id="app"></div>
/* ============ 15.JSX ============ */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    btnOnClick(event) {
        console.log('Button Click', event.target);
    }
    render() {
        return (
            <div style={{ backgroundColor: 'red' }} className="test">
                <h1>App works!</h1>
                <h3>it`s really working!</h3>
                <button onClick={this.btnOnClick}>{ this.props.children }</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App>It`s prop!</App>,
    document.getElementById('app')
);
/* ============ 16.Props ============ */
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    static propTypes = {
        btnText: PropTypes.string.isRequired,
        h1text: PropTypes.string.isRequired,
        newArray: PropTypes.array.isRequired
        // newArray: React.PropTypes.array.isRequired
    };

    static defaultProps = {
        btnText: 'default props text'
    };

    btnOnClick(event) {
        console.log('Button Click', event.target);
    }
    render() {
        console.log('array', this.props.newArray);
        console.log('This', this);
        console.log('Props', this.props);
        return (
            <div style={{ backgroundColor: 'red' }} className="test">
                <h1>{ this.props.h1text }</h1>
                <h3>it`s really working!</h3>
                <button onClick={this.btnOnClick}>{ this.props.btnText || 'Default Text' }</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App btnText="click on me" h1text="this is h1 text" newArray={[1,2,3]}/>,
    document.getElementById('app')
);
/* ============ 17.State ============ */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'test'
        }
    }
    inputOnChange(event) {
        const text = event.target.value;
        this.setState({ text });
    }
    render() {
        return (
            <div className="test">
                <h1>Hello</h1>
                <input type="text" value={ this.state.text } onChange={ this.inputOnChange.bind(this) }/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
/* ============ 18.Связь компонентов ============ */
//index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewComponent from './new';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <NewComponent text="hello from app" />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
//new.js
import React, { Component } from 'react';

export default class NewComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ backgroundColor: 'red' }}>
                <h3>New Component</h3>
                <p>{ this.props.text }</p>
            </div>
        );
    }
}
/* ============ 19.Жизненный цикл компонента ============ */
//index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewComponent from './new';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0
        };
    }

    componentWillMount() {
        setInterval(() => {
            this.setState({ timer: this.state.timer + 1 });
        }, 100);
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                { this.state.timer < 50 ? <NewComponent text="hello from app" /> : null }
                <p>{ this.state.timer }</p>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
//new.js
import React, { Component } from 'react';

export default class NewComponent extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor 1'); //отрабатывает при вызове компонента
    }
    componentWillMount() {
        console.log('componentWillMount 2'); //отрабатывает до добавления в DOM html компонентов
    }
    componentDidMount() {
        console.log('componentDidMount 4'); //отрабатывает после рендеринга
    }
    componentWillUnmount() {
        console.log('componentWillUnmount 5'); //работает как __destruct при удалении компонента
    }
    render() {
        console.log('Render 3'); //добавляем в DOM html компоненты
        return (
            <div style={{ backgroundColor: 'red' }}>
                <h3>New Component</h3>
                <p>{ this.props.text }</p>
            </div>
        );
    }
}
/* ============ 20.Коллекции ============ */
//index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewComponent from './new';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [
                {
                    id: 1,
                    text: 'item 1'
                },
                {
                    id: 2,
                    text: 'item 2'
                },
                {
                    id: 3,
                    text: 'item 3'
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <NewComponent array={ this.state.array } />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
//new.js
import React, { Component } from 'react';

export default class NewComponent extends Component {
    constructor(props) {
        super(props);
    }

    renderItem(item, idx) {
        return (
            <li key={ idx }> <b>{ item.text }</b> - { item.id } </li>
        );
    }

    render() {
        return (
            <ul>
                { this.props.array.map(this.renderItem.bind(this))}
            </ul>
        );
    }
}
/* ============ 21.Роутеры ============ */
//npm i react-router --save
//npm install --save react-router-dom
import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import NewComponent from './new';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>App component1</h1>
            </div>
        );
    }
}

ReactDOM.render(
	<BrowserRouter>
	  <Switch>
        <Route path="/" component={ App }/>
        <Route path="/new2" component={ NewComponent }/>
    </Switch>
	</BrowserRouter>,
    document.getElementById('app')
);
/* ============ 21.Redux ============ */
//Это паттерн, замене MVC
//Redux - это контейнер с предсказуемым состоянием для приложений JavaScript.
//Отслеживает потоки данных в приложении
//https://redux.js.org/introduction/getting-started
//UI view -> onClick (events) user interaction
//action creator - создается функция, объект, которая возвращает данные такие как тип, дату.
//dispatch action (edit post, add new comment) - отрабатывает отправка (редактирование поста, добавления нового комментария)
//store - поподает хранилище - это глобальное хранилище для всего приложения состояний (глобальный объект)
//reducer (редуктор) - после store поподает сюда, это функция где есть switch case где проходит проверка, 
//потом он создает новый объект с новым хешом и заменяется в store
//updated state (new state) - как состояние в хранилище изменяется меняется и уже ui view
//умные и глупые компоненты 
//умные компоненты - это те, которые следят за изменения store
//глупые компоненты не смотрят за изменением store, а просто принимают входящие параметры и зависимости от них меняются

















