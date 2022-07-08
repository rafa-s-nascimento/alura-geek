window.addEventListener("load", function () {
    const id = parseInt(localStorage.getItem("id-produto"));
    const selectedProduct = produtos.find(function (item) {
        return item.id == id;
    });

    // Produto principal
    const container = document.querySelector(".container-item-produtos");

    container.innerHTML = `<div class="item-principal">
                        <div class="container-img-principal">
                        <img
                                src="${selectedProduct.img}"
                                alt="caneca stormtrooper"
                            />
                            
                        </div>
                        <div class="container-text-principal">
                            <h3 class="nome-produto-principal">
                                ${selectedProduct.nome}
                            </h3>
                            <p class="preco-produto-princial bold">${selectedProduct.preco}</p>
                            <p class="descricao-produto-principal">
                                ${selectedProduct.descricao}
                            </p>
                        </div>
                    </div>`;

    // colocando imagem principal através de background -- teste
    // const imgProduto = document.querySelector(".container-img-principal");
    let url = `.${selectedProduct.img}`;
    // imgProduto.style.backgroundImage = `url(${url})`;

    // end produto principal

    // adicionando produtos Similares

    const containerItems = document.querySelector(".container-items");

    let idProdutos = [];
    let aleatoryItem;

    idProdutos.push(selectedProduct.id);

    let objetosSimilares = produtos.filter(function (item) {
        if (
            item.categoria === selectedProduct.categoria &&
            item.id !== selectedProduct.id
        ) {
            idProdutos.push(item.id);
            return true;
        }
    });

    let numAleatorio = sorteiaNumAleatorio(idProdutos);

    aleatoryItem = produtos.find(function (item) {
        return item.id == numAleatorio;
    });

    objetosSimilares.push(aleatoryItem);

    containerItems.innerHTML = objetosSimilares
        .map(function (item) {
            return `<div class="item" data-id="${item.id}">
                                <div class="container-img">
                                    <img src="${item.img}" alt="${item.nome}">
                                </div>
                                <p class="nome-produto">${item.nome}</p>
                                <p class="preco-produto">${item.preco}</p>
                                <a href="produto.html" class="link-produto">Ver produto</a>
                            </div>`;
        })
        .join("");

    const linkProdutos = document.querySelectorAll(".link-produto");

    linkProdutos.forEach(addLocalStorage);
});

function addLocalStorage(link) {
    link.addEventListener("click", function (e) {
        // e.preventDefault();

        let id = e.currentTarget.parentElement.dataset.id;

        localStorage.setItem("id-produto", id);
    });
}

function sorteiaNumAleatorio(arr) {
    let aleatorio = [];

    while (aleatorio.length < 1) {
        let num = Math.ceil(Math.random() * produtos.length);

        if (arr.indexOf(num) === -1) {
            aleatorio.push(num);
            break;
        }
    }

    return aleatorio[0];
}
