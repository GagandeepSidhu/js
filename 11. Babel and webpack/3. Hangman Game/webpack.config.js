const path = require('path');
module.exports = {
	entry: ['babel-polyfill', '/src/index.js'],
	output: {
		// here path should be absolution, not relative like enrty. so we can use __dirname + relative_path
		// but the problem is, if we use + to concatinate the two paths then it may or may not work on
		// different plateforms, so we need to use path package to add two path strings
		path: path.resolve(__dirname, 'public/scripts/'),
		filename: 'index-min-webpack.js', // by default it creates main.js, so using filename we can optimise it
	},

	// for balel setup
	module: {
		rules: [
			{
				// to test the files
				test: /\.js$/, // \ is used to take . as simple string, $ is used to ensure the file name ends
				// with .js
				exclude: /node_modules/, // it is used to not integrate modules inside node_modules, otherwise
				// it will slow the process, /node_modules/ is a regular expression
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['transform-object-rest-spread'],
					},
				},
			},
		],
	},

	// to configure webpack-dev-server
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 5303,
		publicPath: '/scripts/',
	},

	// to get corrent line no in console for debugging
	devtool: 'source-map',
};
