const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const jsRule = {
    test: /\.js$/,
    exclude: '/node_modules/',
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
        }
    }
}

module.exports = {
	mode: 'production',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		host: '192.168.1.8',
        historyApiFallback: true
	},
	entry: ["./src/index.js", "babel-polyfill"],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [jsRule]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'ordenes de almacén',
			template: './src/index.html'
		})
	]
}