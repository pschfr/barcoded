// Require dependencies for this file
const path = require('path');
const webpack = require('webpack');

// Common Webpack settings go here
module.exports = {
	// Input file
	entry: './public/js/imports.js',
	// Output bundle location
	output: {
		filename: 'compiled.js',
		path: path.resolve(__dirname, 'public/js')
	},
	// Needed for io-barcode to resolve properly
	plugins: [
        new webpack.ProvidePlugin({
		   ioBarcode: "io-barcode"
       })
    ]
}
