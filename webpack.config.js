const path = require('path')

const config = {
	entry: {
		app: ['./src/index.js']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/assets/'
	},
	module: {
		loaders: [
		{test: /\.js[x]?$/, loader: 'babel-loader', exclude: /node_modules/},
		]
	},
	devServer: {
		contentBase: './build',
		inline: true,
	},

};

(function useHtmlWebpackPluginIfFound() {
	try {
		const HtmlWebpackPlugin = require('html-webpack-plugin')
		const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
			template: 'build/index.html',
			filename: 'index.html',
			inject: 'body',
		})
		config.plugins = !!config.plugins ? config.plugins : []
		config.plugins.push(HtmlWebpackPluginConfig)
	} catch (e) {
		console.log('Didn\'t find html-webpack-plugin.  Ignoring.')
	}
})();


module.exports = config