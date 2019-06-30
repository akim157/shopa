// /* ============== 2.What is Node ================== */
// //https://ru.wikipedia.org/wiki/Node.js
// //https://metanit.com/web/nodejs/1.1.php
// //A runtime environment for executing JavaScript code (Среда выполнения для выполнения кода JavaScript)
// //We often use Node to build back-end services (Мы часто используем Node для создания внутренних сервисов)
// //Application Programming Interface (Интерфейс прикладного программирования)
// //Web App (Веб приложения)-> Back-end Service
// //Mobile App (Мобильные приложения) -> Back-end Service
// //Highly-scable, data-intensive and real-time apps (Высокопроизводительные приложения, работающие с большими объемами данных и работающие в режиме реального времени.)
// ///////////////
// //Great for prototyping and agile development (Отлично подходит для прототипирования и гибкой разработки)
// //Superfast and highly scalable (Сверхбыстрый и легко масштабируемый)
// //NODE APP
// //Built twice as fast with fewer people (Построен вдвое быстрее с меньшим количеством людей)
// //33% fewer lines of code (На 33% меньше строк кода)
// //40% fewer files (На 40% меньше файлов)
// //2x request/sec (2x запроса / сек)
// //35% faster response time (На 35% быстрее время отклика)
// ////////////
// //JavaScript everywhere (JavaScript везде)
// //Cleaner and more consistent codebase (Более чистый и последовательный код)
// //Large ecosystem of open-source libs (Большая экосистема библиотек с открытым исходным кодом)
// /* ============== 3.Node Architecture (Архитектура узла) ================== */
// //A runtime environment for executing JavaScript code (Среда выполнения для выполнения кода JavaScript)
// //Browser (Бразуре)
// //JS Code -> JS Engine (JS Движок) -> Machine code (Машинный код)
// //Engine//
// //Internet Explorer - Chakra
// //Mozila - SpiderMonkey
// //Google Chrome - v8
// //Browser -> JS Engine
// //Browser -> Runtime Environment (Среда выполнения)
// document.getElementById('');
// //Node была написана Райн Дайл в 2009 году, за основу был взят двидок v8 и написанный на языке С++
// fs.readFile();
// http.createServer();
// //Node is NOT a programming language! (Узел НЕ является языком программирования!)
// //Node is NOT a framework! (Узел не является фреймворком!)
// /* ============== 4.How Node Works (Как работает Node) ================== */
// //Highly-scalable, data-intensive and real-time apps (Приложения с высокой степенью масштабируемости, интенсивным использованием данных и приложениями реального времени)
// //Non-blocking (Неблокируемая)
// //ASYNCHRONOUS (АСИНХРОННЫЙ)
// //NODE
// //Request (Запрос) <- Single Thread (Одиночная тема) -> Request
// //Blocking (блокировка)
// //SYNCHRONOUS (Синхронная)
// //Node applications are asynchronous by default (Приложения по умолчанию являются асинхронными)
// //Event Queue (Очередь событий)
// //Node si ideal for I/O-intensive apps (Узел идеально подходит для приложений с интенсивным вводом-выводом)
// //Do not use Node for CPU-intensive apps (Не используйте Node для приложений, интенсивно использующих процессор)
// //https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B5-%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B8-%D0%B0%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-javascript-%D1%81-async-await-ba5f47f4436
// /* ============== 5.Installing Node (Установка узла) ================== */
// //node --version
// /* ============== 6.Your First Node Program (Твоя первая программа) ================== */
// //mkdir first-app
// //node app.js - запускаем скрипт на отработку
// //node не видит глобальный класс window
// /* ============== 7.Course Structure (Структура курса) ================== */
// //Node Module System (Узел Модульная система)
// //Node Package Manager (NPM)
// //Building RESTful APIs with Express (Создание RESTful API с помощью Express)
// //Asynchronous JavaScript (Асинхронный JavaScript)
// //Storing Data in MongoDB (Хранение данных в MongoDB)
// //Authentication and Authorization (Аутентификация и Авторизация)
// //Handling and Logging Erros (Обработка и регистрация ошибок)
// //Unit and Integration Testing (Модульное и интеграционное тестирование)
// //Test-driver Development (TDD) (Разработка тест-драйвера)
// //Deployment (развертывание)
// /* ============== 8.Introduction (Вступление) ================== */
// //OS (операционная система)
// //FS (файловая система)
// //event (события)
// //http (протокол http)
// /* ============== 9.Global Object (Глобальный объект) ================== */
// console.log(); //global

// setTimeout(); //таймер на выполнения callback
// clearTimeout(); //омена таймера на выполнения

// setInterval(); //таймер на выполнения callback выполняет код много раз
// clearInterval(); //отмена выполнения

// //window.console.log
// console.log();
// //window.setTimeout()
// setTimeout();
// //window.message = '';
// var message = '';
// //
// global.console.log();
// //
// var message = '';
// console.log(global.message); //undefined
// /* ============== 10.Modules (Модули) ================== */
// console.log(module);
// //node app.js
// //Модуль не пренадлежит к глобальному объекту
// //В узле каждый файл является модуль, переменные и функции опредененны в этом файле, они не доступны за пределами этого модуля
// /* ============== 11.Creating a Module (Создание модуля) ================== */
// //logger.js
// var url = 'http://mylogger.io/log';

// function log(message) {
//     //Send an HTTP request (Отправить запрос HTTP)
//     console.log(message);
// }

// module.exports.log = log;
// /* ============== 12.Loading a Module (Загрузка модуля) ================== */
// //app.js
// const logger = require('./logger');

// logger.log('message');
// /////////////////
// //logger.js
// var url = 'http://mylogger.io/log';

// function log(message) {
//     //Send an HTTP request (Отправить запрос HTTP)
//     console.log(message);
// }

// module.exports = log;
// //app.js
// const log = require('./logger');

// log('message');
// /* ============== 13.Module Wrapper Function (Функция обертки модуля) ================== */
// //logger.js
// (function(exports, require, module, __filename, __dirname) {
//     console.log(__filename);
//     console.log(__dirname);

//     var url = "http://mylogger.io/log";

//     function log(message) {
//         //Send an HTTP request (Отправить запрос HTTP)
//         console.log(message);
//     }

//     module.exports = log;
//     // module.exports.log = log;
//     // exports.log = log;
//     //
//     // exports = log; //module.exports
// });
// /* ============== 14.Path Module (Путь модуля) ================== */
// //app.js
// const path = require('path');
// var pathObj = path.parse(__filename);

// console.log(pathObj);
// /* ============== 15.OS Module (ОС Модуль) ================== */
// //app.js
// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);
// console.log('Free Memory: ' + freeMemory);

// //Template string
// // ES6 / ES2015 : ECMAScript 6

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);
// /* ============== 16.File System Module (Файловая система модуля) ================== */
// //app.js
// const fs = require('fs');

// // const files = fs.readdirSync('./');
// // console.log(files); //[ 'app.js', 'logger.js' ]

// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files); //[ 'app.js', 'logger.js' ]
// });
// /* ============== 17.Events Module (События модуль) ================== */
// //A signal that something has happened (Сигнал о том, что что-то случилось)
// //Example
// //HTTP -> Event:New Request
// //Class -> Human
// //Object -> John
// //app.js
// const EventEmitter = require('events'); //class, not function
// const emitter = new EventEmitter();

// //Register a listener (Зарегистрировать слушателя)
// emitter.on('messageLogged', function() {
//     console.log('Listener called');
// });


// //Raise an event (Поднять событие)
// emitter.emit('messageLogged');

// //Making a noise, produce - signalling (Шуметь, производить - сигнализация)
// /* ============== 18.Events Arguments (События аргументов) ================== */
// //app.js
// const EventEmitter = require('events'); //class, not function
// const emitter = new EventEmitter();

// //Register a listener (Зарегистрировать слушателя)
// emitter.on('messageLogged', function(arg) { //e , eventArg
//     console.log('Listener called', arg);
// });


// //Raise an event (Поднять событие)
// // emitter.emit('messageLogged', 1, 'url');
// emitter.emit('messageLogged', { id: 1, url: 'http://'});

// //Making a noise, produce - signalling (Шуметь, производить - сигнализация)
// //app.js
// const EventEmitter = require('events'); //class, not function
// const emitter = new EventEmitter();

// //Register a listener (Зарегистрировать слушателя)
// emitter.on('messageLogged', arg => console.log('Listener called', arg));


// //Raise an event (Поднять событие)
// // emitter.emit('messageLogged', 1, 'url');
// emitter.emit('messageLogged', { id: 1, url: 'http://' });

// //Raise: logging (data: message) (Поднять: регистрация (данные: сообщение))
// /* ============== 19.Extending Event Emitter (Расширение источника событий) ================== */
// //logger.js
// const EventEmitter = require('events'); //class, not function

// var url = "http://mylogger.io/log";

// class Logger extends EventEmitter {
// 	log(message) {
// 		//Send an HTTP request (Отправить запрос HTTP)
// 		console.log(message + 1);
		
// 		//Raise an event (Поднять событие)
// 		this.emit('messageLogged', { id: 1, url: 'http://' });
// 	}
// }


// module.exports = Logger;
// //app.js
// const EventEmitter = require('events'); //class, not function

// const Logger = require('./logger');
// const logger = new Logger();

// //Register a listener (Зарегистрировать слушателя)
// logger.on('messageLogged', (arg) => { 
// 	console.log('Listener called', arg); 
// });

// logger.log('message');
// /* ============== 20.HTTP Module (HTTP Модуль) ================== */
// server.listen(3000); //Запускает HTTP-сервер, прослушивающий соединения. Этот метод идентичен server.listen () из net.Server. 3000 - порт
// //app.js
// const http = require('http');

// const server = http.createServer();

// server.on('connection', (socket) => {
// 	console.log('New connection...');
// });

// server.listen(3000);

// console.log('Listening on port 3000...');
// //app.js
// const http = require('http');

// const server = http.createServer((req, res) => {
// 	if (req.url === '/') {
// 		res.write('Hello World');
// 		res.end();
// 	}

// 	if (req.url === '/api/courses') {
// 		res.write(JSON.stringify([1 ,2 ,3]));
// 		res.end();
// 	}
// });

// server.listen(3000);

// console.log('Listening on port 3000...');
// /* ============== 21.Introduction (Вступление) ================== */
// //Node Package Manager (NPM) (Узловой пакетный менеджер)
// //https://www.npmjs.com/
// //npm -v
// //node -v
// //sudo npm i -g npm@5.5.1
// /* ============== 22.Package.json ================== */
// //mkdir npm-demo
// //cd npm-demo
// //npm init - создаем package.json
// //npm init --yes
// /* ============== 23.Instaling a Node Package (Установка узла пакета) ================== */
// //npm i underscore - https://www.npmjs.com/package/underscore
// //npm i underscore --save
// /* ============== 24.Using a Package (Использование пакета) ================== */
// //https://underscorejs.org/
// //http://underscorejs.ru/#contains
// //index.js
// var _ = require('underscore'); //underscore.js|unserscore/index.js

// //Core module (Ядро модуля)
// //File or folder (Файл или папка)
// //node_modules (узел модулей)

// var result = _.contains([1,2,3], 2);
// console.log(result);
// /* ============== 25.Package Dependencies (Зависимости пакетов) ================== */
// //npm i mongoose - https://code.tutsplus.com/ru/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527
// //ls node_modules - unix
// //dir node_modules - window
// /* ============== 26.NPM Packages and Source Control (Пакеты NPM и контроль версий) ================== */
// //npm i
// //git init (Эта команда создаёт в текущем каталоге новый подкаталог с именем .git содержащий все необходимые файлы репозитория — основу Git-репозитория.)
// //git status 
// //.gitignore
// //node_modules/
// //git add . - добавляем отслеживания к файлам
// //git commit -m "Our first commit."
// /* ============== 27.Semantic Versioning (Семантическая версия) ================== */
// //"mongoose": "^5.6.2" - Major.Minor.Patch
// //~ - префикс тильды (~1.2.3 - 1.2.x)
// //^ - каретка (^1.2.3 - 1.x.x)
// //https://docs.npmjs.com/files/package.json
// /* ============== 28.Listing the Installed Packages (Список установленных пакетов) ================== */
// //npm list - показывает список пакетов установленных и их версии
// //npm list --depth=0 (глубина списка)
// /* ============== 29.Viewing Registry Info for a Package (Просмотр информации реестра для пакета) ================== */
// //npm view mongoose - полная информация про зависимость
// //npm view mongoose dependencies - полная информация об зависимостях
// //npm view mongoose versions - полная информация об версиях библиотеки
// /* ============== 30.Installing a Specific Version of a Package (Установка определенной версии пакета) ================== */
// //npm i mongoose@2.4.2 - установка определенной версии пакета
// /* ============== 31.Updating Local Packages (Обновление локальных пакетов) ================== */
// //cls - очистить консоль
// //npm outdated - показывает устаревшие версии пакетов (Эта команда проверит реестр, чтобы увидеть, устарели ли какие-либо (или определенные) установленные пакеты.)
// //npm update - обнавление до последней версии (Эта команда обновит все перечисленные пакеты до последней версии)
// //npm i -g npm-check-updates (Если -g указан флаг, эта команда обновит глобально установленные пакеты. - Показать все новые зависимости для проекта в текущем каталоге)
// //npm-check-updates - установка локально
// //ncu -u - обнавление (npm-check-updates обновляет ваши зависимости package.json до последних версий, игнорируя указанные версии.)
// //(npm-check-updates только изменяет ваш файл package.json. Запустите npm install для обновления установленных пакетов и package-lock.json.)
// //npm i
// //ncu
// /* ============== 32.DevDependencies (Зависимости разработчиков) ================== */
// //npm i jshint --save-dev (это веб-инструмент, который позволяет вам устанавливать собственные стандарты кода, легко проверять файл на соответствие этим стандартам и делиться результатами с другими разработчиками.)
// //-S, --save: Пакет будет отображается в ваших dependencies
// //-D, --save-dev: пакет будет отображаться в ваших devDependencies
// /* ============== 33.Uninstalling a Package (Деинсталляция пакета) ================== */
// //npm uninstall
// //npm un mongoose
// /* ============== 34.Working with Global Packages (Работа с глобальными пакетами) ================== */
// //npm i -g npm
// //npm -g outdated
// //npm un -g
// /* ============== 35.Publishing a Package (Публикация пакета) ================== */
// //mkdir lion-lib
// //cd lion-lib
// //npm init --yes
// //npm login
// //cd ..
// //mkdir node-app
// //cd node-app
// //npm init --yes
// //npm i lion-lib
// //index.js - lion-lib
// module.exports.add = function(a, b) { return a + b };
// module.exports.multiply = function(a, b) { return a * b };
// //index.js node-app
// var lion = require('lion-lib');
// var result = lion.add(1,2);
// console.log(result); // 3
// /* ============== 36.Updating a Published Package (Обновление опубликованного пакета) ================== */
// //npm version minor
// //npm publish
// /* ============== 37.Intoduction (Вступление) ================== */
// //Bulding RESTful Services with Express
// /* ============== 38.RESTful Services (RESTful Услуги) ================== */
// //Clietn (Клиент) | HTTP | Server (Сервер)
// //Representational State Transfer (Изобразительное состояние перехода)
// //Create (Создать) | Read (Читать) | Update (Обнавить) | Delete (Удалить)
// //CRUD Operations
// //HTTP METHODS - GET | POST | PUT | DELETE
// //GET /api/customers
// //GET /api/customers/1
// //PUT /api/customers/1
// //DELETE /api/customers/1
// //POST /api/customers
// /* ============== 39.Introducing Express (Вступительный экспресс) ================== */
// //Express - Быстрый, незавершенный, минималистский веб-фреймворк для узла .
// //mkdir node-course
// //cd node-course
// //mkdir express-demo
// //cd express-demo
// //npm init --yes
// //npm i express
// /* ============== 40.Building Your First Web Server (Создание вашего первого веб-сервера) ================== */
// //http://expressjs.com/
// //index.js
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
// 	res.send('Hello World');
// });

// app.get('/api/courses', (req, res) => {
// 	res.send([1,2,3]);
// });
// app.listen(3000, () => console.log('Listening on port 3000...'));
// // app.post();
// // app.put();
// // app.delete();
// //node index.js
// /* ============== 41.Nodemon ================== */
// //Nodemon - это инструмент, который помогает разрабатывать приложения на основе node.js, автоматически перезапуская приложение узла при обнаружении изменений файла в каталоге.
// //npm i -g nodemon
// //nodemon index.js
// /* ============== 42.Environment Varaiables (Переменные среды) ================== */
// //index.js
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

// app.get('/api/courses', (req, res) => {
// 	res.send([1,2,3]);
// });

// //PORT
// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
// //export PORT=5000
// //ndoemon index.js
// /* ============== 43.Route Parameters (Параметры маршрута) ================== */
// //index.js
// app.get('/api/courses/:id', (req, res) => {
// 	res.send(req.params.id);
// });
// /////
// app.get('/api/posts/:year/:month', (req, res) => {
// 	res.send(req.params);
// });
// ///api/posts/2019/30?sortBy=ord
// app.get('/api/posts/:year/:month', (req, res) => {
// 	res.send(req.query);
// });
// /* ============== 44.Handling HTTP GET Requests (Обработка HTTP GET-запросов) ================== */
// //index.js
// const express = require('express');
// const app = express();

// const courses = [
// 	{ id: 1, name: 'course1'},
// 	{ id: 2, name: 'course2'},
// 	{ id: 3, name: 'course3'}
// ];
// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

// app.get('/api/courses', (req, res) => {
// 	res.send(courses);
// });

// app.get('/api/courses/:id', (req, res) => {
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) res.status(404).send('The course with the given ID was not found.');
// 	res.send(course);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
// /* ============== 45.Handling HTTP POST Requests (Обработка HTTP POST-запросов) ================== */
// //index.js
// const express = require('express');
// const app = express();

// app.use(express.json());

// const courses = [
// 	{ id: 1, name: 'course1'},
// 	{ id: 2, name: 'course2'},
// 	{ id: 3, name: 'course3'}
// ];
// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

// app.get('/api/courses', (req, res) => {
// 	res.send(courses);
// });

// app.post('/api/courses', (req, res) => {
// 	const course = {
// 		id: courses.length + 1,
// 		name: req.body.name
// 	};
// 	courses.push(course);
// 	res.send(course);
// });

// app.get('/api/courses/:id', (req, res) => {
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) res.status(404).send('The course with the given ID was not found.');
// 	res.send(course);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
// /* ============== 46.Calling Endpoints Using Postman (Вызов конечных точек с помощью почтальона) ================== */
// /* ============== 47.Input Validation (Проверка ввода) ================== */
// //npm i --save @hapi/joi - валидация данных
// //index.js
// if (!req.body.name || req.body.name.length < 3) {
// 	//400 Bad Request
// 	res.status(400).send('Name is required and should be minimum 3 change.');
// 	return;
// }
// //index.js
// const Joi = require('@hapi/joi');
// const express = require('express');
// const app = express();

// app.use(express.json());

// const courses = [
// 	{ id: 1, name: 'course1' },
// 	{ id: 2, name: 'course2' },
// 	{ id: 3, name: 'course3' }
// ];
// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

// app.get('/api/courses', (req, res) => {
// 	res.send(courses);
// });

// app.post('/api/courses', (req, res) => {
// 	const schema = {
// 		name: Joi.string().min(3).required()
// 	};

// 	const result = Joi.validate(req.body, schema);

// 	if (result.error) {
// 		res.status(400).send(result.error.details[0].message);
// 		return;
// 	}
// 	const course = {
// 		id: courses.length + 1,
// 		name: req.body.name
// 	};
// 	courses.push(course);
// 	res.send(course);
// });

// app.get('/api/courses/:id', (req, res) => {
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) res.status(404).send('The course with the given ID was not found.');
// 	res.send(course);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
// /* ============== 48.Handling HTTP PUT Requests (Обработка запросов HTTP PUT) ================== */
// //index.js
// app.put('/api/courses/:id', (req, res) => {
// 	//Look up the course (Посмотри курс)
// 	//If not existing, return 404 (Если не существует, вернуть 404)
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) res.status(404).send('The course with the given ID was not found.');
// 	//Validate (Утверждать)
// 	//If invalid, return 400 - Bad request (Если неверно, вернуть 400 - плохой запрос)
// 	const schema = {
// 		name: Joi.string().min(3).required()
// 	};
// 	const result = Joi.validate(req.body, schema);
// 	if (result.error) {
// 		res.status(400).send(result.error.details[0].message);
// 		return;
// 	}
// 	//Update course (Обнавить курс)
// 	course.name = req.body.name; 
// 	res.send(course);
// 	//Return the updated course (Вернуть обнавленный курс)		
// });
// //index.js
// const Joi = require('@hapi/joi');
// const express = require('express');
// const app = express();

// app.use(express.json());

// const courses = [
// 	{ id: 1, name: 'course1' },
// 	{ id: 2, name: 'course2' },
// 	{ id: 3, name: 'course3' }
// ];
// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

// app.get('/api/courses', (req, res) => {
// 	res.send(courses);
// });

// app.post('/api/courses', (req, res) => {
// 	const { error } = validateCourse(req.body);
// 	if (error) {
// 		res.status(400).send(error.details[0].message);
// 		return;
// 	}

// 	const course = {
// 		id: courses.length + 1,
// 		name: req.body.name
// 	};
// 	courses.push(course);
// 	res.send(course);
// });

// app.put('/api/courses/:id', (req, res) => {
// 	//Look up the course (Посмотри курс)
// 	//If not existing, return 404 (Если не существует, вернуть 404)
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) res.status(404).send('The course with the given ID was not found.');
// 	//Validate (Утверждать)
// 	//If invalid, return 400 - Bad request (Если неверно, вернуть 400 - плохой запрос)		
// 	const { error } = validateCourse(req.body); //result.error
// 	if (error) {
// 		res.status(400).send(error.details[0].message);
// 		return;
// 	}
// 	//Update course (Обнавить курс)
// 	course.name = req.body.name; 
// 	res.send(course);
// 	//Return the updated course (Вернуть обнавленный курс)		
// });

// function validateCourse(course) {
// 	const schema = {
// 		name: Joi.string().min(3).required()
// 	};
// 	return Joi.validate(course, schema);	
// }

// app.get('/api/courses/:id', (req, res) => {
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) res.status(404).send('The course with the given ID was not found.');
// 	res.send(course);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
// /* ============== 49.Handling HTTP Delete Requests (Обработка запросов HTTP Delete) ================== */
// //index.js
// const Joi = require('@hapi/joi');
// const express = require('express');
// const app = express();

// app.use(express.json());

// const courses = [
// 	{ id: 1, name: 'course1' },
// 	{ id: 2, name: 'course2' },
// 	{ id: 3, name: 'course3' }
// ];
// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

// app.get('/api/courses', (req, res) => {
// 	res.send(courses);
// });

// app.post('/api/courses', (req, res) => {
// 	const { error } = validateCourse(req.body);
// 	if (error) {
// 		res.status(400).send(error.details[0].message);
// 		return;
// 	}

// 	const course = {
// 		id: courses.length + 1,
// 		name: req.body.name
// 	};
// 	courses.push(course);
// 	res.send(course);
// });

// app.put('/api/courses/:id', (req, res) => {
// 	//Look up the course (Посмотри курс)
// 	//If not existing, return 404 (Если не существует, вернуть 404)
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) res.status(404).send('The course with the given ID was not found.');
// 	//Validate (Утверждать)
// 	//If invalid, return 400 - Bad request (Если неверно, вернуть 400 - плохой запрос)		
// 	const { error } = validateCourse(req.body); //result.error
// 	if (error) {
// 		res.status(400).send(error.details[0].message);
// 		return;
// 	}
// 	//Update course (Обнавить курс)
// 	course.name = req.body.name;
// 	res.send(course);
// 	//Return the updated course (Вернуть обнавленный курс)		
// });

// app.delete('/api/courses/:id', (req, res) => {
// 	//Look up the course (Посмотри курс)
// 	//Not existing, return 404 (Не существует, вернуть 404)
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) res.status(404).send('The course with the given ID was not found.');
// 	//Delete (Удалить)
// 	const index = courses.indexOf(course);
// 	courses.splice(index, 1);
// 	//Return the same course (Вернуть тот же курс)
// 	res.send(course);
// });

// function validateCourse(course) {
// 	const schema = {
// 		name: Joi.string().min(3).required()
// 	};
// 	return Joi.validate(course, schema);
// }

// app.get('/api/courses/:id', (req, res) => {
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) res.status(404).send('The course with the given ID was not found.');
// 	res.send(course);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
// //Fixing a Bug (Исправление ошибки)
// const Joi = require('@hapi/joi');
// const express = require('express');
// const app = express();

// app.use(express.json());

// const courses = [
// 	{ id: 1, name: 'course1' },
// 	{ id: 2, name: 'course2' },
// 	{ id: 3, name: 'course3' }
// ];
// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

// app.get('/api/courses', (req, res) => {
// 	res.send(courses);
// });

// app.post('/api/courses', (req, res) => {
// 	const { error } = validateCourse(req.body);
// 	if (error) return res.status(400).send(error.details[0].message);

// 	const course = {
// 		id: courses.length + 1,
// 		name: req.body.name
// 	};
// 	courses.push(course);
// 	res.send(course);
// });

// app.put('/api/courses/:id', (req, res) => {
// 	//Look up the course (Посмотри курс)
// 	//If not existing, return 404 (Если не существует, вернуть 404)
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) return res.status(404).send('The course with the given ID was not found.');
// 	//Validate (Утверждать)
// 	//If invalid, return 400 - Bad request (Если неверно, вернуть 400 - плохой запрос)		
// 	const { error } = validateCourse(req.body); //result.error
// 	if (error) return res.status(400).send(error.details[0].message);
// 	//Update course (Обнавить курс)
// 	course.name = req.body.name;
// 	res.send(course);
// 	//Return the updated course (Вернуть обнавленный курс)		
// });

// app.delete('/api/courses/:id', (req, res) => {
// 	//Look up the course (Посмотри курс)
// 	//Not existing, return 404 (Не существует, вернуть 404)
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) return res.status(404).send('The course with the given ID was not found.');
// 	//Delete (Удалить)
// 	const index = courses.indexOf(course);
// 	courses.splice(index, 1);
// 	//Return the same course (Вернуть тот же курс)
// 	res.send(course);
// });

// function validateCourse(course) {
// 	const schema = {
// 		name: Joi.string().min(3).required()
// 	};
// 	return Joi.validate(course, schema);
// }

// app.get('/api/courses/:id', (req, res) => {
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) return res.status(404).send('The course with the given ID was not found.');
// 	res.send(course);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
// /* ============== 50.Project - Build the Genres API (Проект - создание жанрового API) ================== */
// //Project - VIDLY
// //http://vidly.com/api/genres
// /* ============== 51.Introducion (Введение) ================== */
// //Express: Advanced Topics (Экспресс: продвинутые темы)
// //In this section (В этой секции)
// //Middleware (Промежуточное) | Configuration (конфигурация) | Debugging (отладка) | Templating Engines (Двигатели шаблонов)
// /* ============== 52.Middleware (Промежуточное) ================== */
// //REQUEST PROCESSING PIPELINE (ЗАПРОС ОБРАБОТКИ ТРУБОПРОВОДА)
// //Request -> /json()/ -> /route()/ -> Response
// /* ============== 53.Creating Custom Middleware (Создание пользовательского промежуточного программного обеспечения) ================== */
// //logger.js
// function log(req, res, next) {
// 	console.log('Logging...');
// 	next();
// }

// module.exports = log;
// //index.js
// const Joi = require('@hapi/joi');
// const logger = require('./logger');
// const express = require('express');
// const app = express();

// app.use(express.json());

// app.use(logger);

// app.use(function(req, res, next) {
// 	console.log('Authenticating...');
// 	next();
// });

// const courses = [
// 	{ id: 1, name: 'course1' },
// 	{ id: 2, name: 'course2' },
// 	{ id: 3, name: 'course3' }
// ];
// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

// app.get('/api/courses', (req, res) => {
// 	res.send(courses);
// });

// app.post('/api/courses', (req, res) => {
// 	const { error } = validateCourse(req.body);
// 	if (error) return res.status(400).send(error.details[0].message);

// 	const course = {
// 		id: courses.length + 1,
// 		name: req.body.name
// 	};
// 	courses.push(course);
// 	res.send(course);
// });

// app.put('/api/courses/:id', (req, res) => {	
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) return res.status(404).send('The course with the given ID was not found.');	
// 	const { error } = validateCourse(req.body);
// 	if (error) return res.status(400).send(error.details[0].message);	
// 	course.name = req.body.name;
// 	res.send(course);	
// });

// app.delete('/api/courses/:id', (req, res) => {	
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) return res.status(404).send('The course with the given ID was not found.');	
// 	const index = courses.indexOf(course);
// 	courses.splice(index, 1);	
// 	res.send(course);
// });

// function validateCourse(course) {
// 	const schema = {
// 		name: Joi.string().min(3).required()
// 	};
// 	return Joi.validate(course, schema);
// }

// app.get('/api/courses/:id', (req, res) => {
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) return res.status(404).send('The course with the given ID was not found.');
// 	res.send(course);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
// /* ============== 54.Built-In Middleware (Встроенное промежуточное ПО) ================== */
// //index.js
// const Joi = require('@hapi/joi');
// const logger = require('./logger');
// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); //key=value&key=value
// app.use(express.static('public'));

// app.use(logger);

// const courses = [
// 	{ id: 1, name: 'course1' },
// 	{ id: 2, name: 'course2' },
// 	{ id: 3, name: 'course3' }
// ];
// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

// app.get('/api/courses', (req, res) => {
// 	res.send(courses);
// });

// app.post('/api/courses', (req, res) => {
// 	const { error } = validateCourse(req.body);
// 	if (error) return res.status(400).send(error.details[0].message);

// 	const course = {
// 		id: courses.length + 1,
// 		name: req.body.name
// 	};
// 	courses.push(course);
// 	res.send(course);
// });

// app.put('/api/courses/:id', (req, res) => {	
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) return res.status(404).send('The course with the given ID was not found.');	
// 	const { error } = validateCourse(req.body);
// 	if (error) return res.status(400).send(error.details[0].message);	
// 	course.name = req.body.name;
// 	res.send(course);	
// });

// app.delete('/api/courses/:id', (req, res) => {	
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) return res.status(404).send('The course with the given ID was not found.');	
// 	const index = courses.indexOf(course);
// 	courses.splice(index, 1);	
// 	res.send(course);
// });

// function validateCourse(course) {
// 	const schema = {
// 		name: Joi.string().min(3).required()
// 	};
// 	return Joi.validate(course, schema);
// }

// app.get('/api/courses/:id', (req, res) => {
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) return res.status(404).send('The course with the given ID was not found.');
// 	res.send(course);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
// //public/readme.txt
// /* ============== 55.Third-party Middleware (Стороннее промежуточное ПО) ================== */
// //https://github.com/helmetjs/helmet
// //npm i helmet
// //http://expressjs.com/en/resources/middleware/morgan.html
// //npm i morgan
// //index.js
// const morgan = require('morgan');
// const helmet = require('helmet');
// const Joi = require('@hapi/joi');
// const logger = require('./logger');
// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); //key=value&key=value
// app.use(express.static('public'));
// app.use(helmet());
// app.use(morgan('tiny'));

// app.use(logger);

// const courses = [
// 	{ id: 1, name: 'course1' },
// 	{ id: 2, name: 'course2' },
// 	{ id: 3, name: 'course3' }
// ];
// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

// app.get('/api/courses', (req, res) => {
// 	res.send(courses);
// });

// app.post('/api/courses', (req, res) => {
// 	const { error } = validateCourse(req.body);
// 	if (error) return res.status(400).send(error.details[0].message);

// 	const course = {
// 		id: courses.length + 1,
// 		name: req.body.name
// 	};
// 	courses.push(course);
// 	res.send(course);
// });

// app.put('/api/courses/:id', (req, res) => {	
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) return res.status(404).send('The course with the given ID was not found.');	
// 	const { error } = validateCourse(req.body);
// 	if (error) return res.status(400).send(error.details[0].message);	
// 	course.name = req.body.name;
// 	res.send(course);	
// });

// app.delete('/api/courses/:id', (req, res) => {	
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) return res.status(404).send('The course with the given ID was not found.');	
// 	const index = courses.indexOf(course);
// 	courses.splice(index, 1);	
// 	res.send(course);
// });

// function validateCourse(course) {
// 	const schema = {
// 		name: Joi.string().min(3).required()
// 	};
// 	return Joi.validate(course, schema);
// }

// app.get('/api/courses/:id', (req, res) => {
// 	const course = courses.find(c => c.id === parseInt(req.params.id));
// 	if (!course) return res.status(404).send('The course with the given ID was not found.');
// 	res.send(course);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
// /* ============== 56.Environments (Среды) ================== */

asdf


































