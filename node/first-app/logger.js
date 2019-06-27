console.log(__filename);
console.log(__dirname);
console.log(require);

var url = "http://mylogger.io/log";

function log(message) {
  //Send an HTTP request (Отправить запрос HTTP)
  console.log(message);
}

module.exports = log;

