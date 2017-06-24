'use strict';

var NODE_ENV = process.env.NODE_ENV || 'development';

var path = require('path'),
    webpack = require('webpack'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
    ExtractTextPlugin  = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

var config  = {
    context: __dirname,
    entry: {
        app: './src/app.js',
        //vendor: ['']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
                // выгрузка css в файл
                // test: /\.css$/,
                // loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: 'src/assets', to: '../dist/assets'},
            {from: 'src/partials', to: '../dist/partials'},
            {from: 'src/views', to: '../dist/views'},
            {from: 'src/.htaccess', to: '../dist/.htaccess', toType: 'file'}
        ]),
        new HtmlWebpackPlugin({
            title: 'My App',
            template: './src/index.html',
            hash: true
        })
        // выгрузка css в файл
        // new ExtractTextPlugin({
        //     filename: 'assets/css/[name].bundle.css',
        //     disable: false,
        //     allChunks: true
        // })
    ]
};

if (NODE_ENV === 'production') {
    config.output.path = __dirname + '/dist';

    config.plugins.push(
        new UglifyJSPlugin({
            compress: true,
            sourceMap: false,
            mangle: false
        })
    );
}

module.exports = config;