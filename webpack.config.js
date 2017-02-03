var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        main: './main.js',
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
                use: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: [{
                        loader: 'css-loader'
                    },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};