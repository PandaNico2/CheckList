function add_tarefa() {
    var input = document.querySelector("#tarefa");
    var texto = input.value;

    // console.log(texto);

    // Verifica se tem algo escrito
    if (input.value == "") {
        alert("Insira um valor!");
    }
    else {
        var conteiner = document.querySelector(".lista")
        var lista = document.createElement("div");
        lista.classList.add("item")
        const teste = `
        <div class="info_lista">
        <input type="checkbox" id="verifica">
        <p id="texto"> ${texto} </p>
        </div>
        <div class="buttons_lista">
        <button id="editar"><i class="fa-solid fa-pen-to-square"></i></button>
        <button id="remover"><i class="fa-solid fa-trash-can"></i></button>
        </div>`;
        lista.innerHTML = teste;
        conteiner.append(lista);

        // Limpar input
        input.value = "";

        // Remover linha
        var botao = lista.querySelector("#remover");

        botao.addEventListener("click", function () {
            lista.remove()
        });

        // checkbox
        var check = lista.querySelector("#verifica");
        check.addEventListener("click", function (e) {

            if (check.checked) {
                console.log("O cliente marcou o checkbox");
                lista.classList.add("ativo")
            }
        })


        // Editar texto
        var editar = lista.querySelector("#editar");
        var paragrafo = lista.querySelector("#texto");

        editar.addEventListener("click", function () {
            var novoTexto = prompt("Edite o texto:", paragrafo.innerText);
            if (novoTexto !== null) {
                paragrafo.innerText = novoTexto;
            }
        });
    }
}

