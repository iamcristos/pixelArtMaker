// Select color input
// Select size input
 //select color and sie inputs

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    console.log("makeGrid is working")
    var designCanvas, color, height, width, row, column;
    
    designCanvas= $("#pixelCanvas").html("");
    designCanvas.children().remove(); 
     color= $("#colorPicker").val();
    height= $("#inputHeight").val();
      width= $("#inputWeight").val() 
    
    // creating grid row
      for (i=0; i<height; i++) {
        designCanvas.append("<tr></tr>");
    }
     row= $("tr")
    //  creating gridColumn
for (j=0; j<width; j++) {
     row.append("<td></td>");  
}
 column= $("td")
// Your code goes here!
// creating color on the grid
column.on("click", function(){
  var color= $("#colorPicker").val()
    $(this).attr("bgcolor", color);
})
column.on("dblclick", function(){
  var color= $("#colorPicker").val()
    $(this).attr("bgcolor", "white");
})

}
var submit= $('input[type="submit"]')

submit.click(function(event) {
  event.preventDefault()
    makeGrid();
    color = ''
})


var reset= "<button>RESET</button>";

submit.after(reset);

$("reset").attr("margin", "5px")

reset.click(function(){
  designCanvas.empty()
})

var undo= "<button>UNDO</button>";
reset.insertA9fter(undo);
undo.click(function(){
  var column= $("td").val();
  var color=  $("#colorPicker").val();
  column.attr("bgcolor", color).removeClass("bgcolor");
})

