const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function () {
  //countを更新
  count++
  //countを秒単位にして更新
  display.textContent = count / 100
}

let id = null

button.onclick = function () {
  if (id === null) {
    id = setInterval(countUp, 10) //感覚の単位は1000分の1秒
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
