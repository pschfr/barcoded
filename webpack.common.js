// Require dependencies for this file
const dotenv = require('dotenv').config();
const path = require('path');
const webpack = require('webpack');

// Common Webpack settings go here
module.exports = {
	// Input file
	entry: './public/js/_imports.js',
	// Output bundle location
	output: {
		filename: 'compiled.js',
		path: path.resolve(__dirname, 'public/js'),
		hashFunction: 'sha256'
	},
	plugins: [
		// Needed for io-barcode to resolve properly
		new webpack.ProvidePlugin({
			ioBarcode: "io-barcode"
		}),

		new webpack.DefinePlugin({
			// Passes through certain environment variables
			'process.env': {
				TEAM_MEMBER_NUMBER: JSON.stringify(process.env.TEAM_MEMBER_NUMBER),
				TEAM_MEMBER_PASSWORD: JSON.stringify(process.env.TEAM_MEMBER_PASSWORD),
				CART_LABEL: JSON.stringify(process.env.CART_LABEL),
				INNER_CART_LABEL: JSON.stringify(process.env.INNER_CART_LABEL),
				PRINTER_LABEL: JSON.stringify(process.env.PRINTER_LABEL)
			},
			// io-barcode options, see https://github.com/wavded/io-barcode#iobarcodetypecode-opts
			'barcode_opts': {
				displayValue: JSON.stringify(true),
				font: JSON.stringify('sans-serif'),
				fontSize: JSON.stringify(16)
			}
		})
	]
}
