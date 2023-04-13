let contador = 0
let setConfetti = true
const contadorHtml = document.getElementById("contador")

function incrementar() {
  contador++
  contadorHtml.innerHTML = contador

  if (setConfetti && contador === 13) {
    setConfetti = false
    const confetti = document.querySelector("div")
    confetti.style.display = "block"
  }
}

function decrementar() {
  contador--
  contadorHtml.innerHTML = contador
}
