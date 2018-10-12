const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const extractSass = new MiniCssExtractPlugin({
	filename: '../css/app.css'
});

module.exports = {
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true // set to true if you want JS source maps
			}),
			new OptimizeCssAssetsPlugin({
				cssProcessorOptions: {
					sourcemap: true,
					map: { inline: false } // generate sourcemap use an external file
				}
			})
		]
	},
	mode: 'development',
	// mode: 'production',
	entry: ['./src/index.js', './src/sass/_base.sass'],
	devtool: 'source-map',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public/js')
	},

	module: {
		rules: [
			/* ES6 */
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			},

			/* SASS */
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// you can specify a publicPath here
							// by default it use publicPath in webpackOptions.output
							publicPath: '../'
						}
					},
					'css-loader',
					'sass-loader'
				]
			}
		]
	},

	plugins: [extractSass]
};
