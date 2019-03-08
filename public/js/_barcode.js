// Require dependencies
const ioBarcode = require('io-barcode');

// Only on index page
if (window.location.pathname == '/' || window.location.pathname == '/barcoded/') {
	// My constants
	const container = document.getElementById('barcode');
	const input  = document.getElementById('input');
	const params = new URLSearchParams(window.location.search);

	// Render an example barcode on load
	const exampleBarcode = ioBarcode.CODE128B(barcode.dataset.default, barcode_opts);

	// Render the exampleBarcode directly
	container.appendChild(exampleBarcode);

	// When changing the input, do this...
	input.addEventListener('keyup', function() {
		// Clear container
		container.innerHTML = '';
		
		// If input is not empty,
		if (input.value != '') {
			// Render a barcode from the input value
			let newBarcode = ioBarcode.CODE128B(this.value, barcode_opts);
			// and append to page.
			container.appendChild(newBarcode);
		} else {
			// Or append example instead.
			container.appendChild(exampleBarcode);
		}
	});

	// If there is a query parameter (and it's not empty),
	if (params.has('input') && params.get('input') != '') {
		// set the input value,
		input.value = params.get('input');
		// render a barcode,
		let newBarcode = ioBarcode.CODE128B(params.get('input'), barcode_opts);
		// and append to page.
		container.innerHTML = '';
		container.appendChild(newBarcode);
	}
}
