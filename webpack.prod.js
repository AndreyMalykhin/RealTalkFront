'use strict';

var webpack = require('webpack');
var config = require('./webpack.dev.js');

config.output.publicPath = 'RealTalkFront/';
config.output.filename = '[name].[hash].js';
config.output.chunkFilename = '[name].[hash].js';
config.devtool = 'source-map';
config.plugins.push(
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
);

module.exports = config;
