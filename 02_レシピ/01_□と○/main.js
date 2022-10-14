const figure = document.getElementById("figure")

let clickcount = 0
figure.onclick = function () {
  if (clickcount % 3 == 0) {
    figure.classList.add("rounded")
  }
  if (clickcount % 3 == 1) {
    figure.classList.remove("rounded")
    figure.classList.add("triangle")
  }
  if (clickcount % 3 == 2) {
    figure.classList.remove("triangle")
  }
  clickcount++
}
