let $ = require('jquery');
let str = require('./constan');
require('./less');

let App = function() {
    console.log(str);
    $('body').html('<div class="b-test"><h3 class="b-test__heading">Heading</h3></div>');
};
App.prototype.constructor = new App();

const app = new App();
