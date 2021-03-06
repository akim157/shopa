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
/* ============ 22.React настройка Redux ============ */
//npm install react redux react-router react-dom react-redux react-router-redux react-router-dom --save
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
        <Provider store={ store }>
            <Router history={ history }>
                { routes }
            </Router>
        </Provider>
    ),
    document.querySelector('#app'));

//store.js
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

function _applyMiddleware() {
    const middleware = [];
    return applyMiddleware(...middleware);
}

export default function configureStore(initialState) {
    const store = compose(
        _applyMiddleware()
    )(createStore)(rootReducer, initialState);
    return store;
}
//reducers.js
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    routing: routerReducer
});
//routers.js
import React from 'react';
import { Route } from 'react-router';
import App from './app';

export default (
    <Route component={ App } path={ App.path }>

    </Route>
);
//app.js
import { Component } from 'react';

export default class App extends Component {
    static path = '/';
    render() {
        return (
            <h1>Hello world!</h1>
        );
    }
}
/* ============ 23.DevTools настройка ============ */
//npm i --save redux-devtools redux-devtools-dock-monitor redux-devtools-log-monitor
//utils/devtools.js
import React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';

const DevTools = createDevTools(
    <DockMonitor
        toggleVisibilityKey='ctrl-h'
        changeMonitorKey='ctrl-q'
        defaultIsVisible={ true }
    >
        <LogMonitor theme='tomorrow' />
    </DockMonitor>
);

export default DevTools;
//utils/index.js
export DevTools from './devtools';
//app.js
import React from 'react';
import { DevTools } from './utils';

export default class App extends React.Component {

    static path = '/';

    render() {
        return (
            <div>
                <h1>Hello</h1>
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }

}
//store.js
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { DevTools } from './utils';


function _applyMiddleware() {
    const middleware = [

    ];

    return applyMiddleware(...middleware);
}


export default function configureStore(initialState) {
    const store = compose(
        _applyMiddleware(),
        DevTools.instrument()
    )(createStore)(rootReducer, initialState);

    return store;
}
/* ============ 24.Создание роутеров ============ */
//npm i bootstrap
//Alt + J



/* ============ 25.404 ============ */
//pages/error/index.js
import React from 'react';
import { Link } from 'react-router';

export default class ErrorPage extends React.Component {
	render() {
		return (
			<div className='alert alert-danger'>
				<h3>Страница не найдена</h3>
				<p>Перейти на <Link to='/'>главную</Link>	страницу.</p>
			</div>
		);
	};
}
//routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import { HomePage, HomeRouters } from './pages/home';
import { ContactPage, ContactRouters } from './pages/contact';
import ErrorPage from './pages/error';


export default (
    <Route component={ App } path={ App.path } >
        <IndexRoute component={ HomePage } />
        { HomeRouters }
				{ ContactRouters }
				<Route path='*' component={ ErrorPage } />
    </Route>
);
/* ============ 26.Главная страница ============ */
//npm i --save classnames
//npm i --save lodash
//https://www.npmjs.com/package/lodash
/* ============ 27.Главная страница и Redux ============ */
//home.js
import React, { PropTypes } from 'react';
import Input from '../../components/ui/input';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import './styles.less';

class HomePage extends React.Component {
    static path = '/';
    static propTypes = {
        home: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            todoName: ''
            // todos: [
            // 	{ id: 1, name: 'Todo 1'}
            // ],
            // error: ''
        };

        bindAll(this, ['renderTodos','inputOnChange','addTodo']);
    }
    // inputOnChange(event) {
    // 	const todoName = event.target.value;
    // 	this.setState({ todoName });
    // }
    inputOnChange(value) {
        this.setState({ todoName: value });
    }
    addTodo() {
        // if (this.state.todoName === '') {
        // 	this.setState({ error: 'Поле не должно быть пустым;' });
        // 	return;
        // }
        // const id = this.state.todos[this.state.todos.length - 1].id + 1;
        // const name = this.state.todoName;
        // const todos = this.state.todos;
        // todos.push({id, name});
        // this.setState({ todos });
        // this.setState({ todoName: '', error: '' });
        const { todos } = this.props.home;
        const id = todos[this.state.todos.length - 1].id + 1;
        const name = this.state.todoName;
        this.props.dispatch( addTodo(id, name));
        this.setState({ todoName: '' });
    }
    renderTodos(item, idx) {
        return (
            <li key={ idx }>{ item.name }</li>
        );
    }
    render() {
        // const { todoName, todos, error } = this.state;
        const { todoName } = this.state;
        const { todos, error } = this.props.home;
        return (
            <div className='row b-home'>
                <div className='col-xs-12'>
                    <ul>
                        { todos.map(this.renderTodos) }
                    </ul>
                    <div className='col-xs-4'>
                        {/* <input type='text' className='form-control' value={ todoName } onChange={ this.inputOnChange.bind(this) }/> */}
                        <Input
                            onChange={ this.inputOnChange }
                            value={ todoName }
                            // error={ error }
                            error={ this.state.error }
                        />
                        <button className='btn btn-primary' onClick={ this.addTodo }>Add todo</button>
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(HomePage);
//home/reducers.js
import { ADD_TODO } from './actions';

const initialState = {
    todos: [
        { id: 1, name: 'Todo 1' }
    ],
    error: ''
};

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            let todos = state.todos;
            if (!action.error) {
                todos.push({ id: action.id, name: action.name });
            }
            return Object.assign({}, state, {
                error: action.error,
                todos
            });
        default:
            return state;
    }
}

const HomeReducer = {
    home: homeReducer
};

export default HomeReducer;
//home/actions.js
export const ADD_TODO = 'ADD_TODO';

export function addTodo(id, name) {
    let error = '';
    if(!name) {
        error = 'Необъодимо ввести название';
    }
    return {
        type: ADD_TODO,
        id,
        name,
        error
    };
}
//home/index.js
export HomePage from './home';
export HomeRouters from './routes';
export HomeReducer from './reducers';
//reducers.js
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { HomeReducer } from './pages/home/index';

export default combineReducers({
    routing: routerReducer,
    ...HomeReducer
});
/* ============ 28.Добавление фукционала ============ */
//home/home.js
import React, { PropTypes } from 'react';
import Input from '../../components/ui/input';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import { addTodo, likeTodo } from './actions';
import classnames from 'classnames';
import './styles.less';

class HomePage extends React.Component {
    static path = '/';
    static propTypes = {
        home: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            todoName: ''
            // todos: [
            // 	{ id: 1, name: 'Todo 1'}
            // ],
            // error: ''
        };

        bindAll(this, ['renderTodos','inputOnChange','addTodo']);
    }
    // inputOnChange(event) {
    // 	const todoName = event.target.value;
    // 	this.setState({ todoName });
    // }
    inputOnChange(value) {
        this.setState({ todoName: value });
    }
    addTodo() {
        // if (this.state.todoName === '') {
        // 	this.setState({ error: 'Поле не должно быть пустым;' });
        // 	return;
        // }
        // const id = this.state.todos[this.state.todos.length - 1].id + 1;
        // const name = this.state.todoName;
        // const todos = this.state.todos;
        // todos.push({id, name});
        // this.setState({ todos });
        // this.setState({ todoName: '', error: '' });
        const { todos } = this.props.home;
        const id = todos[this.state.todos.length - 1].id + 1;
        const name = this.state.todoName;
        this.props.dispatch( addTodo(id, name));
        this.setState({ todoName: '' });
    }
    renderTodos(item, idx) {
        const todoClasses = classnames('b-home-todo', {
            'is-liked': item.liked
        });
        const btnClasses = classnames('btn', {
            'active': item.liked
        });
        return (
            <li key={ idx }>
                    <span className={ todoClasses }>
                        { item.name }
                    </span>
                <button className="btn" onClick={ this.deleteTodo.bind(this, item)}>
                    <i className='glyphicon glyphicon-remove'></i>
                </button>
                <button className={ btnClasses } onclick={ this.likeTodo.bind(this, item) }>
                    <i className='glyphicon glyphicon-heart'></i>
                </button>
            </li>
        );
    }
    likeTodo(todo) {
        this.props.dispatch( likeTodo(todo) );
    }
    deleteTodo(todo) {
        this.props.dispatch();
    }
    render() {
        // const { todoName, todos, error } = this.state;
        const { todoName } = this.state;
        const { todos, error } = this.props.home;
        return (
            <div className='row b-home'>
                <div className='col-xs-12'>
                    <ul>
                        { todos.map(this.renderTodos) }
                    </ul>
                    <div className='col-xs-4'>
                        {/* <input type='text' className='form-control' value={ todoName } onChange={ this.inputOnChange.bind(this) }/> */}
                        <Input
                            onChange={ this.inputOnChange }
                            value={ todoName }
                            // error={ error }
                            error={ this.state.error }
                        />
                        <button className='btn btn-primary' onClick={ this.addTodo }>Add todo</button>
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(HomePage);
//home/reducers.js
import {ADD_TODO, LIKE_TODO, DELETE_TODO } from './actions';

const initialState = {
    todos: [
        { id: 1, name: 'Todo 1', liked: false }
    ],
    error: ''
};

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            let todos = state.todos;
            if (!action.error) {
                todos.push({ id: action.id, name: action.name, liked: false });
            }
            return Object.assign({}, state, {
                error: action.error,
                todos
            });
        case LIKE_TODO:
            const idx = state.todos.findIndex(todo => todo.id === action.todo.id);
            state.todos[idx].liked = action.liked;
            return Object.assign({}, state, { todos: state.todos });
        case DELETE_TODO:
            const todosD = state.todos.filter(todo => todo.id !== action.todo.id);
            return Object.assign({}, state, { todos: todosD });
        default:
            return state;
    }
}

const HomeReducer = {
    home: homeReducer
};

export default HomeReducer;
//home/actions.js
export const ADD_TODO = 'ADD_TODO';
export const LIKE_TODO = 'LIKE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(id, name) {
    let error = '';
    if(!name) {
        error = 'Необъодимо ввести название';
    }
    return {
        type: ADD_TODO,
        id,
        name,
        error
    };
}

export function likeTodo(todo) {
    const liked = !todo.liked;
    return {
        type: LIKE_TODO,
        todo,
        liked
    }
}

export function deleteTodo(todo) {
    return {
        type: DELETE_TODO,
        todo
    };
}
//home/styles.less
.b-home {
    margin: 15px;
& button {
        margin: 15px 0;
    }
&-todo {
        margin-right: 10px;
        font-size: 15px;
    &.is-liked {
            color: red;
        }
    }
* {
        outline: none !important;
    }
}
/* ============ 29.Эмуляция асинхронности ============ */
//localstorage - глобальный объект js приложения, который может содержать различные поля
//cookie, после закрытие браузора они остаются и не удаляются
//npm i --save-dev redux-thunk
/* ============ 30.Страница списка ============ */
//header/index.js
<li className='nav-item'>
    <Link to='/list'>Список</Link>
</li>
//list/index.js
export ListPage from './list';
export ListRoutes from './routes';
//src/routes.js
{ ListRoutes }
//list-items.js
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class ListItem extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired
    };
    render() {
        return (
            <li>
                <Link to={`/list/${ this.props.id }`}> Item { this.props.id }</Link>
            </li>
        );
    }

}
//list-details.js
import React, { PropTypes } from 'react';

export default class ItemDetails extends React.Component {

    static path = '/';
    static propTypes = {
        routeParams: PropTypes.any.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.routeParams.id
        };
    }

    render() {
        return (
            <div>
                <h1>Item details { this.state.id } works!</h1>
            </div>
        );
    }

}
//list/routes.js
import React from 'react';
import { Route } from 'react-router';
import ListPage from './list';
import ItemDetails from './item-details';

export default (
    <Route>
        <Route component={ ListPage } path={ ListPage.path}></Route>
        <Route component={ ItemDetails } path={ ListPage.path + '/:id' }></Route>
    </Route>
);
//list/list.js
import React from 'react';
import { bindAll } from 'lodash';
import ListItem from './list-item';

export default class ListPage extends React.Component {

    static path = '/list';

    constructor(props) {
        super(props);
        this.state = {
            items: [1,2]
        };
        bindAll(this, ['renderItems']);
    }

    renderItems(item, idx) {
        return (
            <ListItem
                key={ idx }
                id={ item }
            />
        );
    }
    render() {
        return (
            <div>
                <h3>List</h3>
                <ul>
                    { this.state.items.map(this.renderItems) }
                </ul>
            </div>
        );
    }

}
//
/* ============ 31.Страница детального отображения ============ */
/* ============ 32.Абстрактный компонент модального окна ============ */
/* ============ 33.Модальное окно удаления ============ */
/* ============ 34.Создание формы и валидация ============ */
//npm i --save is_js - позволяет проверять на не соотвествие
/* ============ 35.Продакш сборка ============ */





























