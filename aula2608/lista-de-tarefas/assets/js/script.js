var lista = []
// var lista = JSON.parse(localStorage.getItem("tarefas")) ?? []

var btn = document.querySelector("#btn_cadastrar")
btn.addEventListener("click", () => {
    let texto = document.querySelector("#tarefa")
    lista.push(texto.value)

    texto.value = ""
    alert("Tarefa cadastrada")

    localStorage.setItem("tarefas", JSON.stringify(lista))

    carregarCadastros()
})

function carregarCadastros() {
    lista = localStorage.getItem("tarefas")
    lista = JSON.parse(lista) || []

    let div = document.querySelector("#lista_tarefas")
    div.innerHTML = ""

    for(let [indice, valor] of lista.entries()) {
        let paragrafo = document.createElement("p")
        paragrafo.textContent = valor   
        paragrafo.setAttribute("class", "item")
        paragrafo.setAttribute("data-indice", indice)   

        let btn = document.createElement("button")
        btn.textContent = "Deletar"
        btn.onclick = deletarTarefa
        btn.id = "btn_deletar"
        
        paragrafo.appendChild(btn)
        div.appendChild(paragrafo)
    }
}

function deletarTarefa () {
    let pai = this.parentNode
    let indice = pai.getAttribute("data-indice")
    lista.splice(indice, 1)
    localStorage.setItem("tarefas", JSON.stringify(lista))

    carregarCadastros()
}

carregarCadastros()