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
//mkdir mongo-demo
//npm i mongoose
//index.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...', err));
//nodemon index.js
/* ============== 80.Schemas (Схемы) ================== */
//Schema types (Типы схемы)
//String | Number | Date | Buffer | Boolean | ObjectID | Array
//index.js
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});
/* ============== 81.Models (Модели) ================== */
//https://mongoosejs.com/docs/guide.html
//index.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);
const course = new Course({
    name: 'Node.js Course',
    author: 'Maxim',
    tags: ['node', 'backend'],
    isPublished: true
});
/* ============== 82.Saving a Document (Сохранение документа) ================== */
//index.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Angular Course',
        author: 'Maxim',
        tags: ['angular', 'frontend'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}

createCourse();
/* ============== 83.Querying Documents (Запрос документов) ================== */
//index.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Angular Course',
        author: 'Maxim',
        tags: ['angular', 'frontend'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}

async function getCourses() {
    const courses = await Course.find();
    console.log(courses);
}

// createCourse();
getCourses();
///////////////
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Angular Course',
        author: 'Maxim',
        tags: ['angular', 'frontend'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}

async function getCourses() {
    const courses = await Course
        .find({ author: 'Maxim', isPublished: true })
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
}

// createCourse();
getCourses();
/* ============== 84.Comparison Query Operators (Операторы запросов сравнения) ================== */
async function getCourses() {
    // eq (equal) (равный)
    // ne (not equal) (не равный)
    // qt (greater than) (лучше чем)
    // gte (greater than or equal to) (больше или равно)
    // lt (less than) (Меньше, чем)
    // lte (less than or equal to) (меньше или равно)
    // in (в)
    // nin (not in) (не в)
    const courses = await Course
    // .find({ author: 'Maxim', isPublished: true })
    // .find({ price: 10 })
    // .find({ price: { $gte: 10, $lte: 20 } })
        .find({ price: { $in: [10, 15, 20]} })
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
}
/* ============== 85.Logical Query Operators (Логические операторы запросов) ================== */
async function getCourses() {
    // or
    // and
    const courses = await Course
    // .find({ author: 'Maxim', isPublished: true })
        .find()
        // .or([{ author: 'Maxim' }, {isPublished: true}])
        .and([])
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
}
/* ============== 86.Reqular Expressions (Регулярные выражения) ================== */
async function getCourses() {    
	const courses = await Course
			// .find({ author: 'Maxim', isPublished: true })  
			
			// Starts with Maxim
			.find({ author: /^Maxim/ })         

			// Ends with Fedorov
			.find({ auth: /Fedorov$/i})

			// Contains Maxim
			.find({ author: /.*Maxim.*/})  
			.limit(10)
			.sort({ name: 1 })
			.select({ name: 1, tags: 1 });
	console.log(courses);
}
/* ============== 87.Counting (подсчет) ================== */
async function getCourses() {    
	const courses = await Course
			.find({ author: 'Maxim', isPublished: true })  								
			.limit(10)
			.sort({ name: 1 })
			.count();
	console.log(courses);
}
/* ============== 88.Pagination (Пагинация) ================== */
async function getCourses() {
	const pageNumber = 2;
	const pageSize = 10;
	// /api/courses?pageNumber=2&pageSize=10

	const courses = await Course
		.find({ author: 'Maxim', isPublished: true })
		.skip((pageNumber - 1) * pageSize)
		.limit(pageSize)
		.sort({ name: 1 })
		.select({ name: 1, tags: 1 });
	console.log(courses);
}
/* ============== 89.Exerciese 1 (Упражнение 1) ================== */
//mongoimport --db mongo-exercises --collection courses --file exercise-data.json --jsonArray
//mongoimport - инструмент для массового импорта данных в ваш экземпляр MongoDB.
//--db - Задает имя базы данных, в которой запускается mongoimport .
//mongo-exercises - имя бд
//--collection - Определяет коллекцию для импорта. С версии 2.6  mongoimportберет имя коллекции из имени входного файла. MongoDB пропускает расширение файла из имени коллекции, если входной файл имеет расширение.
//courses - имя колекции
//--file - Определяет местоположение и имя файла, содержащего данные для импорта.
//exercise-data.json - имя файла
//--jsonArray - Принимает импорт данных, представленных несколькими документами MongoDB в одном массиве 
//Exercise - Упражнение
//Get all the published backend courses, sort them by their name, (Получить все опубликованные бэкэнд-курсы, отсортировать их по названию,)
//pick only their name and author, and display them. (выберите только их имя и автора и отобразите их)
//Solution - Решение
//solution1.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');

const courseSchema = new mongoose.Schema({
	name: String,
	author: String,
	tags: [String],
	date: Date,
	isPublished: Boolean,
	price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
	return await Course
		.find({ isPublished: true, tags: 'backend' })
		.sort({ name: 1 })
		.select({ name: 1, author: 1 });	
}

async function run() {
	const courses = await getCourses();
	console.log(courses);
}

run();
/* ============== 90.Exerciese 2 (Упражнение 2) ================== */
//Get all the published frontend and backend courses, (Получить все опубликованные интерфейсы и бэкэнд-курсы)
//sort them by their price in a descending order, (сортировать их по цене в порядке убывания)
//pick only their name and author, (выбрать только их имя и автора)
//and display them. (и отобразить их)
//Solution - Решение
//solution2.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');

const courseSchema = new mongoose.Schema({
	name: String,
	author: String,
	tags: [String],
	date: Date,
	isPublished: Boolean,
	price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
	return await Course
		.find({ isPublished: true, tags: { $in: ['frontend', 'backend']} })
		.sort('-price')
		.select('name author price');	
}

async function run() {
	const courses = await getCourses();
	console.log(courses);
}

run();
//////////////
async function getCourses() {
	return await Course
		.find({ isPublished: true })
		.or([ { tags: 'frontend' }, { tags: 'backend' }])
		.sort('-price')
		.select('name author price');	
}
/* ============== 91.Exerciese 3 (Упражнение 3) ================== */
//Get all the published courses that are $15 or more, (Получить все опубликованные курсы, которые стоят $ 15 или более)
//or have the word 'by' in their title. (или иметь слово «по» в заголовке)
//Solution - Решение
async function getCourses() {
	return await Course
		.find({ isPublished: true })
		.or([
			{ price: { $gte: 15 } },
			{ name: /.*by.*/ }
		])
		.sort('-price')
		.select('name author price');
}
/* ============== 92.Updating Documents - Query First (Обновление документов - сначала запрос) ================== */
async function updateCourse(id) {
	// Approach: Query first (Подход: сначала запрос)
	// findById()
	// Modify its properties (Изменить его свойства)
	// save()

	// Approach: Update first (Подход: сначала обновить)
	// Update directly (Обновление напрямую)
	// Optionally: get the updated document (Опционально: получить обновленный документ)
	const course = await Course.findById(id);	
	if (!course) return;

	course.isPublished = true;
	course.author = 'Another Author';

	// course.set({
	// 	isPublished: true,
	// 	author: 'Another Author'
	// });

	const result = await course.save();
	console.log(result);
}
/* ============== 93.Updating a Document - Update First (Обновление документов - сначала обнавление) ================== */
//https://docs.mongodb.com/manual/reference/operator/update/
async function updateCourse(id) {	
	const result = await Course.update({ _id: id }, {
		$set: {
			author: 'Mosh',
			isPublished: false
		}
	});			
	console.log(result);
}
////////////
async function updateCourse(id) {	
	const result = await Course.findByIdAndUpdate(id, {
		$set: {
			author: 'Jason',
			isPublished: false
		}
	}, { new: true });			
	console.log(result);
}
/* ============== 94.Removing Documents (Удаление документов) ================== */
async function removeCourse(id) {
    const result = await Course.deleteOne({ _id: id });
    console.log(result);
}
/////////////
async function removeCourse(id) {
    // const result = await Course.deleteMany({ _id: id });
    const course = await Course.findByIdAndRemove(id);
    console.log(course);
}
/* ============== 95.Validation (Валидация) ================== */
//index.js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongo-exercises", {
    useNewUrlParser: true
});

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: String,
    tags: [String],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
    const course = new Course({
        // name: "Node Course",
        author: "Maxim Fedorov",
        tags: ["node", "frontend"],
        isPublished: true
    });
    try {
        // course.validate(err => {
        //     if (err) {
        //
        //     }
        // });
        // const isValid = await course.validate();
        // if (!isValid) {}
        const result = await course.save();
        console.log(result);
    } catch (ex) {
        console.log(ex);
    }
}

async function getCourses() {
    const pageNumber = 2;
    const pageSize = 10;
    // /api/courses?pageNumber=2&pageSize=10

    const courses = await Course.find({ author: "Maxim", isPublished: true })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
}

async function updateCourse(id) {
    const result = await Course.findByIdAndUpdate(
        id,
        {
            $set: {
                author: "Jason",
                isPublished: false
            }
        },
        { new: true }
    );
    console.log(result);
}

async function removeCourse(id) {
    // const result = await Course.deleteMany({ _id: id });
    const course = await Course.findByIdAndRemove(id);
    console.log(course);
}

createCourse();
// getCourses();
// updateCourse('5a6900fff467be65019a9001');
// removeCourse("5d1c6f464724a7177c0086e7");
/* ============== 96.Built-In Validators (Встроенная валидация) ================== */
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongo-exercises", {
    useNewUrlParser: true
});

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255
        // match: /patten/
    },
    category: {
        type: String,
        required: true,
        enum: ["web", "mobile", "network"]
    },
    author: String,
    tags: [String],
    date: Date,
    isPublished: Boolean,
    price: {
        type: Number,
        required: function() {
            return this.isPublished;
        },
        min: 10,
        max: 200
    }
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
    const course = new Course({
        // name: "Node Course",
        category: "-",
        author: "Maxim Fedorov",
        tags: ["node", "frontend"],
        isPublished: true
    });
    try {
        const result = await course.save();
        console.log(result);
    } catch (ex) {
        console.log(ex);
    }
}
createCourse();
/* ============== 97.Custom Validators (Пользовательские валидаторы) ================== */
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255
        // match: /patten/
    },
    category: {
        type: String,
        required: true,
        enum: ["web", "mobile", "network"]
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            validator: function(v) {
                return v && v.length > 0;
            },
            message: 'A course should have at least on tag'
        }
    },
    date: Date,
    isPublished: Boolean,
    price: {
        type: Number,
        required: function() {
            return this.isPublished;
        },
        min: 10,
        max: 200
    }
});
/* ============== 98.Async Validators (Асинхронные валидаторы) ================== */
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255
        // match: /patten/
    },
    category: {
        type: String,
        required: true,
        enum: ["web", "mobile", "network"]
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function(v, callback) {
                setTimeout(() => {
                    // Do some async work
                    const result = v && v.length > 0;
                    callback(result);
                }, 4000);
            },
            message: "A course should have at least on tag"
        }
    },
    date: Date,
    isPublished: Boolean,
    price: {
        type: Number,
        required: function() {
            return this.isPublished;
        },
        min: 10,
        max: 200
    }
});
/* ============== 99.Validation Errors (Ошибки валидации) ================== */
async function createCourse() {
    const course = new Course({
        name: "Angular Course",
        category: "-",
        author: "Maxim",
        tags: null,
        isPublished: true,
        price: 15
    });
    try {
        const result = await course.save();
        console.log(result);
    } catch (ex) {
        for (field in ex.errors) console.log(ex.errors[field]);
    }
}
/* ============== 100.SchemaType Options (Параметры типа схема) ================== */
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255
        // match: /patten/
    },
    category: {
        type: String,
        required: true,
        enum: ["web", "mobile", "network"],
        lowercase: true,
        // uppercase: true
        trim: true
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function(v, callback) {
                setTimeout(() => {
                    // Do some async work
                    const result = v && v.length > 0;
                    callback(result);
                }, 4000);
            },
            message: "A course should have at least on tag"
        }
    },
    date: Date,
    isPublished: Boolean,
    price: {
        type: Number,
        required: function() {
            return this.isPublished;
        },
        min: 10,
        max: 200,
        get: v => Math.round(v),
        set: v => Math.round(v)
    }
});
/* ============== 101.Project - Add Persistence to Genres API (Проект - Добавить постоянство к жанру API) ================== */
//vidly -> npm i mongoose
//nodemon index.js
//index.js
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/genres', genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
//genres.js
const Joi = require("joi");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Genre = mongoose.model(
    "Genre",
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 50
        }
    })
);

router.get("/", async (req, res) => {
    const genres = await Genre.find().sort("name");
    res.send(genres);
});

router.post("/", async (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = new Genre({ name: req.body.name });
    await genre.save();

    res.send(genre);
});

router.put("/:id", async (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findByIdAndUpdate(
        req.params.id,
        { name: req.body.name },
        { new: true }
    );

    if (!genre)
        return res.status(404).send("The genre with the given ID was not found.");

    res.send(genre);
});

router.delete("/:id", async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);

    if (!genre)
        return res.status(404).send("The genre with the given ID was not found.");

    res.send(genre);
});

router.get("/:id", async (req, res) => {
    const genre = await Genre.findById(req.params.id);
    if (!genre)
        return res.status(404).send("The genre with the given ID was not found.");
    res.send(genre);
});

function validateGenre(genre) {
    const schema = {
        name: Joi.string()
            .min(3)
            .required()
    };

    return Joi.validate(genre, schema);
}

module.exports = router;
/* ============== 102.Project - Build the Customers API (Проект - создание API клиентов) ================== */
//index.js
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
//customers.js
const Joi = require("joi");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Customer = mongoose.model(
    "Customer",
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 50
        },
        idGold: {
            type: Boolean,
            default: false
        },
        phone: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 50
        }
    })
);

router.get("/", async (req, res) => {
    const customers = await Customer.find().sort("name");
    res.send(customers);
});

router.post("/", async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        idGold: req.body.idGold
    });
    await customer.save();

    res.send(genre);
});

function validateCustomer(customer) {
    const schema = {
        name: Joi.string()
            .min(5)
            .max(50)
            .required(),
        phone: Joi.string()
            .min(5)
            .max(50)
            .required(),
        isGold: Joi.boolean()
    };

    return Joi.validate(customer, schema);
}

module.exports = router;
/* ============== 103.Restructuring the Project (Реструктуризация проекта) ================== */
//customers.js
const { Cutomer, validate } = require('../models/customer'); //.Customer
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const customers = await Customer.find().sort("name");
    res.send(customers);
});

router.post("/", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        idGold: req.body.idGold
    });
    await customer.save();

    res.send(customer);
});

router.put("/:id", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const сustomer = await Customer.findByIdAndUpdate(
        req.params.id,
        { name: req.body.name },
        { new: true }
    );

    if (!сustomer)
        return res.status(404).send("The genre with the given ID was not found.");

    res.send(сustomer);
});

router.delete("/:id", async (req, res) => {
    const сustomer = await Customer.findByIdAndRemove(req.params.id);

    if (!сustomer)
        return res.status(404).send("The genre with the given ID was not found.");

    res.send(сustomer);
});



module.exports = router;
//customer.js
const Joi = require("joi");
const mongoose = require("mongoose");

const Customer = mongoose.model(
    "Customer",
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 50
        },
        idGold: {
            type: Boolean,
            default: false
        },
        phone: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 50
        }
    })
);

function validateCustomer(customer) {
    const schema = {
        name: Joi.string()
            .min(5)
            .max(50)
            .required(),
        phone: Joi.string()
            .min(5)
            .max(50)
            .required(),
        isGold: Joi.boolean()
    };

    return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomer;
/* ============== 104.Modelling Relationships (Моделирование отношений) ================== */
//Trade off between query performance vs consistency (Компромисс между производительностью запросов и согласованностью)

// Usning References (Normalization) - Использование ссылок (нормализация)
let author = {
	name: 'Maxim'
}
let course = {
	author: 'id',
	authors: [
		'id1',
		'id2'
	]
}
//Using Embedded Documents (Denormalization) - Использование встроенных документов (денормализация)
let course = {
	author: {
		name: 'Maxim'
	}
}

//Hybrid (Гибридный)
let author = {
	name: 'Maxim'
	// 50 other properties (50 других свойств)
}

let course = {
	author: {
		id: 'ref',
		name: 'Maxim'
	}
}
/* ============== 105.Modelling Relationships (Моделирование отношений) ================== */
//population.js
const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/playground")
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB...", err));

const Author = mongoose.model(
    "Author",
    new mongoose.Schema({
        name: String,
        bio: String,
        website: String
    })
);

const Course = mongoose.model(
    "Course",
    new mongoose.Schema({
        name: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author"
        }
    })
);

async function createAuthor(name, bio, website) {
    const author = new Author({
        name,
        bio,
        website
    });

    const result = await author.save();
    console.log(result);
}

async function createCourse(name, author) {
    const course = new Course({
        name,
        author
    });

    const result = await course.save();
    console.log(result);
}

async function listCourses() {
    const courses = await Course.find().select("name");
    console.log(courses);
}

// createAuthor('Mosh', 'My bio', 'My Website');

createCourse("Node Course", "5d1b7dfbedc2d201e8bda5eq");

// listCourses();
/* ============== 106.Population (Население) ================== */
//https://mongoosejs.com/docs/populate.html
const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/playground")
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB...", err));

const Author = mongoose.model(
    "Author",
    new mongoose.Schema({
        name: String,
        bio: String,
        website: String
    })
);

const Course = mongoose.model(
    "Course",
    new mongoose.Schema({
        name: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author"
        }
    })
);

async function createAuthor(name, bio, website) {
    const author = new Author({
        name,
        bio,
        website
    });

    const result = await author.save();
    console.log(result);
}

async function createCourse(name, author) {
    const course = new Course({
        name,
        author
    });

    const result = await course.save();
    console.log(result);
}

async function listCourses() {
    const courses = await Course
        .find()
        .populate('author', 'name -_id')
        .populate('category', 'name')
        .select("name author");
    console.log(courses);
}

// createAuthor('Mosh', 'My bio', 'My Website');

// createCourse("Node Course", "5d1b7dfbedc2d201e8bda5eq");

listCourses();
/* ============== 107.Embedding Documents (Встраивание документов) ================== */
//embedding.js
const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/playground")
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB...", err));

const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
    "Course",
    new mongoose.Schema({
        name: String,
        // author: authorSchema
        author: {
            type: authorSchema,
            retuired: true
        }
    })
);

async function createCourse(name, author) {
    const course = new Course({
        name,
        author
    });

    const result = await course.save();
    console.log(result);
}

async function listCourses() {
    const courses = await Course.find();
    console.log(courses);
}

async function updateAuthor(courseId) {
    // await course = await Course.findById(courseId);
    // await course = await Course.update({ _id: courseId }, {
    //   $set: {
    //     'author.name': 'John Smith'
    //   }
    // });
    await course = await Course.update({ _id: courseId }, {
        $unset: {
            'author': ''
        }
    });
    // course.author.name = 'Maxim Fedorov';
    // course.save();
}
// createCourse("Node Course", new Author({ name: "Mosh" }));
updateAuthor('5d1e22296650e61738ba800c');
/* ============== 108.Using an Array of Sub-documents (Использование массива поддокументов) ================== */
//embedding.js
const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/playground")
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB...", err));

const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
    "Course",
    new mongoose.Schema({
        name: String,
        author: [authorSchema]
    })
);

async function createCourse(name, authors) {
    const course = new Course({
        name,
        authors
    });

    const result = await course.save();
    console.log(result);
}

async function listCourses() {
    const courses = await Course.find();
    console.log(courses);
}

async function updateAuthor(courseId) {
    // await course = await Course.findById(courseId);
    // await course = await Course.update({ _id: courseId }, {
    //   $set: {
    //     'author.name': 'John Smith'
    //   }
    // });
    // await course = await Course.update({ _id: courseId }, {
    //   $unset: {
    //     'author': ''
    //   }
    // });
    // course.author.name = 'Maxim Fedorov';
    // course.save();
}
async function addAAuthor(courseId, author) {
    const course = await Course.findById(courseId);
    course.authors.push(author);
    course.save();
}

async function removeAuthor(courseId, authorId) {
    const course = await Course.findById(courseId);
    const author = course.authors.id(authorId);
    author.remove();
    course.save();
}

removeAuthor('5d1e253e3d5ff4005c85017f', '5d1e253e3d5ff4005c85017f');

// addAAuthor('5d1e253e3d5ff4005c85017f', new Author({name: 'amy'}));
// createCourse("Node Course", [
//     new Author({ name: 'Maxim' }),
//     new Author({ name: 'Ivan' })
// ]);
/* ============== 109.Project - Build the Movies API (Project - создание API фильмов) ================== */
//vidly
//movie.js
const Joi = require('joi');
const mongoose = require('mongoose');
const {genreSchema} = require('./genre');

const Movie = mongoose.model('Movies', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    }
}));

function validateMovie(movie) {
    const schema = {
        title: Joi.string().min(5).max(50).required(),
        genreId: Joi.string().required(),
        numberInStock: Joi.number().min(0).required(),
        dailyRentalRate: Joi.number().min(0).required()
    };

    return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;
//movies.js
const {Movie, validate} = require('../models/movie');
const {Genre} = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const movies = await Movie.find().sort('name');
    res.send(movies);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(400).send('Invalid genre.');

    let movie = new Movie({
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });
    movie = await movie.save();

    res.send(movie);
});

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(400).send('Invalid genre.');

    const movie = await Movie.findByIdAndUpdate(req.params.id,
        {
            title: req.body.title,
            genre: {
                _id: genre._id,
                name: genre.name
            },
            numberInStock: req.body.numberInStock,
            dailyRentalRate: req.body.dailyRentalRate
        }, { new: true });

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});

router.delete('/:id', async (req, res) => {
    const movie = await Movie.findByIdAndRemove(req.params.id);

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});

router.get('/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});

module.exports = router;
/* ============== 110.Project - Build the Rentals API (Проект - Построить API Арендной платы) ================== */
// Create a new rental (Создать новый прокат)
// POST /api/rentals

// Get the list of rentals (Получить список аренды)
// GET /api/rentals
//vidly
//rental.js
const Joi = require('joi');
const mongoose = require('mongoose');

const Rental = mongoose.model('Rental', new mongoose.Schema({
    customer: {
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 50
            },
            isGold: {
                type: Boolean,
                default: false
            },
            phone: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 50
            }
        }),
        required: true
    },
    movie: {
        type: new mongoose.Schema({
            title: {
                type: String,
                required: true,
                trim: true,
                minlength: 5,
                maxlength: 255
            },
            dailyRentalRate: {
                type: Number,
                required: true,
                min: 0,
                max: 255
            }
        }),
        required: true
    },
    dateOut: {
        type: Date,
        required: true,
        default: Date.now
    },
    dateReturned: {
        type: Date
    },
    rentalFee: {
        type: Number,
        min: 0
    }
}));

function validateRental(rental) {
    const schema = {
        customerId: Joi.string().required(),
        movieId: Joi.string().required()
    };

    return Joi.validate(rental, schema);
}

exports.Rental = Rental;
exports.validate = validateRental;
//rentals.js
const {Rental, validate} = require('../models/rental');
const {Movie} = require('../models/movie');
const {Customer} = require('../models/customer');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const rentals = await Rental.find().sort('-dateOut');
    res.send(rentals);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = await Customer.findById(req.body.customerId);
    if (!customer) return res.status(400).send('Invalid customer.');

    const movie = await Movie.findById(req.body.movieId);
    if (!movie) return res.status(400).send('Invalid movie.');

    if (movie.numberInStock === 0) return res.status(400).send('Movie not in stock.');

    let rental = new Rental({
        customer: {
            _id: customer._id,
            name: customer.name,
            phone: customer.phone
        },
        movie: {
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
        }
    });
    rental = await rental.save();

    movie.numberInStock--;
    movie.save();

    res.send(rental);
});

router.get('/:id', async (req, res) => {
    const rental = await Rental.findById(req.params.id);

    if (!rental) return res.status(404).send('The rental with the given ID was not found.');

    res.send(rental);
});

module.exports = router;
/* ============== 111.Transactions (операции) ================== */
//Это группа операций...
//Two Phase Commit (Двухфазный коммит)
//https://docs.mongodb.com/v3.4/tutorial/perform-two-phase-commits/
//npm i fawn
//https://www.npmjs.com/package/fawn
//rentals.js
const { Rental, validate } = require("../models/rental");
const { Movie } = require("../models/movie");
const { Customer } = require("../models/customer");
const mongoose = require("mongoose");
const Fawn = require("fawn");
const express = require("express");
const router = express.Router();

Fawn.init(mongoose);

router.get("/", async (req, res) => {
    const rentals = await Rental.find().sort("-dateOut");
    res.send(rentals);
});

router.post("/", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = await Customer.findById(req.body.customerId);
    if (!customer) return res.status(400).send("Invalid customer.");

    const movie = await Movie.findById(req.body.movieId);
    if (!movie) return res.status(400).send("Invalid movie.");

    if (movie.numberInStock === 0)
        return res.status(400).send("Movie not in stock.");

    let rental = new Rental({
        customer: {
            _id: customer._id,
            name: customer.name,
            phone: customer.phone
        },
        movie: {
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
        }
    });

    try {
        new Fawn.Task()
            .save("rentals", rental)
            .update(
                "movies",
                { _id: movie._id },
                {
                    $inc: { numberInStock: -1 }
                }
            )
            .run();

        res.send(rental);
    } catch (ex) {
        res.status(500).send("Something failed.");
    }
});

router.get("/:id", async (req, res) => {
    const rental = await Rental.findById(req.params.id);

    if (!rental)
        return res.status(404).send("The rental with the given ID was not found.");

    res.send(rental);
});

module.exports = router;
/* ============== 112.ObjectID ================== */
//https://docs.mongodb.com/manual/reference/method/ObjectId/
// _id: 5d0e4d252f8f2905240cf830
// 12 bytes
// 4 bytes: timestap
// 3 bytes: machine identifier (идентификатор машины)
// 2 bytes: process identifier (идентификатор процесса)
// 3 bytes: counter (счетчик)

// 1 byte = 8 bits
// 2 ^ 8 = 256
// 2 ^ 24 = 16M

// Driver -> MongoDB

const mongoose = require('mongoose');
const id = new mongoose.Types.ObjectId();
console.log(id);
/* ============== 113.Validating Object ID`s (Проверка идентификаторов объектов) ================== */
if (mongoose.Types.ObjectId.isValid(req.body.customerId))
return res.status(400).send('Invalid customer.');
//https://www.npmjs.com/package/joi-objectid
//npm i joi-objectid
//rental.js
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');

const Rental = mongoose.model('Rental', new mongoose.Schema({
  customer: { 
    type: new mongoose.Schema({
      name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
      },
      isGold: {
        type: Boolean,
        default: false
      },
      phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
      }      
    }),  
    required: true
  },
  movie: {
    type: new mongoose.Schema({
      title: {
        type: String,
        required: true,
        trim: true, 
        minlength: 5,
        maxlength: 255
      },
      dailyRentalRate: { 
        type: Number, 
        required: true,
        min: 0,
        max: 255
      }   
    }),
    required: true
  },
  dateOut: { 
    type: Date, 
    required: true,
    default: Date.now
  },
  dateReturned: { 
    type: Date
  },
  rentalFee: { 
    type: Number, 
    min: 0
  }
}));

function validateRental(rental) {
  const schema = {
    customerId: Joi.objectId().required(),
    movieId: Joi.objectId().required()
  };

  return Joi.validate(rental, schema);
}

exports.Rental = Rental; 
exports.validate = validateRental;
/* ============== 114.A Better Implementation (Лучшая реализация) ================== */
//index.js
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
/* ============== 115.Introduction (Вступление) ================== */
//Authentication and Authorization (Аунтификация и Авторизация)
// /api/genres
// /api/movies
// /api/customers
// /api/rentals

// Authentication
// Authorization

// Register: POST /api/users {name, email, password}
// Login: POST /api/logins

// email: {
// 	type: String,
// 	unique: true
// }
/* ============== 116.Creating the user Model (Создать пользовательскую модель) ================== */
//user.js
const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
		maxlength: 255,
		unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
		maxlength: 1024
  }
})
);

function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(5).max(255).required()
  };

  return Joi.validate(user, schema);
}

exports.User = User; 
exports.validate = validateUser;
/* ============== 117.Registering Users (Регистрация пользователей) ================== */
//index.js
const users = require('./routes/users');
app.use('/api/users', users);
//users.js
const {User, validate} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
	const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

	let user = await User.findOne({ email: req.body.email });
	if (user) return res.status(400).send('User already registered.');

	user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	});
  
	await user.save();
  
  res.send(user);
});

module.exports = router;
/* ============== 118.Using Lodash (Использование Lodash) ================== */
//https://lodash.com/
//npm i lodash
//joi-password-compexity
//https://www.npmjs.com/package/joi-password-complexity
//users.js
const _ = require('lodash');
const {User, validate} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
	const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

	let user = await User.findOne({ email: req.body.email });
	if (user) return res.status(400).send('User already registered.');

	user = new User(_.pick(req.body, ['name', 'email', 'password']));
  
	await user.save();

  res.send(_.pick(user, ['_id', 'name', 'email']));
});

module.exports = router;
/* ============== 119.Hashing Passwords (Хеширование паролей) ================== */
//npm i bcrypt - Библиотека, которая поможет вам хэшировать пароли
// 1234 -> abcd
const bcrypt = require('bcrypt');

async function run() {
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash('1234', salt);
}

run();
//users.js
const bcrypt = require('bcrypt');
//...
user = new User(_.pick(req.body, ['name', 'email', 'password']));
const salt = await bcrypt.genSalt();
user.password = await bcrypt.hash(user.password, salt);
/* ============== 120.Authenticating Users (Аунтификация пользователя) ================== */
//auth.js
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email or password.');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password');

    res.send(true);
});

function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(req, schema);
}

module.exports = router;
/* ============== 121.Testing the Authentication (Тестирование аунтификации) ================== */
/* ============== 122.JSON Web Tokens ================== */
//https://jwt.io/
//AUTHENTICATION
//Client -> Login <- JWT Server
/* ============== 123.Generating Authentication Tokens (Генерация токенов аутентификации) ================== */
//npm i jsonwebtoken
//auth.js
const token = jwt.sign({ _id: user._id }, 'jwtPrivateKey');
res.send(token);
/* ============== 124.Storing Secrets in Environment Variables (Хранение секретов в переменных среды) ================== */
//npm i config
//https://www.npmjs.com/package/config
//index.js
if (!config.get('jwtPrivateKey')) {
    console.log('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}
//auth.js
const token = jwt.sign({ _id: user._id }, config.get('jwtPrivateKey'));
res.send(token);
//set vidly_jwtPrivateKey=mySecret
/* ============== 125.Setting Response Headers (Настройка заголовков ответа) ================== */
//users.js
const token = jwt.sign({ _id: user._id }, config.get('jwtPrivateKey'));
res.header('z-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
/* ============== 126.Encapsulating Logic in Mongoose Models (Инкапсулирующая логика в моделях Mongoose) ================== */
//Information Expert Principle (Информационный Экспертный Принцип)
//user.js
userShema.methods.generateAuthToken = function() {
	const token = jwt.sign({ _id: this._id }, config.get('jwtPrivateKey'));
	return token;
};
//auth.js/users.js
const token = user.generateAuthToken();
/* ============== 127.Authorization Middleware (Средство авторизации) ================== */
//middleware/auth.js
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function auth(req, res, next) {
	const token = req.header('z-auth-token');
	if (!token) res.status(401).send('Access denied. No token provided.');

	try {
		const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
		req.user = decoded;
		next();		
	}	
	catch(ex) {
		res.status(400).send('Invalid token.');
	}
}
/* ============== 128.Protecting Routes (Защита маршрутов) ================== */
//genres.js
const auth = require('../middleware/auth');
//...
router.post('/', auth,async (req, res) => {	

  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let genre = new Genre({ name: req.body.name });
  genre = await genre.save();
  
  res.send(genre);
});
/* ============== 129.Getting the Current User (Получение текущего пользователя) ================== */
//users.js
router.get('/me', auth, async (req, res) => {
	const user = await User.findById(req.user._id).select('-password');
	res.send(user);
});
/* ============== 130.Logging Out Users (Выход из системы пользователей) ================== */
/* ============== 131.Role Based Authorization (Ролевая авторизация) ================== */
//middleware/admin.js
module.exports = function (req, res, next) {
	// req.user
	// 401 Unathorized (неразрешенный)
	// 403 Forbidden (запрещено)
	if (!req.user.isAdmin) return res.status(403).send('Access denied.');
	next();
}
//genres.js
router.delete('/:id', [auth, admin], async (req, res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id);

  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  res.send(genre);
});
//user.js
const userShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
		maxlength: 255,
		unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
		maxlength: 1024
	},
	isAdmin: Boolean,	
});

userShema.methods.generateAuthToken = function() {
	const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
	return token;
};
/* ============== 132.Testing the Authorization (Тестирование аунтификации) ================== */
/* ============== 133.Introduction (Вступление) ================== */
// Handling and Logging Errors (Обработка и регистрация ошибок)
// HANDLING ERRORS (ОШИБКИ ОБРАЩЕНИЯ)
// Send a friendly error (Отправить дружескую ошибку)
// Log the exception (Зарегистрировать исключение)
/* ============== 134.Handling Rejected Promises (Обработка отклоненных обещаний) ================== */
//genres.js
router.get('/', async (req, res) => {

	try {
		const genres = await Genre.find().sort('name');
  res.send(genres);
	} catch(ex) {
		// Log the exception (Зарегистрировать исключение)
		res.status(500).send('Something failed.');
	}
});
/* ============== 135.Express Error Middleware (Промежуточное По Экспресс-Ошибок) ================== */
//genres.js
router.get('/', async (req, res, next) => {
	try {
		const genres = await Genre.find().sort('name');
  res.send(genres);
	} catch(ex) {		
		next(ex);
	}
});
//index.js
app.use(error);
//middleware/error.js
module.exports = function(err, req, res, next) {
	res.status(500).send('Something failed.');
};
/* ============== 136.Removing Try_Catch docs (Удаление документов Try_Catch) ================== */
//middleware/async.js
module.exports = function (handler) {
	return async (req, res, next) => {
		try {
			await handler(req, res);
		} catch (ex) {
			next(ex);
		}
	};	
}
//genres.js
router.get('/', asyncMiddleware(async (req, res) => {
	const genres = await Genre.find().sort('name');
	res.send(genres);
}));
/* ============== 137.Express Async Errors (Экспресс асинхронные ошибки) ================== */
// npm i express-async-errors - https://www.npmjs.com/package/express-async-errors
//index.js
require('express-async-errors');
/* ============== 138.Logging Errors (Ошибки регистрации) ================== */
//npm i winston - https://www.npmjs.com/package/winston
//TRANSPORT 
//console | file | http => MongoDB | CouchDB | Redis | Loggly
//index.js
const winston = require('winston');

winston.add(winston.transports.File, { filename: 'logfile.log' });
//error.js
const winston = require('winston');

module.exports = function(err, req, res, next) {
	winston.error(err.message, err);
	// error
	// warn
	// info
	// verbose
	// debug
	// silly 
	res.status(500).send('Something failed.');
};
//genres.js
router.get('/', async (req, res) => {
	throw new Error('Could not get gendres.');
	const genres = await Genre.find().sort('name');
	res.send(genres);
});
/* ============== 139.Logging to MongoDB (Вход в MongoDB) ================== */
//npm i winston-mongodb - https://www.npmjs.com/package/winston-mongodb
//index.js
requrie('winston-mongodb');
winston.add(winston.transports.MongoDB, { db: 'mongodb://localhost/vidly' });
//
winston.add(winston.transports.MongoDB, { db: 'mongodb://localhost/vidly', level: 'error' });
/* ============== 140.Uncaught Exceptions (Неучитанные исключения) ================== */
//index.js
process.on('uncaughtException', (ex) => {
	console.log('WE GOT AN UNCAUGHT EXCEPTION');
	winston.error(ex.message, ex);
});
/* ============== 141.Unhandled Promise Rejections (Необработанные отклонения обещания) ================== */
winston.handleExceptions(new winston.transports.File({ filename: 'uncaughtExceptions.log' }));

process.on('unhandledRejection', (ex) => {
	winston.error(ex.message, ex);
	process.exit(1);
});
/////
process.on('unhandledRejection', (ex) => {
	throw ex;
});
/* ============== 142.Error Handling Recap (Повторная обработка ошибок) ================== */
/* ============== 143.Refactoring Index.js - Extracting Routes (Рефакторинг Index.js - Извлечение маршрутов) ================== */
//startup/routes.js
const express = require('express');
const genres = require('../routes/genres');
const customers = require('../routes/customers');
const movies = require('../routes/movies');
const rentals = require('../routes/rentals');
const users = require('../routes/users');
const auth = require('../routes/auth');
const error = require('../middleware/error');

module.exports = function (app) {
	app.use(express.json());
	app.use('/api/genres', genres);
	app.use('/api/customers', customers);
	app.use('/api/movies', movies);
	app.use('/api/rentals', rentals);
	app.use('/api/users', users);
	app.use('/api/auth', auth);

	app.use(error);
}
//index.js
require('./startup/routes')(app);
/* ============== 144.Extracting the DB Logic (Извлечение логики БД) ================== */
//startup/db.js
const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
	mongoose.connect('mongodb://localhost/vidly')
	.then(() => winston.info('Connected to MongoDB...'));	
}
//index.js
require('./startup/db')();
/* ============== 145.Logging (логирование) ================== */
//startup/logging.js
const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

module.exports = function(){
	winston.handleExceptions(
		new winston.transports.File({ filename: 'uncaughtExceptions.log' })
	);
	
	process.on('unhandledRejection', (ex) => {
		throw ex;
	});
	
	const p = Promise.reject(new Error('something failed miserably!'));
	p.then(() => console.log('Done'));
	
	winston.add(winston.transports.File, { filename: 'logfile.log' });
	winston.add(winston.transports.MongoDB, { db: 'mongodb://localhost/vidly', level: 'error' });
}
//index.js
const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const app = express();

require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();

process.on('uncaughtException', (ex) => {
	winston.error(ex.message, ex);
	process.exit(1);
});

if (!config.get('jwtPrivateKey')) {
	console.log('FATAL ERROR: jwtPrivateKey is not defined.');
	process.exit(1);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
/* ============== 146.Extracting the Config Logic (Извлечение логики конфигурации) ================== */
//index.js
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const app = express();

require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
//startup/config.js
const config = require('config');

module.exports = function() {		
	if (!config.get('jwtPrivateKey')) {
		throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');				
	}
}
/* ============== 147.Extracting the Validation Logic (Извлечение логики проверки) ================== */
//index.js
const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));
//startup/validation.js
const Joi = require('joi');

module.exports = function() {
	Joi.objectId = require('joi-objectid')(Joi);
}
/* ============== 148.Showing Unhandled Exceptions on the Console (Отображение необработанных исключений на консоли) ================== */
//startup/logging.js
const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

module.exports = function(){
	winston.handleExceptions(
		new winston.transports.Console({ colorize: true, prettyPrint: true }),
		new winston.transports.File({ filename: 'uncaughtExceptions.log' })
	);
	
	process.on('unhandledRejection', (ex) => {
		throw ex;
	});
	
	const p = Promise.reject(new Error('something failed miserably!'));
	p.then(() => console.log('Done'));
	
	winston.add(winston.transports.File, { filename: 'logfile.log' });
	winston.add(winston.transports.MongoDB, { db: 'mongodb://localhost/vidly', level: 'error' });
}
/* ============== 149.What is Automated Testing? (Что такое автоматизированное тестирование?) ================== */
//Is it a replacement for manual testing? (Это замена для ручного тестирования?)
// Do I really need it? (Мне действительно это нужно?)
// How should i do it? (Как я должен это делать?)
// Test first (TDD) or code first? (Сначала проверить (TDD) или сначала код?)
// Mosh, I don`t know what to test! (Мош, я не знаю что тестировать!)
// What is automated testing? (Что такое автоматизированное тестирование?)
// The practice of writing code to test our code, and then run those tests in an automated fashion. (Практика написания кода для тестирования нашего кода, а затем автоматического запуска этих тестов.)
// CODE -> PRODUCTION CODE | TEST CODE
//publc float CalculateTax(int input) {
// 	if (x) return ...;
// 	if (y) return ...;
// 	return ...;
// }
//MANUAL TESTING (РУЧНОЕ ИСПЫТАНИЕ)
// Launch the app (Запустите приложение)
// Login (Логин)
// Navigate (Навигация)
// Fill out a form (Заполнить форму)
// Submit it (Отправить это)
// Verify the result (Проверьте результат)
//TESTING COST (СТОИМОСТЬ ИСПЫТАНИЙ)
//Without Automation (Без автоматизации)
//With Atomation (С автомазацией)
//AUTOMATED TESTING (АВТОМАТИЗИРОВАННОЕ ИСПЫТАНИЕ)
var result = CalculateTax(1);
Verify(result == 1.5f);
//Automated tests are repeatable (Автоматизированные тесты повторяемы)
/* ============== 150.Benefits of Automated Testing (Преимущества автоматизированного тестирования) ================== */
// BENEFITS OF AUTOMATED TESTING (ПРЕИМУЩЕСТВА АВТОМАТИЗИРОВАННОГО ИСПЫТАНИЯ)
// Test your code frequently, in less time (Проверяйте свой код часто, за меньшее время)
// Catch bugs before deploying (Ловить ошибки перед развертыванием)
// Deploy with confidence (Развертывание с уверенностью)
// Refactor with confidence (Рефакторинг с уверенностью)
// Refactoring means changing the structure of the code without changing its behavior. (Рефакторинг означает изменение структуры кода без изменения его поведения.)
// Focus more on the quality (Фокус больше на качество)
/* ============== 151.Types of Test (Типы Тестов) ================== */
//Unit (Единица измерения) | Integration (интеграция) | End-to-end (Концы с концами)
//UNIT TEST (МОДУЛЬНЫЙ ТЕСТ)
// Tests a unit of an application without its external fependencies (Тестирует единицу приложения без внешних зависимостей)
// Cheap to write (Дешево написать)
// Execute fast (Выполнить быстро)
// Don`t give a lot of confidence (Не давай много уверенности)
//INTEGRATION TEST (ИНТЕГРАЦИОННЫЙ ТЕСТ)
// Tests the application with its external dependencies (Тестирует приложение с его внешними зависимостями)
// Take longer to execute (Займет больше времени, чтобы выполнить)
// Give more confidence (Дай больше уверенности)
// An alternative (poor) definition (Альтернативное (плохое) определение)
// Class A | Class B
//END-TO-END TEST (КОНЕЦ-КОНЕЦ ТЕСТ)
// Drives an application through its UI. (Управляет приложением через его интерфейс.)
// Give you thegreatest confidence (Дать вам большую уверенность)
// Very slow (Очень медленно)
// Very brittle (Очень хрупкий)
/* ============== 152.Test Pyramid (Тестовая пирамида) ================== */
// TYPES OF TESTS (ВИДЫ ИСПЫТАНИЙ)
// Unit | Integration | End-to-end
// TEST PYRAMID
////
//1 E2E
//2 Integration
//3	Unit
// The actual ratio between unit, integration and end-to-end tests depends on yout project. (Фактическое соотношение между модульными, интеграционными и сквозными тестами зависит от вашего проекта.)
// TAKEAWAYS
// Favour unit test to e2e tests. (Избранные юнит-тесты на e2e тесты.)
// Cover unit test gaps with integration tests. (Закрывайте пробелы в модульных тестах.)
// Use end-to-end tests sparingly. (Используйте сквозные тесты экономно.)
/* ============== 153.Tooling (механическая обработка) ================== */
// LIBRARY (БИБЛИОТЕКА) | TEST RUNNER
// FRAMEWORKS
// Jasmine | Mocha - Chai - Sinon (node)| Jest (react)
// Focus on the fundamentals not the tooling (Сосредоточьтесь на основах, а не на инструментах)
/* ============== 154.Writing Your First Unit Test (Написание вашего первого модульного теста) ================== */
//npm i jest --save-dev - https://www.npmjs.com/package/jest
//npm test
//package.json
// "scripts": {
// 	"test": "jest"
// }
//node_modules/.bin/jest
//tests/lib.test.js
test('Our first test', () => {
	throw new Error('something error');
});
//npm test
/* ============== 155.Testing Numbers (Тестирование чисел) ================== */
//https://jestjs.io/
//https://jestjs.io/docs/en/using-matchers
//https://github.com/facebook/jest
//lib.test.js
const lib = require('../lib');

test('absolute - shuld return a positive number if inpout is positive', () => {
	const result = lib.absolute(1);
	expect(result).toBe(1);
});

test('absolute - shuld return a positive number if inpout is negative', () => {
	const result = lib.absolute(-1);
	expect(result).toBe(1);
});

test('absolute - shuld return 0 if inpout is 0', () => {
	const result = lib.absolute(0);
	expect(result).toBe(1);
});
/* ============== 156.Grouping Tests (Группировка тестов) ================== */
// Tests are first-class citizens in your source code (Тесты первоклассные граждане в вашем исходном коде)
//lib.test.js
const lib = require('../lib');

describe('absolute', () => {
	it('shuld return a positive number if inpout is positive', () => {
		const result = lib.absolute(1);
		expect(result).toBe(1);
	});

	it('shuld return a positive number if inpout is negative', () => {
		const result = lib.absolute(-1);
		expect(result).toBe(1);
	});

	it('shuld return 0 if inpout is 0', () => {
		const result = lib.absolute(0);
		expect(result).toBe(1);
	});
});
/* ============== 157.Refactorign with Confidence (Рефакторинг с уверенностью) ================== */
//lib.js
module.exports.absolute = function(number) {
	return (number >= 0) ? number : -number;  
}
/* ============== 158.Testing Strings (Тестовые строки) ================== */
//lib.test.js
describe('greet', () => {
	it('should return the greeting message', () => {
		const result = lib.greet('Maxim');
		expect(result).toBe('Welcome Maxim');
	});
});
/////
describe('greet', () => {
	it('should return the greeting message', () => {
		const result = lib.greet('Maxim');
		expect(result).toMatch(/Maxim/);
		expect(result).toContain('Maxim');

	});
});
/* ============== 159.Testing Arrays (Тестирование массива) ================== */
describe('getCurrencies', () => {
	it('should return supported currencies', () => {
		const result = lib.getCurrencies();
		// Too general
		expect(result).toBeDefined();
		expect(result).not.toBeNull();
		// Too specific
		expect(result[0]).toBe('USD');
		expect(result[1]).toBe('AUD');
		expect(result[2]).toBe('EUR');
		expect(result.length).toBe(3);
		// Proper way
		expect(result).toContain('USD');
		expect(result).toContain('AUD');
		expect(result).toContain('EUR');
		// Ideal way
		expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']));
	});
});
/* ============== 160.Testing Objects (Тестирование Объекта) ================== */
describe('getProduct', () => {
	it('should return the product eith the given id', () => {
		const result = lib.getProduct(1);
		expect(result).toEqual({ id: 1, price: 10 });
		expect(result).toMatchObject({ id: 1, price: 10 });
		expect(result).toHaveProperty( 'id', '1');
	});
});
/* ============== 161.Testing Exceptons (Тестирование исключений) ================== */
describe('registerUser', () => {
	it('should throw if username is falsy', () => {
		// Null
		// undefined
		// NaN
		// ''
		// 0
		// false				
		const args = [null, undefined, NaN, '', 0, false];
		args.forEach(a => {
			expect(() => { lib.registerUser(a) }).toThrow();
		});
	});

	it('should return a user object if valid username is passed', () => {
		const result = lib.registerUser('maxim');
		expect(result).toMatchObject({ username: 'maxim' });		
		expect(result.id).toBeGreaterThan(0);		
	});
});
/* ============== 162.Continually Running Tests (Постоянно запущенные тесты) ================== */
//package.json
// "scripts": {
// 	"test": "jest --watchAll"
// }
//npm test
/* ============== 163.Exercise - Testing the FizzBuzz (Упражнение - Тестирование FizzBuzz) ================== */
//exercise.js

module.exports.fizzBuzz = function(input) { 
  if (typeof input !== 'number') 
    throw new Error('Input should be a number.');
    
  if ((input % 3 === 0) && (input % 5) === 0)
    return 'FizzBuzz';

  if (input % 3 === 0)
    return 'Fizz';

  if (input % 5 === 0)
    return 'Buzz'; 

  return input; 
}
//exercise1.test.js
const lib = require('../exercise1');

describe('fizzbuzz', () => {
	it('should throw an exception if input is not a number', () => {
		lib.fizzBuzz('a');
		expect(() => { lib.fizzBuzz('a') }).toThrow();
		expect(() => { lib.fizzBuzz(null) }).toThrow();
		expect(() => { lib.fizzBuzz(undefined) }).toThrow();
		expect(() => { lib.fizzBuzz({}) }).toThrow();
	});

	it('should return FizzBuzz if input is divisible by 3 and 5', () => {
		const result = lib.fizzBuzz(15);
		expect(result).toBe('FizzBuzz');
	});
	
	it('should return Fizz if input is divisible by 3', () => {
		const result = lib.fizzBuzz(3);
		expect(result).toBe('Fizz');
	});
	
	it('should return Buzz if input is divisible by 5', () => {
		const result = lib.fizzBuzz(5);
		expect(result).toBe('Buzz');
	});
	
	it('should return input if input is divisible by 3 or 5', () => {
		const result = lib.fizzBuzz(1);
		expect(result).toBe(1);
	});
});
/* ============== 164.Creating Simple Mock Functions (Создание простых макетных функций) ================== */
describe('applyDiscount', () => {
	it('should apply 10% discount if customer has more than 10 points', () => {
		db.getCustomerSync = function(customerId) {
			console.log('Fake reading customer...');
			return { id: customerId, points: 20 };
		}
		const order = { customerId: 1, totalPrice: 10 };
		lib.applyDiscount(order);
		expect(order.totalPrice).toBe(9);
	});
});
/* ============== 165.Interaction Testing (Тестирование взаимодействия) ================== */
describe('notifyCustomer', () => {
	it('should send an email to the customer', () => {
		db.getCustomerSync = function (customerId) {
			return { email: 'a' }
		}

		let mailSent = false;
		mail.send = function (email, message) {
			mailSent = true;
		}

		lib.notifyCustomer({ customerId: 1 });

		expect(mailSent).toBe(true);
	});
});
/* ============== 166.Jest Mock Functions ================== */
describe('notifyCustomer', () => {
	it('should send an email to the customer', () => {
		db.getCustomerSync = jest.fn().mockRejectedValue({ email: 'a' });

		mail.send = jest.fn();

		// const mockFucnction = jest.fn();
		// // mockFucnction.mockReturnValue(1);
		// // mockFucnction.mockResolvedValue(1);
		// mockFucnction.mockRejectedValue(new Error('...'));
		// const result = mockFucnction();

		// db.getCustomerSync = function (customerId) {
		// 	return { email: 'a' }
		// }

		// let mailSent = false;
		// mail.send = function (email, message) {
		// 	mailSent = true;
		// }

		lib.notifyCustomer({ customerId: 1 });

		// expect(mail.send).toHaveBeenCalled();
		expect(mail.send.mock.calls[0][0]).toBe('a');
		expect(mail.send.mock.calls[0][1]).toMatch(/order/);
		// expect(mail.send).toHaveBeenCalledWith('a', '...');
	});
});
/* ============== 167.What to Unit Test (Что для модульного теста) ================== */
/* ============== 168.Exercise (Упражнение) ================== */
//vidly
//npm i jest --save-dev
//"test": "jest --watchAll"
//user.test.js
const { User } = require('../../../models/user');
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');

describe('user.generaAuthToken', () => {
	it('should return a valid JWT', () => {
		const payload = { _id: new mongoose.Types.ObjectId(), isAdmin: true };
		const user = new User();
		const token = user.generateAuthToken();
		const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
		expect(decoded).toMatchObject(payload);
	});
});
/* ============== 169.Introduction (Вступление) ================== */
/* ============== 170.Preparing the app (Подготовка приложения) ================== */
//index.js
require('./startup/logging')();
//package.json
//"test": "jest --watchAll --verbose"
//logging.js
//// winston.add(winston.transports.MongoDB, { db: 'mongodb://localhost/vidly', level: 'error' });
/* ============== 171.Setting Up the Test DB (Настройка тестовой БД) ================== */
//db.js
const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
	const db = config.get('db');
	mongoose.connect(config.get('db'))
	.then(() => winston.info(`Connected to ${db}...`));	
}
//test.json
// {
// 	"jwtPrivateKey": "1234",
// 	"db": "mongodb://localhost/test_vidly"
// }
//NODE_ENV=test node index.js
/* ============== 172.Your First Integration Test (Ваш первый интеграционный тест) ================== */
//npm i supertest --save-dev
//index.js
const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const port = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;
//genres.test.js
const request = require('supertest');
let server;

describe('/api/genres', () => {
	beforeEach(() => { server = require('../../index'); })
	afterEach(() => { server.close(); });

	describe('GET /', () => {
		it('should return all genres', async () => {
			const res = await request(server).get('/api/genres');
			expect(res.status).toBe(200);
		});
	});
});
/* ============== 173.Populating the Test DB (Заполнение тестовой базы данных) ================== */
//genres.test.js
const request = require('supertest');
const { Genre } = require('../../models/genre');
let server;

describe('/api/genres', () => {
	beforeEach(() => { server = require('../../index'); })
	afterEach(async () => {
		server.close();
		await Genre.remove({});
	});

	describe('GET /', () => {
		it('should return all genres', async () => {
			await Genre.collection.insertMany([
				{ name: 'genre1' },
				{ name: 'genre2' },
			]);
			const res = await request(server).get('/api/genres');
			expect(res.status).toBe(200);
			expect(res.body.length).toBe(2);
			expect(res.body.some(g => g.name === 'genre1')).toBeTruthy();
			expect(res.body.some(g => g.name === 'genre2')).toBeTruthy();
		});
	});
});
/* ============== 174.Testing Routes with Parameters (Тестирование маршрутов с параметрами) ================== */
//genres.test.js
const request = require('supertest');
const { Genre } = require('../../models/genre');
let server;

describe('/api/genres', () => {
	beforeEach(() => { server = require('../../index'); })
	afterEach(async () => {
		server.close();
		await Genre.remove({});
	});

	describe('GET /', () => {
		it('should return all genres', async () => {
			await Genre.collection.insertMany([
				{ name: 'genre1' },
				{ name: 'genre2' },
			]);
			const res = await request(server).get('/api/genres');
			expect(res.status).toBe(200);
			expect(res.body.length).toBe(2);
			expect(res.body.some(g => g.name === 'genre1')).toBeTruthy();
			expect(res.body.some(g => g.name === 'genre2')).toBeTruthy();
		});
	});

	describe('GET /:id', () => {
		it('should return a genre if valid id is passed', async () => {
			const genre = new Genre({ name: 'genre1' });
			await genre.save();

			const res = await request(sever).get('/api/genres/' + genre._id);
			expect(res.status).toBe(200);
			// expect(res.body).toMatchObject(genre);
			expect(res.body).toHaveProperty('name', genre.name);
		});
	});
});
/* ============== 175.Validating Object ID`s (Проверка идентификаторов объектов) ================== */
//genres.js
router.get('/:id', async (req, res) => {
	if (!mongoose.Types.ObjectId.isValid(rq.params.id))
		return res.status(404).send('Invalid ID.');

	const genre = await Genre.findById(req.params.id);

	if (!genre) return res.status(404).send('The genre with the given ID was not found.');

	res.send(genre);
});
//genres.test.js
it('should return 404 if invalid id is passed', async () => {			
	const res = await request(sever).get('/api/genres/1');
	expect(res.status).toBe(404);						
});
/* ============== 176.Refactoring with Confidence (Рефакторинг с уверенностью) ================== */
//middleware/validateObjectId.js
const mongoose = require('mongoose');

module.exports = function (req, res, next) {
	if (!mongoose.Types.ObjectId.isValid(rq.params.id))
		return res.status(404).send('Invalid ID.');
	next();
}
//genres.js
router.get('/:id', validateObjectId, async (req, res) => {


	const genre = await Genre.findById(req.params.id);

	if (!genre) return res.status(404).send('The genre with the given ID was not found.');

	res.send(genre);
});
/* ============== 177.Testing the Authorization (Тестирование авторизации) ================== */
//genres.test.js
describe('POST /', () => {
	it('should return 401 if client is not logged in', async () => {
		const res = await request(server).post('/api/genres').send({ name: 'genre1' });
		expect(res.status).toBe(401);
	});
});
/* ============== 178.Testing Invalid Inputs (Тестирование неверных входов) ================== */
it('should return 400 if genre is less than 5 characters', async () => {
	const token = new User().generateAuthToken();

	const res = await request(server)
		.post('/api/genres')
		.set('x-auth-token', token)
		.send({ name: '1234' });
	expect(res.status).toBe(400);
});

it('should return 400 if genre is more than 50 characters', async () => {
	const token = new User().generateAuthToken();

	const name = new Array(52).join('a');
	const res = await request(server)
		.post('/api/genres')
		.set('x-auth-token', token)
		.send({ name: name });
	expect(res.status).toBe(400);
});
/* ============== 179.Testing the Happy Paths (Тестирование счастливых путей) ================== */
it('should save the genre if it is valid', async () => {
	const token = new User().generateAuthToken();
	
	const res = await request(server)
		.post('/api/genres')
		.set('x-auth-token', token)
		.send({ name: 'genre1' });

	const genre = await Genre.find({ name: 'genre1' });

	expect(genre).not.toBeNull();
});

it('should return the genre if it is valid', async () => {
	const token = new User().generateAuthToken();
	
	const res = await request(server)
		.post('/api/genres')
		.set('x-auth-token', token)
		.send({ name: 'genre1' });

	expect(res.body).toHaveProperty('_id');
	expect(res.body).toHaveProperty('name', 'genre1');
});
/* ============== 180.Writing Clean Tests (Написание чистых тестов) ================== */
// Define the happy path, and then in each test, we change (Определите счастливый путь, и затем в каждом тесте мы меняем)
// one parameter that clearly aligns with the name of the (один параметр, который четко совпадает с именем)
// test.
/* ============== 181.Testing the Auth Middleware (Тестирование Auth Middleware) ================== */
//auth.test.js
const {User} = require('../../models/user');
const supertest = require('supertest');

describe('auth middleware', () => {
    beforeEach(() => { server = require('../../index'); });
    afterEach(async () => {
        await Genre.remove({});
        server.close();
    });

    let token;
    const exec = async () => {
        await request(server)
            .post('/api/genres')
            .set('x-auth-token', token)
            .send({ name: 'genre1' });
    };

    beforeEach(() => {
        token = new User().generateAuthToken();
    });

    it('should return 401 if no token is provided', async () => {
        token = '';
        const res = await exec();
        expect(res.status).toBe(401);
    });

    it('should return 400 if token is invalid', async () => {
        token = 'a';
        const res = await exec();
        expect(res.status).toBe(400);
    });

    it('should return 200 if token is invalid', async () => {
        const res = await exec();
        expect(res.status).toBe(200);
    });
});
/* ============== 182.Unit Testing the Auth Middleware (Модульное тестирование промежуточного программного обеспечения ================== */
//middleware/auth.test.js
const {User} = require('../../../models/user');
const auth = require('../../../middleware/auth');
const mongoose = require('mongoose');

describe('auth middleware', () => {
    it('should populate req.user with the payload of a valid JWT', () => {
        const user = { _id: mongoose.Types.ObjectId().toHexString(), isAdmin: true };
        const token = new User().generateAuthToken();
        const req = {
            header: jest.fn().mockReturnValue(token)
        };
        const res = {};
        const next = jest.fn();

        auth(req, res, next);

        expect(req.user).toMatchObject(user);
    });
});
/* ============== 183.Code Coverage (Покрытие кода) ================== */
//package.json
// "test": "jest --watchAll --verbose --coverage"
//npm test
/* ============== 184.Exercise (Упражнение) ================== */
/* ============== 185.What is Test-driver Development(TDD)? (Что такое разработка тест-драйвера?) ================== */
//With TDD you write your tests before writing the production code (С TDD вы пишете свои тесты перед написанием производственного кода)
//Test-driven Development
//Write a failing test. (Напишите провальный тест.)
//Write the simplest code to make the test pass. (Напишите самый простой код для прохождения теста.)
//Refactor if necessary. (Рефакторинг при необходимости.)
//Benefits of TDD (Преимущества TDD)
//Testable Source Code (Тестируемый исходный код)
//Full Coverage by Tests (Полное покрытие тестами)
//Simpler Implementation (Упрощенная реализация)
//Test first / code first (Сначала проверь / сначала код)
/* ============== 186.Implementing the Returns (Реализация возвращений) ================== */
// POST /api/returns {customerId, movieId}
/* ============== 187.Test Cases (Тестовые случаи) ================== */
// Return 401 if client is not logged in
// Return 400 if customerId is not provided
// Return 400 if movieId is not provided
// Return 404 if no rental found for this cutomer/movie
// Return 400 if rental already processed
// Return 200 if valid request
// Set the return date
// Calculate the rental fee
// Increase the stock
// Return the rental
/* ============== 188.Populating the Database (Заполнение базы данных) ================== */
//returns.test.js
const {Rental} = require('../../models/rental');
const mongoose = require('mongoose');

describe('/api/returns', () => {
    let server;
    let customerId;
    let movieId;
    let rental;

    beforeEach(async () => {
        serve = require('../../index');

        customerId = mongoose.Types.ObjectId();
        movieId = mongoose.Types.ObjectId();

        rental = new Rental({
            customer: {
                _id: customerId,
                name: '12345',
                phone: '12345'
            },
            movie: {
                _id: movieId,
                title: '12345',
                dailyRentalRate: 2
            }
        });
        await rental.save();
    });
    afterEach(async () => {
        server.close();
        await Rental.remove({});
    });

    it('should work!', async () => {
        const result = await Rental.findById(rental.id);
        expect(result).not.toBeNull();
    })
});
/* ============== 189.Testing the Authorization (Тестирование авторизации) ================== */
//returns.test.js
it('should return 401 if client is not logged in!', async () => {
    const res = await request(server)
        .post('/api/returns')
        .send({ customerId, movieId });

    expect(res.status).toBe(401);

})
//returns.js
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    res.status(401).send('Unauthorized');
});

module.exports = router;
/* ============== 190.Testing the Input (Тестирование Ввода) ================== */
//returns.js
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    if (!req.body.customerId) return res.status(400).send('customerId not provider');
    if (!req.body.movieId) return res.status(400).send('movieId not provider');
    res.status(401).send('Unauthorized');
});

module.exports = router;
//returns.test.js
it('should return 400 if customerId is not provided', async () => {

    const token = new User().generateAuthToken();
    const res = await request(server)
        .post('/api/returns')
        .set('x-auth-token', token)
        .send({ customerId, movieId });

    expect(res.status).toBe(400);

});

it('should return 400 if movieId is not provided', async () => {

    const token = new User().generateAuthToken();
    const res = await request(server)
        .post('/api/returns')
        .set('x-auth-token', token)
        .send({ customerId });

    expect(res.status).toBe(400);

});
/* ============== 191.Refactoring Tests (Рефакторин тестов) ================== */
//returns.test.js
const request = require('supertest');
const {Rental} = require('../../models/rental');
const {User} = require('../../models/user');
const mongoose = require('mongoose');

describe('/api/returns', () => {
    let server;
    let customerId;
    let movieId;
    let rental;
    let token;

    const exec = () => {
        return request(server)
            .post('/api/returns')
            .set('x-auth-token', token)
            .send({ customerId, movieId });
    };

    beforeEach(async () => {
        serve = require('../../index');

        customerId = mongoose.Types.ObjectId();
        movieId = mongoose.Types.ObjectId();
        token = new User().generateAuthToken();

        rental = new Rental({
            customer: {
                _id: customerId,
                name: '12345',
                phone: '12345'
            },
            movie: {
                _id: movieId,
                title: '12345',
                dailyRentalRate: 2
            }
        });
        await rental.save();
    });
    afterEach(async () => {
        server.close();
        await Rental.remove({});
    });

    it('should return 401 if client is not logged in!', async () => {
        const res = await request(server)
            .post('/api/returns')
            .send({ customerId, movieId });

        expect(res.status).toBe(401);

    });

    it('should return 400 if customerId is not provided', async () => {

        customerId = '';

        const res = await exec();

        expect(res.status).toBe(400);

    });

    it('should return 400 if movieId is not provided', async () => {

        movieId = '';
        const res = await exec();
        expect(res.status).toBe(400);

    });
});
/* ============== 192.Looking Up an Object (Поиск объекта) ================== */
//returns.js
const {Rental} = require('../models/rental');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    if (!req.body.customerId) return res.status(400).send('customerId not provider');
    if (!req.body.movieId) return res.status(400).send('movieId not provider');

    Rental.findOne({
        'customer._id': req.body.customerId,
        'movie._id': req.body.movieId,
    });
    if (!rental) return res.status(404).send('');

    res.status(401).send('Unauthorized');
});

module.exports = router;
/* ============== 193.Testing if Rental Processed (Тестирование если прокат обработан) ================== */
//returns.test.js
it('should return 400 if return is already processed', async () => {
    reantal.dateReturned = new Date();
    await rental.save();

    const res = await exec();

    expect(res.status).toBe(400);

});
//returns.js
if (rental.dateReturned) return res.status(400).send('Return already');
/* ============== 194.Testing the Valid Request (Тестирование действительного запроса) ================== */
//returns.test.js
it('should return 200 if we have a valid request', async () => {
    const res = await exec();

    expect(res.status).toBe(200);

});
//returns.js
return res.status(200).send();
/* ============== 195.Testing the Return Date (Тестирование возвратной даты) ================== */
//returns.test.js
it('should set the returnDate id input is valid', async () => {
    const res = await exec();

    const retalInDb = await Rental.findById(rental._id);
    const diff = new Date() - retalInDb.dateReturned;
    expect(diff).toBeDefined(10 * 1000);

});
/* ============== 196.Testing the Return Fee (Тестирование возвратной плата) ================== */
//npm i moment
//returns.js
rental.dateReturned = new Date();
const rentalDays = moment().diff(rental.dateOut, 'days');
rental.rentalFee = rentalDays * rental.movie.dailyRentalRate;
//returns.test.js
it('should set the returnFee if input is valid', async () => {
    // dateOut (current time)
    rental.dateOut = moment().add(-7, 'days').toDate();// 7 days ago
    await rental.save();
    const res = await exec();

    const retalInDb = await Rental.findById(rental._id);
    expect(retalInDb.rentalFee).toBeDefined(14);

});
/* ============== 197.Testing the Movie Stock (Тестирование фильма) ================== */
//returns.test.js
const moment = require('moment');
const request = require('supertest');
const {Rental} = require('../../models/rental');
const {User} = require('../../models/user');
const {Movie} = require('../../models/movie');
const mongoose = require('mongoose');

describe('/api/returns', () => {
    let server;
    let customerId;
    let movieId;
    let rental;
    let token;
    let movie;

    const exec = () => {
        return request(server)
            .post('/api/returns')
            .set('x-auth-token', token)
            .send({ customerId, movieId });
    };

    beforeEach(async () => {
        serve = require('../../index');

        customerId = mongoose.Types.ObjectId();
        movieId = mongoose.Types.ObjectId();
        token = new User().generateAuthToken();

        movie = new Movie({
            _id: movieId,
            title: '12345',
            dailyRentalRate: 2,
            genre: { name: '12345' },
            numberInStock: 10
        });
        await movie.save();

        rental = new Rental({
            customer: {
                _id: customerId,
                name: '12345',
                phone: '12345'
            },
            movie: {
                _id: movieId,
                title: '12345',
                dailyRentalRate: 2
            }
        });
        await rental.save();
    });
    afterEach(async () => {
        server.close();
        await Rental.remove({});
        await Movie.remove({});
    });

    it('should return 401 if client is not logged in!', async () => {
        const res = await request(server)
            .post('/api/returns')
            .send({ customerId, movieId });

        expect(res.status).toBe(401);

    });

    it('should return 400 if customerId is not provided', async () => {

        customerId = '';

        const res = await exec();

        expect(res.status).toBe(400);

    });

    it('should return 400 if movieId is not provided', async () => {

        movieId = '';
        const res = await exec();
        expect(res.status).toBe(400);

    });

    it('should return 404 if no rental found for the customer/movie', async () => {
        await Rental.remove({});
        movieId = '';
        const res = await exec();
        expect(res.status).toBe(400);

    });

    it('should return 400 if return is already processed', async () => {
        reantal.dateReturned = new Date();
        await rental.save();

        const res = await exec();

        expect(res.status).toBe(400);

    });

    it('should return 200 if we have a valid request', async () => {
        const res = await exec();

        expect(res.status).toBe(200);

    });

    it('should set the returnDate id input is valid', async () => {
        const res = await exec();

        const retalInDb = await Rental.findById(rental._id);
        const diff = new Date() - retalInDb.dateReturned;
        expect(diff).toBeDefined(10 * 1000);

    });

    it('should set the returnFee if input is valid', async () => {
        // dateOut (current time)
        rental.dateOut = moment().add(-7, 'days').toDate();// 7 days ago
        await rental.save();
        const res = await exec();

        const retalInDb = await Rental.findById(rental._id);
        expect(retalInDb.rentalFee).toBeDefined(14);

    });

    it('should increase the movie stock if input is valid', async () => {
        const res = await exec();

        const movieInDb = await Movie.findById(movieId._id);
        expect(movieInDb.numberInStock).toBe(movie.numberInStock + 1);

    });
});
//returns.js
const moment = require('moment');
const {Rental} = require('../models/rental');
const {Movie} = require('../models/movie');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    if (!req.body.customerId) return res.status(400).send('customerId not provider');
    if (!req.body.movieId) return res.status(400).send('movieId not provider');

    Rental.findOne({
        'customer._id': req.body.customerId,
        'movie._id': req.body.movieId,
    });
    if (!rental) return res.status(404).send('');

    if (rental.dateReturned) return res.status(400).send('Return already');

    rental.dateReturned = new Date();
    const rentalDays = moment().diff(rental.dateOut, 'days');
    rental.rentalFee = rentalDays * rental.movie.dailyRentalRate;
    await rental.save();

    await Movie.update({ _id: rental.movie._id }, {
        $inc: { numberInStock: 1 }
    });
    return res.status(200).send();

});

module.exports = router;
/* ============== 198.Testing the Response (Тестирование ответа) ================== */
it('should return the rental if input is valid', async () => {
    const res = await exec();
    const rentalInDb = await Rental.findById(rental._id);
    expect(res.body).toHaveProperty('dateOut');
    expect(res.body).toHaveProperty('dateReturned');
    expect(res.body).toHaveProperty('rentalFee');
    expect(res.body).toHaveProperty('customer');
    expect(res.body).toHaveProperty('movie');

    expect(Object.keys(res.body)).toEqual(expect.arrayContaining(['dateOut', 'dateReturned', 'rentalFee', 'customer', 'movie']));
});
/* ============== 199.Refactoring the Validation Logic (Рефакторинг логику валидации) ================== */
//returns.js
const Joi = require('joi');
const moment = require('moment');
const validate = require('../middleware/validate');
const {Rental} = require('../models/rental');
const {Movie} = require('../models/movie');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();

router.post('/', [auth, validate(validateReturn)], async (req, res) => {
    const rental = await Rental.findOne({
        'customer._id': req.body.customerId,
        'movie._id': req.body.movieId,
    });
    if (!rental) return res.status(404).send('');

    if (rental.dateReturned) return res.status(400).send('Return already');

    rental.dateReturned = new Date();
    const rentalDays = moment().diff(rental.dateOut, 'days');
    rental.rentalFee = rentalDays * rental.movie.dailyRentalRate;
    await rental.save();

    await Movie.update({ _id: rental.movie._id }, {
        $inc: { numberInStock: 1 }
    });
    return res.status(200).send();

});

function validateReturn(req) {
    const schema = {
        name: Joi.objectId().required(),
        movieId: Joi.objectId().required()
    };
    return Joi.validate(req, schema);
}

module.exports = router;
//validate.js
module.exports = (validator) => {
    return (req, res, next) => {
        const { error } = validateReturn(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        next();
    }
};
/* ============== 200.Mongoose Static Methods (Мангуст Статические Методы) ================== */
//rental.js
const Joi = require('joi');
const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
    customer: {
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 50
            },
            isGold: {
                type: Boolean,
                default: false
            },
            phone: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 50
            }
        }),
        required: true
    },
    movie: {
        type: new mongoose.Schema({
            title: {
                type: String,
                required: true,
                trim: true,
                minlength: 5,
                maxlength: 255
            },
            dailyRentalRate: {
                type: Number,
                required: true,
                min: 0,
                max: 255
            }
        }),
        required: true
    },
    dateOut: {
        type: Date,
        required: true,
        default: Date.now
    },
    dateReturned: {
        type: Date
    },
    rentalFee: {
        type: Number,
        min: 0
    }
});

rentalSchema.statics.lookup = function(customerId, movieId) {
    return this.findOne({
        'customer._id': customerId,
        'movie._id': movieId,
    });
}

const Rental = mongoose.model('Rental', rentalSchema);

function validateRental(rental) {
    const schema = {
        customerId: Joi.objectId().required(),
        movieId: Joi.objectId().required()
    };

    return Joi.validate(rental, schema);
}

exports.Rental = Rental;
exports.validate = validateRental;
//returns.js
const Joi = require('joi');
const moment = require('moment');
const validate = require('../middleware/validate');
const {Rental} = require('../models/rental');
const {Movie} = require('../models/movie');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();

router.post('/', [auth, validate(validateReturn)], async (req, res) => {
    // Static: Rental.lookup
    // Instance: new User().generateAuthToken()

    const rental = await Rental.lookup(req.body.customerId, req.body.movieId);

    if (!rental) return res.status(404).send('');

    if (rental.dateReturned) return res.status(400).send('Return already');

    rental.dateReturned = new Date();
    const rentalDays = moment().diff(rental.dateOut, 'days');
    rental.rentalFee = rentalDays * rental.movie.dailyRentalRate;
    await rental.save();

    await Movie.update({ _id: rental.movie._id }, {
        $inc: { numberInStock: 1 }
    });
    return res.status(200).send();

});

function validateReturn(req) {
    const schema = {
        name: Joi.objectId().required(),
        movieId: Joi.objectId().required()
    };
    return Joi.validate(req, schema);
}

module.exports = router;
/* ============== 201.Refactoring the Domain Logic (Рефакторинг доменной логики) ================== */
//rental.js
const Joi = require('joi');
const mongoose = require('mongoose');
const moment = require('moment');


const rentalSchema = new mongoose.Schema({
    customer: {
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 50
            },
            isGold: {
                type: Boolean,
                default: false
            },
            phone: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 50
            }
        }),
        required: true
    },
    movie: {
        type: new mongoose.Schema({
            title: {
                type: String,
                required: true,
                trim: true,
                minlength: 5,
                maxlength: 255
            },
            dailyRentalRate: {
                type: Number,
                required: true,
                min: 0,
                max: 255
            }
        }),
        required: true
    },
    dateOut: {
        type: Date,
        required: true,
        default: Date.now
    },
    dateReturned: {
        type: Date
    },
    rentalFee: {
        type: Number,
        min: 0
    }
});

rentalSchema.statics.lookup = function(customerId, movieId) {
    return this.findOne({
        'customer._id': customerId,
        'movie._id': movieId,
    });
}

rentalSchema.methods.return = function () {
    this.dateReturned = new Date();

    const rentalDays = moment().diff(this.dateOut, 'days');
    this.rentalFee = rentalDays * this.movie.dailyRentalRate;
}

const Rental = mongoose.model('Rental', rentalSchema);

function validateRental(rental) {
    const schema = {
        customerId: Joi.objectId().required(),
        movieId: Joi.objectId().required()
    };

    return Joi.validate(rental, schema);
}

exports.Rental = Rental;
exports.validate = validateRental;
//returns.js
const Joi = require('joi');
const validate = require('../middleware/validate');
const {Rental} = require('../models/rental');
const {Movie} = require('../models/movie');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();

router.post('/', [auth, validate(validateReturn)], async (req, res) => {
    // Static: Rental.lookup
    // Instance: new User().generateAuthToken()

    const rental = await Rental.lookup(req.body.customerId, req.body.movieId);

    if (!rental) return res.status(404).send('');

    if (rental.dateReturned) return res.status(400).send('Return already');

    // Information Expert Principle
    rental.return();
    await rental.save();

    await Movie.update({ _id: rental.movie._id }, {
        $inc: { numberInStock: 1 }
    });
    return res.status(200).send();

});

function validateReturn(req) {
    const schema = {
        name: Joi.objectId().required(),
        movieId: Joi.objectId().required()
    };
    return Joi.validate(req, schema);
}

module.exports = router;
/* ============== 202.Introduction (Вступление) ================== */
// Deployment (развертывание)
//DEPLOYMENT OPTIONS (ВАРИАНТЫ РАЗВЕРТЫВАНИЯ)
//Paas | Docker
//Heroku
//Google Cloud Platform
//AWS
//Azure
/* ============== 203.Preparing the App for Production (Подготовка приложения к производству) ================== */
//npm i helmet
//npm i compression
//startup/prod.js
const helmet = requrie('helmet');
const compression = require('compression');

module.exports = function(app) {
    app.use(helmet());
    app.use(compression());
}
//index.js
const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
require('./startup/prod')(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;
/* ============== 204.Getting Started With Heroku (Начало работы с Heroku) ================== */
//https://www.heroku.com/
//https://devcenter.heroku.com/articles/heroku-cli
//heroku login
//(export|set) HTTP_PROXY=http://proxy.serve.com:1234
/* ============== 205.Preparing the App for Deployment (Подготовка приложения к развертыванию) ================== */
//package.json
//"start": "node index.js"
//npm start
//"engines": {
//     "node": "8.9.1"
//   },
/* ============== 206.Adding the Code to a Git Repository (Добавление кода в репозиторий Git) ================== */
//git --version
//git init
//.gitignore
//node_modules/
//coverage/
//git add .
// git commit -m "First commit."
/* ============== 207.Deploying to Heroku (Развертывание в Heroku) ================== */
//heroku create
//GIT
//Local | -> Push -> | Heroku
//git remote -v
//git push heroku master
/* ============== 208.Viewing Logs (Просмотр журналов) ================== */
//heroku logs










































































