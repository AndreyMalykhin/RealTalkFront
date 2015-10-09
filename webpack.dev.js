'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var environmentVars = require('./environment.js');

var config = {
    entry: {
        app: './src/app/index.js'
    },
    output: {
        path: __dirname + '/public',
        publicPath: 'http://localhost:8080/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    devtool: 'eval',
    devServer: {
        contentBase: './public',
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        }
    },
    module: {
        preLoaders: [],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?optional[]=runtime',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file'
            },
            {
                test: /\.html$/,
                loader: 'html',
                query: {attrs: ['md-icon:md-svg-src']}
            },
            {
                test: /\.txt$/,
                loader: 'raw'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
            }
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ],
    plugins: [
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.ProvidePlugin({
            CodeMirror: 'codemirror/lib/codemirror',
            'window.CodeMirror': 'codemirror/lib/codemirror',
            $: 'jquery/dist/jquery',
            jQuery: 'jquery/dist/jquery',
            'window.jQuery': 'jquery/dist/jquery'
        }),
        new webpack.DefinePlugin(environmentVars),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            minify: false
        })
    ]
};

module.exports = config;
