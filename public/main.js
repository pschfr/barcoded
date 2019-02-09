// Easier to do this here rather than 5 other times
const barcode = document.getElementById('barcode');

// Render an example barcode on load
JsBarcode(barcode, barcode.dataset.default);

// When changing the input, do this...
document.getElementById('input').addEventListener('keyup', function() {
	// Render a barcode from the input value
	JsBarcode(barcode, this.value, {
		valid: function(valid) {
			// and if it's invalid, render example barcode
			if (!valid) {
				JsBarcode(barcode, barcode.dataset.default);
			}
		}
	});
});
