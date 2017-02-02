var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './demo.js',
    output: {path: __dirname, filename: 'bundle.js'},
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
        ]
    },
};