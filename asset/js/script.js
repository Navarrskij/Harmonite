

//alert( "Hello" );
document.addEventListener('DOMContentLoaded', function(){

  const a = 5
  var body = document.getElementsByTagName("body")[0];

  var table = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = 0; i < a; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < a; j++) {
      var cell = document.createElement("td");
      this.cell  = cell
      var cellText = document.createTextNode("Cell " + i++);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }

  table.appendChild(tblBody);
  body.appendChild(table);

  table.setAttribute("border", "1");

  var div = document.createElement("div");
  var divText = document.createTextNode("Some Text");
  div.appendChild(divText);
  body.appendChild(div);
});


var tbl = document.getElementsByTagName("td");

tbl.onmouseover = function(event) {
  var target = event.target;
  target.style.background = 'red';
};

tbl.onmouseout = function(event) {
  var target = event.target;
  target.style.background = '';
};
