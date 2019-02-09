// Render an example barcode on load
JsBarcode('#barcode', 'L01A001A01$');

// When changing the input, do this...
document.getElementById('input').addEventListener('keyup', function() {
	// Render a barcode from the input value
	JsBarcode('#barcode', this.value, {
		valid: function(valid) {
			// and if it's invalid, render example barcode
			if (!valid) {
				JsBarcode('#barcode', 'L01A001A01$');
			}
		}
	});
});
