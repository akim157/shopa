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

