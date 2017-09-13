
document.addEventListener('DOMContentLoaded', (function(){

  var body = document.getElementsByTagName("body")[0];

  var input1 = document.createElement("INPUT");
  input1.setAttribute("type", "text");
  input1.className = "input1"
  var input2 = document.createElement("INPUT");
  input2.setAttribute("type", "text");
  input2.className = "input2"

  body.appendChild(input1);
  body.appendChild(input2);

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  var button1 = document.createElement('BUTTON');
  button1.className = "btn btn-primary"
  button1.innerHTML = '+';
  button1.onclick = () => {
    if(isNumber(+input1.value) && isNumber(+input2.value)) {
    result.innerHTML = (+input1.value) + (+input2.value);
    }
    else {
    result.innerHTML = "No correct"
    }
  };
  var button2 = document.createElement('button');
  button2.className = "btn btn-primary"
  button2.innerHTML = '-';
  button2.onclick = () => {
    if(isNumber(+input1.value) && isNumber(+input2.value)) {
    result.innerHTML = (+input1.value) - (+input2.value);
    }
    else {
    result.innerHTML = "No correct"
    }
  };
  var button3 = document.createElement('button');
  button3.className = "btn btn-primary"
  button3.innerHTML = '*';
  button3.onclick = () => {
    if(isNumber(+input1.value) && isNumber(+input2.value)) {
    result.innerHTML = (+input1.value) * (+input2.value);
    }
    else {
    result.innerHTML = "No correct"
    }
  };
  var button4 = document.createElement('button');
  button4.className = "btn btn-primary"
  button4.innerHTML = '/';
  button4.onclick = () => {
    if(isNumber(+input1.value) && isNumber(+input2.value) && (+input2.value) !== 0) {
    result.innerHTML = (+input1.value) / (+input2.value);
    }
    else {
    result.innerHTML = "No correct"
    }
  };

  body.appendChild(button1);
  body.appendChild(button2);
  body.appendChild(button3);
  body.appendChild(button4);

  var div = document.createElement('div');
  var text = document.createElement('span');
  var cellText = document.createTextNode("Result:");
  var result = document.createElement('span');
  text.appendChild(cellText);
  div.appendChild(text);
  div.appendChild(result);
  body.appendChild(div);
}));
