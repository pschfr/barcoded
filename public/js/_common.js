// Require dependencies
const ioBarcode = require('io-barcode');

// Only on common page
if (window.location.pathname.includes('/common')) {
	// Gets barcodes to be generated from environment variables
	const barcodes = Object.entries(process.env);

	// For each barcode we need,
	barcodes.forEach(common_barcode => {
		// generate a barcode,
		var barcode_generated = ioBarcode.CODE128B(common_barcode[1], barcode_opts);

		// and append it to the proper element.
		document.getElementById(common_barcode[0]).appendChild(barcode_generated);
	});
}
