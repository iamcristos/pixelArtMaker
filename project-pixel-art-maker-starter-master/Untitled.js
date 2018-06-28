function makeGrid() {
	console.log("makeGrid is running!")
	
	// Select size input
	
	var canvas, cell, gridHeight, gridWidth, rows;
	
	canvas = $('#pixelCanvas');
	gridHeight = $('#inputHeight').val();
	gridWidth = $('#inputWeight').val();
	
	canvas.children().remove()
	
	for (x = 0; x < gridHeight; x++) {
	canvas.append('<tr></tr>');
	}
	
	rows = $('tr');
	
	for (y = 0; y < gridWidth; y++) {
	rows.append('<td></td>');
	} 
	
    cell = canvas.find('td');
}
var submit= $('input[type="submit"]')

submit.click(function(event) {
    event.preventDefault()
    makeGrid()
})