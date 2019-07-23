const webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                loader: 'less-loader', // compiles Less to CSS
            },
        ],
    }
};
