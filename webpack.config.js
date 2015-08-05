'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'ics.js',
		publicPath: '/dist/',
		pathinfo: false,
		libraryTarget: 'umd'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel?stage=0' },
		]
	},
	target: 'node',
	devtool: false,
	debug: false,
	cache: false,
	stats: {
		colors: true,
		reasons: false
	},
	resolve: {
		root: path.join(__dirname, 'ics-js'),
		extensions: ['', '.js'],
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules'),
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
	]
};
