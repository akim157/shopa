/* ============== 2.What is Node ================== */
//https://ru.wikipedia.org/wiki/Node.js
//https://metanit.com/web/nodejs/1.1.php
//A runtime environment for executing JavaScript code (Среда выполнения для выполнения кода JavaScript)
//We often use Node to build back-end services (Мы часто используем Node для создания внутренних сервисов)
//Application Programming Interface (Интерфейс прикладного программирования)
//Web App (Веб приложения)-> Back-end Service
//Mobile App (Мобильные приложения) -> Back-end Service
//Highly-scable, data-intensive and real-time apps (Высокопроизводительные приложения, работающие с большими объемами данных и работающие в режиме реального времени.)
///////////////
//Great for prototyping and agile development (Отлично подходит для прототипирования и гибкой разработки)
//Superfast and highly scalable (Сверхбыстрый и легко масштабируемый)
//NODE APP
//Built twice as fast with fewer people (Построен вдвое быстрее с меньшим количеством людей)
//33% fewer lines of code (На 33% меньше строк кода)
//40% fewer files (На 40% меньше файлов)
//2x request/sec (2x запроса / сек)
//35% faster response time (На 35% быстрее время отклика)
////////////
//JavaScript everywhere (JavaScript везде)
//Cleaner and more consistent codebase (Более чистый и последовательный код)
//Large ecosystem of open-source libs (Большая экосистема библиотек с открытым исходным кодом)
/* ============== 3.Node Architecture (Архитектура узла) ================== */
//A runtime environment for executing JavaScript code (Среда выполнения для выполнения кода JavaScript)
//Browser (Бразуре)
//JS Code -> JS Engine (JS Движок) -> Machine code (Машинный код)
//Engine//
//Internet Explorer - Chakra
//Mozila - SpiderMonkey
//Google Chrome - v8
//Browser -> JS Engine
//Browser -> Runtime Environment (Среда выполнения)
document.getElementById('');
//Node была написана Райн Дайл в 2009 году, за основу был взят двидок v8 и написанный на языке С++
fs.readFile();
http.createServer();
//Node is NOT a programming language! (Узел НЕ является языком программирования!)
//Node is NOT a framework! (Узел не является фреймворком!)
/* ============== 4.How Node Works (Как работает Node) ================== */
//Highly-scalable, data-intensive and real-time apps (Приложения с высокой степенью масштабируемости, интенсивным использованием данных и приложениями реального времени)
//Non-blocking (Неблокируемая)
//ASYNCHRONOUS (АСИНХРОННЫЙ)
//NODE
//Request (Запрос) <- Single Thread (Одиночная тема) -> Request
//Blocking (блокировка)
//SYNCHRONOUS (Синхронная)
//Node applications are asynchronous by default (Приложения по умолчанию являются асинхронными)
//Event Queue (Очередь событий)
//Node si ideal for I/O-intensive apps (Узел идеально подходит для приложений с интенсивным вводом-выводом)
//Do not use Node for CPU-intensive apps (Не используйте Node для приложений, интенсивно использующих процессор)
//https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B5-%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B8-%D0%B0%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-javascript-%D1%81-async-await-ba5f47f4436
/* ============== 5.Installing Node (Установка узла) ================== */
//node --version
/* ============== 6.Your First Node Program (Твоя первая программа) ================== */
//mkdir first-app
//node app.js - запускаем скрипт на отработку
//node не видит глобальный класс window
/* ============== 7.Course Structure (Структура курса) ================== */
//Node Module System (Узел Модульная система)
//Node Package Manager (NPM)
//Building RESTful APIs with Express (Создание RESTful API с помощью Express)
//Asynchronous JavaScript (Асинхронный JavaScript)
//Storing Data in MongoDB (Хранение данных в MongoDB)
//Authentication and Authorization (Аутентификация и Авторизация)
//Handling and Logging Erros (Обработка и регистрация ошибок)
//Unit and Integration Testing (Модульное и интеграционное тестирование)
//Test-driver Development (TDD) (Разработка тест-драйвера)
//Deployment (развертывание)
/* ============== 8.Introduction (Вступление) ================== */
//OS (операционная система)
//FS (файловая система)
//event (события)
//http (протокол http)
/* ============== 9.Global Object (Глобальный объект) ================== */
console.log(); //global

setTimeout(); //таймер на выполнения callback
clearTimeout(); //омена таймера на выполнения

setInterval(); //таймер на выполнения callback выполняет код много раз
clearInterval(); //отмена выполнения

//window.console.log
console.log();
//window.setTimeout()
setTimeout();
//window.message = '';
var message = '';
//
global.console.log();
//
var message = '';
console.log(global.message); //undefined
/* ============== 10.Modules (Модули) ================== */
console.log(module);
//node app.js
//Модуль не пренадлежит к глобальному объекту
//В узле каждый файл является модуль, переменные и функции опредененны в этом файле, они не доступны за пределами этого модуля
/* ============== 11.Creating a Module (Создание модуля) ================== */
//logger.js
var url = 'http://mylogger.io/log';

function log(message) {
    //Send an HTTP request (Отправить запрос HTTP)
    console.log(message);
}

module.exports.log = log;
/* ============== 12.Loading a Module (Загрузка модуля) ================== */
//app.js
const logger = require('./logger');

logger.log('message');
/////////////////
//logger.js
var url = 'http://mylogger.io/log';

function log(message) {
    //Send an HTTP request (Отправить запрос HTTP)
    console.log(message);
}

module.exports = log;
//app.js
const log = require('./logger');

log('message');
/* ============== 13.Module Wrapper Function (Функция обертки модуля) ================== */
//logger.js
(function(exports, require, module, __filename, __dirname) {
    console.log(__filename);
    console.log(__dirname);

    var url = "http://mylogger.io/log";

    function log(message) {
        //Send an HTTP request (Отправить запрос HTTP)
        console.log(message);
    }

    module.exports = log;
    // module.exports.log = log;
    // exports.log = log;
    //
    // exports = log; //module.exports
});
/* ============== 14.Path Module (Путь модуля) ================== */
//app.js
const path = require('path');
var pathObj = path.parse(__filename);

console.log(pathObj);
/* ============== 15.OS Module (ОС Модуль) ================== */
//app.js
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);
console.log('Free Memory: ' + freeMemory);

//Template string
// ES6 / ES2015 : ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
/* ============== 16.File System Module (Файловая система модуля) ================== */
//app.js
const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files); //[ 'app.js', 'logger.js' ]

fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files); //[ 'app.js', 'logger.js' ]
});
/* ============== 17.Events Module (События модуль) ================== */
//A signal that something has happened (Сигнал о том, что что-то случилось)
//Example
//HTTP -> Event:New Request
//Class -> Human
//Object -> John
//app.js
const EventEmitter = require('events'); //class, not function
const emitter = new EventEmitter();

//Register a listener (Зарегистрировать слушателя)
emitter.on('messageLogged', function() {
    console.log('Listener called');
});


//Raise an event (Поднять событие)
emitter.emit('messageLogged');

//Making a noise, produce - signalling (Шуметь, производить - сигнализация)
/* ============== 18.Events Arguments (События аргументов) ================== */
//app.js
const EventEmitter = require('events'); //class, not function
const emitter = new EventEmitter();

//Register a listener (Зарегистрировать слушателя)
emitter.on('messageLogged', function(arg) { //e , eventArg
    console.log('Listener called', arg);
});


//Raise an event (Поднять событие)
// emitter.emit('messageLogged', 1, 'url');
emitter.emit('messageLogged', { id: 1, url: 'http://'});

//Making a noise, produce - signalling (Шуметь, производить - сигнализация)
//app.js
const EventEmitter = require('events'); //class, not function
const emitter = new EventEmitter();

//Register a listener (Зарегистрировать слушателя)
emitter.on('messageLogged', arg => console.log('Listener called', arg));


//Raise an event (Поднять событие)
// emitter.emit('messageLogged', 1, 'url');
emitter.emit('messageLogged', { id: 1, url: 'http://' });

//Raise: logging (data: message) (Поднять: регистрация (данные: сообщение))
/* ============== 19.Extending Event Emitter (Расширение источника событий) ================== */
//logger.js
const EventEmitter = require('events'); //class, not function

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
	log(message) {
		//Send an HTTP request (Отправить запрос HTTP)
		console.log(message + 1);

		//Raise an event (Поднять событие)
		this.emit('messageLogged', { id: 1, url: 'http://' });
	}
}


module.exports = Logger;
//app.js
const EventEmitter = require('events'); //class, not function

const Logger = require('./logger');
const logger = new Logger();

//Register a listener (Зарегистрировать слушателя)
logger.on('messageLogged', (arg) => {
	console.log('Listener called', arg);
});

logger.log('message');
/* ============== 20.HTTP Module (HTTP Модуль) ================== */
server.listen(3000); //Запускает HTTP-сервер, прослушивающий соединения. Этот метод идентичен server.listen () из net.Server. 3000 - порт
//app.js
const http = require('http');

const server = http.createServer();

server.on('connection', (socket) => {
	console.log('New connection...');
});

server.listen(3000);

console.log('Listening on port 3000...');
//app.js
const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('Hello World');
		res.end();
	}

	if (req.url === '/api/courses') {
		res.write(JSON.stringify([1 ,2 ,3]));
		res.end();
	}
});

server.listen(3000);

console.log('Listening on port 3000...');
/* ============== 21.Introduction (Вступление) ================== */
//Node Package Manager (NPM) (Узловой пакетный менеджер)
//https://www.npmjs.com/
//npm -v
//node -v
//sudo npm i -g npm@5.5.1
/* ============== 22.Package.json ================== */
//mkdir npm-demo
//cd npm-demo
//npm init - создаем package.json
//npm init --yes
/* ============== 23.Instaling a Node Package (Установка узла пакета) ================== */
//npm i underscore - https://www.npmjs.com/package/underscore
//npm i underscore --save
/* ============== 24.Using a Package (Использование пакета) ================== */
//https://underscorejs.org/
//http://underscorejs.ru/#contains
//index.js
var _ = require('underscore'); //underscore.js|unserscore/index.js

//Core module (Ядро модуля)
//File or folder (Файл или папка)
//node_modules (узел модулей)

var result = _.contains([1,2,3], 2);
console.log(result);
/* ============== 25.Package Dependencies (Зависимости пакетов) ================== */
//npm i mongoose - https://code.tutsplus.com/ru/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527
//ls node_modules - unix
//dir node_modules - window
/* ============== 26.NPM Packages and Source Control (Пакеты NPM и контроль версий) ================== */
//npm i
//git init (Эта команда создаёт в текущем каталоге новый подкаталог с именем .git содержащий все необходимые файлы репозитория — основу Git-репозитория.)
//git status
//.gitignore
//node_modules/
//git add . - добавляем отслеживания к файлам
//git commit -m "Our first commit."
/* ============== 27.Semantic Versioning (Семантическая версия) ================== */
//"mongoose": "^5.6.2" - Major.Minor.Patch
//~ - префикс тильды (~1.2.3 - 1.2.x)
//^ - каретка (^1.2.3 - 1.x.x)
//https://docs.npmjs.com/files/package.json
/* ============== 28.Listing the Installed Packages (Список установленных пакетов) ================== */
//npm list - показывает список пакетов установленных и их версии
//npm list --depth=0 (глубина списка)
/* ============== 29.Viewing Registry Info for a Package (Просмотр информации реестра для пакета) ================== */
//npm view mongoose - полная информация про зависимость
//npm view mongoose dependencies - полная информация об зависимостях
//npm view mongoose versions - полная информация об версиях библиотеки
/* ============== 30.Installing a Specific Version of a Package (Установка определенной версии пакета) ================== */
//npm i mongoose@2.4.2 - установка определенной версии пакета
/* ============== 31.Updating Local Packages (Обновление локальных пакетов) ================== */
//cls - очистить консоль
//npm outdated - показывает устаревшие версии пакетов (Эта команда проверит реестр, чтобы увидеть, устарели ли какие-либо (или определенные) установленные пакеты.)
//npm update - обнавление до последней версии (Эта команда обновит все перечисленные пакеты до последней версии)
//npm i -g npm-check-updates (Если -g указан флаг, эта команда обновит глобально установленные пакеты. - Показать все новые зависимости для проекта в текущем каталоге)
//npm-check-updates - установка локально
//ncu -u - обнавление (npm-check-updates обновляет ваши зависимости package.json до последних версий, игнорируя указанные версии.)
//(npm-check-updates только изменяет ваш файл package.json. Запустите npm install для обновления установленных пакетов и package-lock.json.)
//npm i
//ncu
/* ============== 32.DevDependencies (Зависимости разработчиков) ================== */
//npm i jshint --save-dev (это веб-инструмент, который позволяет вам устанавливать собственные стандарты кода, легко проверять файл на соответствие этим стандартам и делиться результатами с другими разработчиками.)
//-S, --save: Пакет будет отображается в ваших dependencies
//-D, --save-dev: пакет будет отображаться в ваших devDependencies
/* ============== 33.Uninstalling a Package (Деинсталляция пакета) ================== */
//npm uninstall
//npm un mongoose
/* ============== 34.Working with Global Packages (Работа с глобальными пакетами) ================== */
//npm i -g npm
//npm -g outdated
//npm un -g
/* ============== 35.Publishing a Package (Публикация пакета) ================== */
//mkdir lion-lib
//cd lion-lib
//npm init --yes
//npm login
//cd ..
//mkdir node-app
//cd node-app
//npm init --yes
//npm i lion-lib
//index.js - lion-lib
module.exports.add = function(a, b) { return a + b };
module.exports.multiply = function(a, b) { return a * b };
//index.js node-app
var lion = require('lion-lib');
var result = lion.add(1,2);
console.log(result); // 3
/* ============== 36.Updating a Published Package (Обновление опубликованного пакета) ================== */
//npm version minor
//npm publish
/* ============== 37.Intoduction (Вступление) ================== */
//Bulding RESTful Services with Express
/* ============== 38.RESTful Services (RESTful Услуги) ================== */
//Clietn (Клиент) | HTTP | Server (Сервер)
//Representational State Transfer (Изобразительное состояние перехода)
//Create (Создать) | Read (Читать) | Update (Обнавить) | Delete (Удалить)
//CRUD Operations
//HTTP METHODS - GET | POST | PUT | DELETE
//GET /api/customers
//GET /api/customers/1
//PUT /api/customers/1
//DELETE /api/customers/1
//POST /api/customers
/* ============== 39.Introducing Express (Вступительный экспресс) ================== */
//Express - Быстрый, незавершенный, минималистский веб-фреймворк для узла .
//mkdir node-course
//cd node-course
//mkdir express-demo
//cd express-demo
//npm init --yes
//npm i express
/* ============== 40.Building Your First Web Server (Создание вашего первого веб-сервера) ================== */
//http://expressjs.com/
//index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
	res.send([1,2,3]);
});
app.listen(3000, () => console.log('Listening on port 3000...'));
// app.post();
// app.put();
// app.delete();
//node index.js
/* ============== 41.Nodemon ================== */
//Nodemon - это инструмент, который помогает разрабатывать приложения на основе node.js, автоматически перезапуская приложение узла при обнаружении изменений файла в каталоге.
//npm i -g nodemon
//nodemon index.js
/* ============== 42.Environment Varaiables (Переменные среды) ================== */
//index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
	res.send([1,2,3]);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
//export PORT=5000
//ndoemon index.js
/* ============== 43.Route Parameters (Параметры маршрута) ================== */
//index.js
app.get('/api/courses/:id', (req, res) => {
	res.send(req.params.id);
});
/////
app.get('/api/posts/:year/:month', (req, res) => {
	res.send(req.params);
});
///api/posts/2019/30?sortBy=ord
app.get('/api/posts/:year/:month', (req, res) => {
	res.send(req.query);
});
/* ============== 44.Handling HTTP GET Requests (Обработка HTTP GET-запросов) ================== */
//index.js
const express = require('express');
const app = express();

const courses = [
	{ id: 1, name: 'course1'},
	{ id: 2, name: 'course2'},
	{ id: 3, name: 'course3'}
];
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) res.status(404).send('The course with the given ID was not found.');
	res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
/* ============== 45.Handling HTTP POST Requests (Обработка HTTP POST-запросов) ================== */
//index.js
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
	{ id: 1, name: 'course1'},
	{ id: 2, name: 'course2'},
	{ id: 3, name: 'course3'}
];
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

app.post('/api/courses', (req, res) => {
	const course = {
		id: courses.length + 1,
		name: req.body.name
	};
	courses.push(course);
	res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) res.status(404).send('The course with the given ID was not found.');
	res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
/* ============== 46.Calling Endpoints Using Postman (Вызов конечных точек с помощью почтальона) ================== */
/* ============== 47.Input Validation (Проверка ввода) ================== */
//npm i --save @hapi/joi - валидация данных
//index.js
if (!req.body.name || req.body.name.length < 3) {
	//400 Bad Request
	res.status(400).send('Name is required and should be minimum 3 change.');
	return;
}
//index.js
const Joi = require('@hapi/joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
	{ id: 1, name: 'course1' },
	{ id: 2, name: 'course2' },
	{ id: 3, name: 'course3' }
];
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

app.post('/api/courses', (req, res) => {
	const schema = {
		name: Joi.string().min(3).required()
	};

	const result = Joi.validate(req.body, schema);

	if (result.error) {
		res.status(400).send(result.error.details[0].message);
		return;
	}
	const course = {
		id: courses.length + 1,
		name: req.body.name
	};
	courses.push(course);
	res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) res.status(404).send('The course with the given ID was not found.');
	res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
/* ============== 48.Handling HTTP PUT Requests (Обработка запросов HTTP PUT) ================== */
//index.js
app.put('/api/courses/:id', (req, res) => {
	//Look up the course (Посмотри курс)
	//If not existing, return 404 (Если не существует, вернуть 404)
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) res.status(404).send('The course with the given ID was not found.');
	//Validate (Утверждать)
	//If invalid, return 400 - Bad request (Если неверно, вернуть 400 - плохой запрос)
	const schema = {
		name: Joi.string().min(3).required()
	};
	const result = Joi.validate(req.body, schema);
	if (result.error) {
		res.status(400).send(result.error.details[0].message);
		return;
	}
	//Update course (Обнавить курс)
	course.name = req.body.name;
	res.send(course);
	//Return the updated course (Вернуть обнавленный курс)
});
//index.js
const Joi = require('@hapi/joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
	{ id: 1, name: 'course1' },
	{ id: 2, name: 'course2' },
	{ id: 3, name: 'course3' }
];
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

app.post('/api/courses', (req, res) => {
	const { error } = validateCourse(req.body);
	if (error) {
		res.status(400).send(error.details[0].message);
		return;
	}

	const course = {
		id: courses.length + 1,
		name: req.body.name
	};
	courses.push(course);
	res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
	//Look up the course (Посмотри курс)
	//If not existing, return 404 (Если не существует, вернуть 404)
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) res.status(404).send('The course with the given ID was not found.');
	//Validate (Утверждать)
	//If invalid, return 400 - Bad request (Если неверно, вернуть 400 - плохой запрос)
	const { error } = validateCourse(req.body); //result.error
	if (error) {
		res.status(400).send(error.details[0].message);
		return;
	}
	//Update course (Обнавить курс)
	course.name = req.body.name;
	res.send(course);
	//Return the updated course (Вернуть обнавленный курс)
});

function validateCourse(course) {
	const schema = {
		name: Joi.string().min(3).required()
	};
	return Joi.validate(course, schema);
}

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) res.status(404).send('The course with the given ID was not found.');
	res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
/* ============== 49.Handling HTTP Delete Requests (Обработка запросов HTTP Delete) ================== */
//index.js
const Joi = require('@hapi/joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
	{ id: 1, name: 'course1' },
	{ id: 2, name: 'course2' },
	{ id: 3, name: 'course3' }
];
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

app.post('/api/courses', (req, res) => {
	const { error } = validateCourse(req.body);
	if (error) {
		res.status(400).send(error.details[0].message);
		return;
	}

	const course = {
		id: courses.length + 1,
		name: req.body.name
	};
	courses.push(course);
	res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
	//Look up the course (Посмотри курс)
	//If not existing, return 404 (Если не существует, вернуть 404)
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) res.status(404).send('The course with the given ID was not found.');
	//Validate (Утверждать)
	//If invalid, return 400 - Bad request (Если неверно, вернуть 400 - плохой запрос)
	const { error } = validateCourse(req.body); //result.error
	if (error) {
		res.status(400).send(error.details[0].message);
		return;
	}
	//Update course (Обнавить курс)
	course.name = req.body.name;
	res.send(course);
	//Return the updated course (Вернуть обнавленный курс)
});

app.delete('/api/courses/:id', (req, res) => {
	//Look up the course (Посмотри курс)
	//Not existing, return 404 (Не существует, вернуть 404)
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) res.status(404).send('The course with the given ID was not found.');
	//Delete (Удалить)
	const index = courses.indexOf(course);
	courses.splice(index, 1);
	//Return the same course (Вернуть тот же курс)
	res.send(course);
});

function validateCourse(course) {
	const schema = {
		name: Joi.string().min(3).required()
	};
	return Joi.validate(course, schema);
}

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) res.status(404).send('The course with the given ID was not found.');
	res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
//Fixing a Bug (Исправление ошибки)
const Joi = require('@hapi/joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
	{ id: 1, name: 'course1' },
	{ id: 2, name: 'course2' },
	{ id: 3, name: 'course3' }
];
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

app.post('/api/courses', (req, res) => {
	const { error } = validateCourse(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const course = {
		id: courses.length + 1,
		name: req.body.name
	};
	courses.push(course);
	res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
	//Look up the course (Посмотри курс)
	//If not existing, return 404 (Если не существует, вернуть 404)
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');
	//Validate (Утверждать)
	//If invalid, return 400 - Bad request (Если неверно, вернуть 400 - плохой запрос)
	const { error } = validateCourse(req.body); //result.error
	if (error) return res.status(400).send(error.details[0].message);
	//Update course (Обнавить курс)
	course.name = req.body.name;
	res.send(course);
	//Return the updated course (Вернуть обнавленный курс)
});

app.delete('/api/courses/:id', (req, res) => {
	//Look up the course (Посмотри курс)
	//Not existing, return 404 (Не существует, вернуть 404)
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');
	//Delete (Удалить)
	const index = courses.indexOf(course);
	courses.splice(index, 1);
	//Return the same course (Вернуть тот же курс)
	res.send(course);
});

function validateCourse(course) {
	const schema = {
		name: Joi.string().min(3).required()
	};
	return Joi.validate(course, schema);
}

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');
	res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
/* ============== 50.Project - Build the Genres API (Проект - создание жанрового API) ================== */
//Project - VIDLY
//http://vidly.com/api/genres
/* ============== 51.Introducion (Введение) ================== */
//Express: Advanced Topics (Экспресс: продвинутые темы)
//In this section (В этой секции)
//Middleware (Промежуточное) | Configuration (конфигурация) | Debugging (отладка) | Templating Engines (Двигатели шаблонов)
/* ============== 52.Middleware (Промежуточное) ================== */
//REQUEST PROCESSING PIPELINE (ЗАПРОС ОБРАБОТКИ ТРУБОПРОВОДА)
//Request -> /json()/ -> /route()/ -> Response
/* ============== 53.Creating Custom Middleware (Создание пользовательского промежуточного программного обеспечения) ================== */
//logger.js
function log(req, res, next) {
	console.log('Logging...');
	next();
}

module.exports = log;
//index.js
const Joi = require('@hapi/joi');
const logger = require('./logger');
const express = require('express');
const app = express();

app.use(express.json());

app.use(logger);

app.use(function(req, res, next) {
	console.log('Authenticating...');
	next();
});

const courses = [
	{ id: 1, name: 'course1' },
	{ id: 2, name: 'course2' },
	{ id: 3, name: 'course3' }
];
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

app.post('/api/courses', (req, res) => {
	const { error } = validateCourse(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const course = {
		id: courses.length + 1,
		name: req.body.name
	};
	courses.push(course);
	res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');
	const { error } = validateCourse(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	course.name = req.body.name;
	res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');
	const index = courses.indexOf(course);
	courses.splice(index, 1);
	res.send(course);
});

function validateCourse(course) {
	const schema = {
		name: Joi.string().min(3).required()
	};
	return Joi.validate(course, schema);
}

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');
	res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
/* ============== 54.Built-In Middleware (Встроенное промежуточное ПО) ================== */
//index.js
const Joi = require('@hapi/joi');
const logger = require('./logger');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //key=value&key=value
app.use(express.static('public'));

app.use(logger);

const courses = [
	{ id: 1, name: 'course1' },
	{ id: 2, name: 'course2' },
	{ id: 3, name: 'course3' }
];
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

app.post('/api/courses', (req, res) => {
	const { error } = validateCourse(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const course = {
		id: courses.length + 1,
		name: req.body.name
	};
	courses.push(course);
	res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');
	const { error } = validateCourse(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	course.name = req.body.name;
	res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');
	const index = courses.indexOf(course);
	courses.splice(index, 1);
	res.send(course);
});

function validateCourse(course) {
	const schema = {
		name: Joi.string().min(3).required()
	};
	return Joi.validate(course, schema);
}

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');
	res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
//public/readme.txt
/* ============== 55.Third-party Middleware (Стороннее промежуточное ПО) ================== */
//https://github.com/helmetjs/helmet
//npm i helmet
//http://expressjs.com/en/resources/middleware/morgan.html
//npm i morgan
//index.js
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('@hapi/joi');
const logger = require('./logger');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //key=value&key=value
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));

app.use(logger);

const courses = [
	{ id: 1, name: 'course1' },
	{ id: 2, name: 'course2' },
	{ id: 3, name: 'course3' }
];
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

app.post('/api/courses', (req, res) => {
	const { error } = validateCourse(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const course = {
		id: courses.length + 1,
		name: req.body.name
	};
	courses.push(course);
	res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');
	const { error } = validateCourse(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	course.name = req.body.name;
	res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');
	const index = courses.indexOf(course);
	courses.splice(index, 1);
	res.send(course);
});

function validateCourse(course) {
	const schema = {
		name: Joi.string().min(3).required()
	};
	return Joi.validate(course, schema);
}

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');
	res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
/* ============== 56.Environments (Среды) ================== */
process.env.NODE_ENV //undefined
//index.js
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);
//expres NODE_ENV=production
/* ============== 57.Configuration (Конфигурация) ================== */
//https://www.npmjs.com/package/rc
//https://www.npmjs.com/package/config
//npm i config
//set NODE_ENV=production
const config = require('config');
//...//
//Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
//NODE_ENV - http://qaru.site/questions/52919/what-is-nodeenv-in-express
console.log('Mail Password: ' + config.get('mail.password'));

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}
/* ============== 58.Debugging (Отладка) ================== */
//npm i debug
//set DEBUG=app:startup
//index.js
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const morgan = require('morgan');
const express = require('express');
const app = express();

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled...');
}

//Db work...
dbDebugger('Connected to he database...');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
//set DEBUG=app:startup,app:db
//set DEBUG=app:*
/* ============== 59.Templating Engines (Шаблон движка) ================== */
//Pug (Мопс) | Mustache (Усы)| EJS
//https://www.npmjs.com/package/pug
//npm i pug
app.set('view engine', 'pub');
app.set('views', './views'); //default
//index.pug
html
    head
        title= title
    body
        h1= message
//index.js
app.get('/', (req, res) => {
    res.render('index', {title: "My express app", message: "Hello"});
});
/* ============== 60.Database Integration (Интеграция БД) ================== */
//http://expressjs.com/ru/guide/database-integration.html#%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D1%81-%D0%B1%D0%B0%D0%B7%D0%B0%D0%BC%D0%B8-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85
/* ============== 61.Authentication (Аунтификация) ================== */
/* ============== 62.Structuring Express Applications (Структура Экспресс Приложений) ================== */
//routes/home.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: "My express app", message: "Hello"});
});

module.exports = router;
//routes/courses.js
const express = require('express');
const router = express.Router();

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

router.get('/', (req, res) => {
    res.send(courses);
});

router.post('/', (req, res) => {
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

router.put('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    course.name = req.body.name;
    res.send(course);
});

router.delete('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});

module.exports = router;
//index.js
const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('@hapi/joi');
const logger = require('./middleware/logger');
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views'); //default

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses);
app.use('/', home);

//Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled...');
}

app.use(logger);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
/* ============== 63.Project - Restructure the App (Проект - Реструктуризация приложения) ================== */
//vidly/routes/genres.js
const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Genre = mongoose.model('Genre', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
}));

router.get('/', async (req, res) => {
    const genres = await Genre.find().sort('name');
    res.send(genres);
});

router.post('/', async (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let genre = new Genre({ name: req.body.name });
    genre = await genre.save();

    res.send(genre);
});

router.put('/:id', async (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
        new: true
    });

    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    res.send(genre);
});

router.delete('/:id', async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);

    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    res.send(genre);
});

router.get('/:id', async (req, res) => {
    const genre = await Genre.findById(req.params.id);

    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    res.send(genre);
});

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);
}

module.exports = router;
//vidly/index.js
const Joi = require('joi');
const genres = require('./routes/genres');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/genres', genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
/* ============== 64.Synchronous Vs. Asynchronous Code (Синхронный Vs. Асинхронный код) ================== */
console.log('Before');
setTimeout(() => {
    console.log('Reading a user from a database...');
}, 2000);
console.log('After');
//https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B5-%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B8-%D0%B0%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-javascript-%D1%81-async-await-ba5f47f4436
/* ============== 65.Patterns For Dealing With Asynchronous Code (Шаблоны для работы с асинхронным кодом) ================== */
console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

//Callbacks
//Promises
//Async/await

function getUser(id) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        return { id: id, gitHubUserName: 'maxim' };
    }, 2000);

    return 1;
}
/* ============== 66.Callbacks (Перезвонить) ================== */
console.log('Before');
getUser(1, function(user){
    console.log('User', user);
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUserName: 'maxim' });
    }, 2000);
}
//Solution (Решение)
console.log('Before');
getUser(1, (user) => {
    //Get the repositories
    getRepositories(user.gitHubUserName, (repos) => {
        console.log('Repos', repos);
    });
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUserName: 'maxim' });
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub Api...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 200);
}
/* ============== 67.Callback Hell (Перезвонить ад) ================== */
console.log('Before');
getUser(1, (user) => {
    getRepositories(user.gitHubUserName, (repos) => {
        getCommits(repo, (commits) => {
            // CALLBACK HELL
        });
    });
});
console.log('After');

//Synchronous
console.log('Before');
const user = getUser(1);
const repos = getPepositories(user.gitHubUserName);
const commits = getCommits(repos[0]);
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUserName: 'maxim' });
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub Api...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 200);
}
/* ============== 68.Named Functions to Rescue (Названные функции для спасения) ================== */
console.log('Before');
getUser(1, getRepositories);
console.log('After');

function getRepositories(user) {
    getRepositories(user.gitHubUserName, getCommits);
}

function getCommits(repos) {
    getCommits(repos, displayCommits);
}

function displayCommits(commits) {
    console.log(commits);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUserName: 'maxim' });
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub Api...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 200);
}
//https://toster.ru/q/445238
//https://javascript.ru/forum/misc/14653-vyzov-funkcii.html
/* ============== 69.Promises (обещания) ================== */
//Holds the eventual result of an asynchronous operation (Содержит конечный результат асинхронной операции)
//https://medium.com/@stasonmars/%D0%BF%D1%80%D0%BE%D0%BC%D0%B8%D1%81%D1%8B-%D0%B2-javascript-%D0%B4%D0%BB%D1%8F-%D1%87%D0%B0%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2-60bbef963541
//Pending (В ожидании) -> async operation -> Fulfilled (Исполненная) | Rejected (Отклонено)
const p = new Promise((resolve, reject) => {
    // Kick of some async work (Пинок какой-то асинхронной работы)
    // ...
    resolve(1);
    // reject(new Error('message'));
});

p.then(result => console.log('Result: ', result));
///////////////////
const p = new Promise((resolve, reject) => {
    // Kick of some async work (Пинок какой-то асинхронной работы)
    // ...
    setTimeout(() => {
        // resolve(1); //pending => resolved, fulfilled
        reject(new Error('message')); //pending => rejected
    }, 2000);
});

p
    .then(result => console.log('Result: ', result))
    .catch(err => console.log('Error: ', err.message));
/* ============== 70.Replacing Callbacks with Promises (Замена обратных вызовов обещаниями) ================== */
//index.js
console.log('Before');
getUser(1, (user) => {
    getRepositories(user.gitHubUserName, (repos) => {
        getCommits(repos[0], (commits) => {
            console.log(commits);
        });
    });
});
console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        // Kick off some async work (Начните асинхронную работу)
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUserName: 'maxim' });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub Api...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 200);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
        }, 2000);
    });
}
/* ============== 71.Consuming Promises (Потреблять обещания) ================== */
//index.js
console.log('Before');

const p = getUser(1);
p.then(user => console.log(user));

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        // Kick off some async work (Начните асинхронную работу)
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUserName: 'maxim' });
        }, 2000);
    });
}
//index.js
console.log('Before');

getUser(1)
	.then(user => getRepositories(user.gitHubUserName))
	.then(repos => getCommits(repos[0]))
	.then(commits => console.log('Commits', commits));

console.log('After');

function getUser(id) {
	return new Promise((resolve, reject) => {
		// Kick off some async work (Начните асинхронную работу)
		setTimeout(() => {
			console.log('Reading a user from a database...');
			resolve({ id: id, gitHubUserName: 'maxim' });
		}, 2000);
	});
}

function getRepositories(username) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Calling GitHub Api...');
			resolve(['repo1', 'repo2', 'repo3']);
		}, 2000);
	});
}

function getCommits(repo) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Calling GitHub API...');
			resolve(['commit']);
		}, 2000);
	});
}
/* ============== 72.Creating Settled Promises (Создание установленных обещаний) ================== */
//promise-api.js
const p = Promise.resolve({ id: 1});
p.then(result => console.log(result));
//promise-api.js
const p = Promise.reject(new Error('reason for rejection...'));
p.catch(error => console.log(error));
//Error -> ''
const p = Promise.reject('reason for rejection...');
p.catch(error => console.log(error));
/* ============== 73.Running Parallel Promises (Выполнение параллельных обещаний) ================== */
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
//promise-api.js
const p1 = new Promise((resolve) => {
	setTimeout(() => {
		console.log('Async operation 1...');
		resolve(1);
	}, 2000);
});

const p2 = new Promise((resolve) => {
	setTimeout(() => {
		console.log('Async operation 2...');
		resolve(2);
	}, 2000);
});

Promise.all([p1, p2])
	.then(result => console.log(result));
//example - error
const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Async operation 1...');
		reject(new Error('because something failed'));
	}, 2000);
});

const p2 = new Promise((resolve) => {
	setTimeout(() => {
		console.log('Async operation 2...');
		resolve(2);
	}, 2000);
});

Promise.all([p1, p2])
	.then(result => console.log(result))
	.catch(err => console.log('Error', err.message));
//Async operation 1...
//Async operation 2...	
//Error because something failed
//race
const p1 = new Promise((resolve) => {
	setTimeout(() => {
		console.log('Async operation 1...');
		resolve(1);
	}, 2000);
});

const p2 = new Promise((resolve) => {
	setTimeout(() => {
		console.log('Async operation 2...');
		resolve(2);
	}, 2000);
});

Promise.race([p1, p2])
	.then(result => console.log(result))
	.catch(err => console.log('Error', err.message));
//Async operation 1...
//1
//Async operation 2...
/* ============== 74.Async and Await ================== */
//index.js
console.log('Before');

//Async and Await	approach
async function displayCommits() {
	try {
		const user = await getUser(1);
		const repos = await getRepositories(user.gitHubUserName);
		const commits = await getCommits(repos[0]);
		console.log(commits);
	}
	catch(err) {
		console.log('Error', err.message);
	}
}

displayCommits();

console.log('After');

function getUser(id) {
	return new Promise((resolve, reject) => {
		// Kick off some async work (Начните асинхронную работу)
		setTimeout(() => {
			console.log('Reading a user from a database...');
			resolve({ id: id, gitHubUserName: 'maxim' });
		}, 2000);
	});
}

function getRepositories(username) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Calling GitHub Api...');
			// resolve(['repo1', 'repo2', 'repo3']);
			reject(new Error('error repositories...'));
		}, 2000);
	});
}

function getCommits(repo) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Calling GitHub API...');
			resolve(['commit']);
		}, 2000);
	});
}
/* ============== 75.Exercise (Упражнение) ================== */
//exercise.js

getCustomer(1, (customer) => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log('Top movies: ', movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...')
      });
    });
  }
});

function getCustomer(id, callback) {
  setTimeout(() => {
    callback({ 
      id: 1, 
      name: 'Mosh Hamedani', 
      isGold: true, 
      email: 'email' 
    });
  }, 4000);  
}

function getTopMovies(callback) {
  setTimeout(() => {
    callback(['movie1', 'movie2']);
  }, 4000);
}

function sendEmail(email, movies, callback) {
  setTimeout(() => {
    callback();
  }, 4000);
}
///////
async function notifyCustomer() {
	const customer = await getCustomer(1);
	console.log('Customer: ', customer);
	if (customer.isGold) {
		const movies = await getTopMovies();
		console.log('Top movies: ', movies);
		await sendEmail(customer.email, movies);
		console.log('Email sent...')
	}
}
notifyCustomer();

function getCustomer(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				id: 1,
				name: 'Mosh Hamedani',
				isGold: true,
				email: 'email'
			});
		}, 4000);
	});
}

function getTopMovies() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(['movie1', 'movie2']);
		}, 4000);
	});
}

function sendEmail(email, movies) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 4000);
	});
}
/* ============== 76.Introducing MongoDB (Представляем MongoDB) ================== */
/* ============== 77.Installing MongoDB on Mac (Установка MongoDB на Mac) ================== */
//https://brew.sh/
//brew install mongodb
//sudo mkdir -p /data/db
//sudo chown -R `id -un` /data/db
//mongod
//https://www.mongodb.com/
//Compass download and install
/* ============== 78.Installing MongoDB on Window (Установка MongoDB на Window) ================== */
//https://www.mongodb.com/
//Download msi and install
//Download Compass and install
//Path - mongod
//cmd - mongod
//md D:\data\db
//mongodbCompass play
/* ============== 79.Connecting to MongoDB (Подключение к MongoDB) ================== */












































