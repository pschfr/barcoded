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
		path: path.resolve(__dirname, 'public/js')
	},
	plugins: [
		// Needed for io-barcode to resolve properly
		new webpack.ProvidePlugin({
			ioBarcode: "io-barcode"
		}),

		// Passes through certain environment variables
		new webpack.DefinePlugin({
			'process.env': {
				TEAM_MEMBER_NUMBER: JSON.stringify(process.env.TEAM_MEMBER_NUMBER),
				TEAM_MEMBER_PASSWORD: JSON.stringify(process.env.TEAM_MEMBER_PASSWORD),
				CART_LABEL: JSON.stringify(process.env.CART_LABEL)
			}
		})
	]
}
