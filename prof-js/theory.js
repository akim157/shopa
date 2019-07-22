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

