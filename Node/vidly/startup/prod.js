const helmet = requrie('helmet');
const compression = require('compression');

module.exports = function(app) {
    app.use(helmet());
    app.use(compression());
}