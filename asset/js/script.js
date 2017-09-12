

//alert( "Hello" );
document.addEventListener('DOMContentLoaded', (function(){

  const COUNT = 5
  var body = document.getElementsByTagName("body")[0];

  var table = document.createElement("table");
  var tblBody = document.createElement("tbody");

  var row = document.createElement("tr");
  for (var j = 0; j < COUNT; j++) {
    let cell = document.createElement("td");
    let lastPosX = null
    let lastPosY = null
    cell.onmousemove = debounce((event) => {
      let deltaX = event.pageX - lastPosX
      let deltaY = event.pageY - lastPosY
      lastPosX = event.pageX
      lastPosY = event.pageY
      console.log(lastPosX, lastPosY)

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          cell.style.background = 'red'
        }
        else {
          cell.style.background = 'green'
        }
      }

      if (Math.abs(deltaX) < Math.abs(deltaY)) {
        if (deltaY > 0) {
          cell.style.background = 'yellow'
        }
        else {
          cell.style.background = 'black'
        }
      }
    }, 70)

    var cellText = document.createTextNode("Cell " + j);
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  tblBody.appendChild(row);

  table.appendChild(tblBody);
  body.appendChild(table);

  table.setAttribute("border", "1");

}));
