const alertbutton = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね")
}
alertbutton.onclick = alertMessage

//input要素とinputイベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (e) {
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue

document.onkeydown = function (e) {
  console.log(e.key)
}
