const EventEmitter = require('events'); //class, not function
const emitter = new EventEmitter();

//Register a listener (Зарегистрировать слушателя)
emitter.on('messageLogged', function() {
    console.log('Listener called');
});


//Raise an event (Поднять событие)
emitter.emit('messageLogged');

//Making a noise, produce - signalling (Шуметь, производить - сигнализация)
