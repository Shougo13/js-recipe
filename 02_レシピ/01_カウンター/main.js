const text1 = document.getElementById("input-text1").value
const text2 = document.getElementById("input-text2").value
const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const timesButton = document.getElementById("times-button")
const divideButton = document.getElementById("divide-Button")

let answer = 0

plusButton.onclick = function () {
  answer = parseInt(text1.value, 10) + parseInt(text2.value, 10)
  display.textContent = answer
}

minusButton.onclick = function () {
  answer = parseInt(text1, 10) - parseInt(text2, 10)
  display.textContent = answer
}

timesButton.onclick = function () {
  answer = parseInt(text1, 10) * parseInt(text2, 10)
  display.textContent = answer
}

divideButton.onclick = function () {
  answer = parseInt(text1, 10) / parseInt(text2, 10)
  display.textContent = answer
}
