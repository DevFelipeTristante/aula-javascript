var form = document.querySelector("form")

addEventListener("submit", function() {
    var peso = document.querySelector("#peso")
    var altura = document.querySelector("#altura")
    var resultado = document.querySelector("#resultado")

    var n1 = parseFloat(peso.value)
    var n2 = parseFloat(altura.value)

    resultado.textContent = "Resultado: " + (n1/(n2*n2))
    console.log(resultado)
})