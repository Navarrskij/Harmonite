
const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
document.addEventListener('DOMContentLoaded', () => {
  let last = null

  var body = document.body

  var input1 = document.createElement("input")
  input1.setAttribute("type", "number")
  input1.className = "input1"
  var input2 = document.createElement("input")
  input2.setAttribute("type", "number")
  input2.className = "input2"

  body.appendChild(input1)
  body.appendChild(input2)

  input2.oninput = input1.oninput = () => {
    if (last) {
      last()
    }
  }

  var button1 = document.createElement('button')
  button1.className = "btn btn-primary"
  button1.innerHTML = '+'
  let add = () => {
    if(isNumber(parseFloat(input1.value)) && isNumber(parseFloat(input2.value))) {
      result.innerHTML = (+input1.value) + (+input2.value)
    } else {
      result.innerHTML = "No correct"
    }
    last = add
  }
  button1.onclick = add

  var button2 = document.createElement('button')
  button2.className = "btn btn-primary"
  button2.innerHTML = '-'
  let minus = () => {
    if(isNumber(parseFloat(input1.value)) && isNumber(parseFloat(input2.value))) {
      result.innerHTML = (+input1.value) - (+input2.value)
    } else {
      result.innerHTML = "No correct"
    }
    last = minus
  }
  button2.onclick = minus

  var button3 = document.createElement('button')
  button3.className = "btn btn-primary"
  button3.innerHTML = '*'
  let umn = () => {
    if(isNumber(parseFloat(input1.value)) && isNumber(parseFloat(input2.value))) {
      result.innerHTML = (+input1.value) * (+input2.value)
    } else {
      result.innerHTML = "No correct"
    }
    last = umn
  }
  button3.onclick = umn

  var button4 = document.createElement('button')
  button4.className = "btn btn-primary"
  button4.innerHTML = '/'
  let del = () => {
    if(isNumber(parseFloat(input1.value)) && isNumber(parseFloat(input2.value))) {
      result.innerHTML = (+input1.value) / (+input2.value)
    } else {
      result.innerHTML = "No correct"
    }
    last = del
  }
  button4.onclick = del

  body.appendChild(button1)
  body.appendChild(button2)
  body.appendChild(button3)
  body.appendChild(button4)

  var div = document.createElement('div')
  var text = document.createElement('span')
  var cellText = document.createTextNode("Result:")
  var result = document.createElement('span')

  text.appendChild(cellText)
  div.appendChild(text)
  div.appendChild(result)
  body.appendChild(div)

})
