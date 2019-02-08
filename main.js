document.getElementById('input').addEventListener('keyup', function() {
	JsBarcode('#barcode', this.value);
});
