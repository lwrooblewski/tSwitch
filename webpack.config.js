var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        bundle: './src/js/tswitch.js',
        demo: './demo.js',
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './dist/'),

    },
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