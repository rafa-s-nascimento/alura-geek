const itensContainer = document.querySelector(".container-item-produtos");

window.addEventListener("load", function () {
    function gerarItems(array) {
        let innerHTML = array
            .map(function (produto) {
                return `<div class="item">
                            <button class="excluir">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                            <button class="editar">
                                <i class="fa-solid fa-pen"></i>
                            </button>
                                <div class="container-img">
                                    <img src="${produto.img}" alt="${produto.nome}">
                                </div>
                                <p class="nome-produto">${produto.nome}</p>
                                <p class="preco-produto">${produto.preco}</p>
                                <p class="id-produto">${produto.id}</p>
                            </div>`;
            })
            .join("");

        return innerHTML;
    }

    itensContainer.innerHTML = gerarItems(produtos);
});
