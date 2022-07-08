const itensContainer = document.querySelector(".container-item-produtos");

window.addEventListener("load", function () {
    function gerarItems(array) {
        let innerHTML = array
            .map(function (produto) {
                return `<div class="item" data-id="${produto.id}">
                            <button class="excluir">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                            <button class="editar">
                                <i class="fa-solid fa-pen"></i>
                            </button>
                                <div class="container-img">
                                    <img src="${
                                        produto.img
                                    }" alt="${produto.nome}">
                                </div>
                                <p class="nome-produto">${produto.nome}</p>
                                <p class="preco-produto">${produto.preco}</p>
                                <p class="id-produto">#${exibirId(
                                    produto.id
                                )}</p>
                            </div>`;
            })
            .join("");

        return innerHTML;
    }

    itensContainer.innerHTML = gerarItems(produtos);

    const editarBtn = document.querySelectorAll(".editar");
    const excluirBtn = document.querySelectorAll(".excluir");

    editarBtn.forEach(teste);
    excluirBtn.forEach(teste);
});

function exibirId(num) {
    let id = num.toString();
    let i = 0;

    while (id.length < 6) {
        id = "0" + id;
    }

    return id;
}

function teste(btn) {
    btn.addEventListener("click", function (e) {
        console.log(e.currentTarget.parentElement.dataset.id);
    });
}
