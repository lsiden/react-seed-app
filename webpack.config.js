const path = require('path')

const config = {
	entry: {
		app: ['./src/index.js']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: ''
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
		]
	},
	devServer: {
		contentBase: './build',
		inline: true,
	},
	devtool: process.env.NODE_ENV === 'prod' ? "source-map" : "eval-source-map",
	plugins: [
	],
};

module.exports = config