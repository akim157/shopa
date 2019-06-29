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
12










