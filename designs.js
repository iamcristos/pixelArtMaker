 var color= $("#colorPicker").val(); // select color input 
 var size= $("sizePicker")  // select size input 
 
 // create makeGrid function 
function makeGrid() {
    console.log("makeGrid is working")
    // define variables 
    var designCanvas, color, height, width, row, column; // naming variables
    
    designCanvas= $("#pixelCanvas").html(""); // select the table input
    designCanvas.children().remove(); // clear all child element on the table input
     color= $("#colorPicker").val(); // select color input 
    // select size input to make the row and cell column
     height= $("#inputHeight").val(); 
      width= $("#inputWeight").val() 
    
    // a for loop creating one row and many column
      for (i=0; i<height; i++) {
        designCanvas.append("<tr></tr>"); // creating grid row 
    }
     row= $("tr") // select row
  
for (j=0; j<width; j++) {
     row.append("<td></td>");  //  creating gridCell
}
 column= $("td") // select cell

// inputing color on  gridCell by clicking on the cell
column.on("click", function(){
  var color= $("#colorPicker").val() // select the color input
    $(this).attr("bgcolor", color);  // adding background color to the cell
})
    // creating a function that erases color on a certain cell by double clicking 
column.on("dblclick", function(){
      var color= $("#colorPicker").val() // select the color input
        $(this).attr("bgcolor", "white");  // erasing background color to the cell
    })
    var eraseColor= $('input[type="button"]') // select earase color input

    eraseColor.click(function(){
      $("column").click(function() {
        $("column").attr("bgcolor", "white")
      })
    })
  }

// passing makeGrid function when submit is clicked
var submit= $('input[type="submit"]')

submit.click(function(event) {
  event.preventDefault(); // prevent default from loading
    makeGrid();
})
// creating a reset button that clears the Grid when clicked
var reset= "<button>Reset</button>";

submit.after(reset); //adding reset button after the submit input

// passing a function that clears the grid when reset is clicked
reset.click(function(){ 
  designCanvas.empty()
})