const element = document.getElementById('barcode');
const input   = document.getElementById('input');
const params  = new URLSearchParams(window.location.search);

// Render an example barcode on load
JsBarcode(element, barcode.dataset.default);

// When changing the input, do this...
input.addEventListener('keyup', function() {
	// Render a barcode from the input value
	JsBarcode(element, this.value, {
		valid: function(valid) {
			// and if it's invalid, render example barcode
			if (!valid) {
				JsBarcode(element, barcode.dataset.default);
			}
		}
	});
});

// If there is a query parameter (and it's not empty),
// set the input value and render a barcode.
if (params.has('input') && params.get('input') != '') {
	input.value = params.get('input');
	JsBarcode(element, params.get('input'));
}
