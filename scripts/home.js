const containerSection = document.querySelector(".container-section-items");
const arraySection = [];

window.addEventListener("DOMContentLoaded", function () {
    categorias.forEach(function (categoria) {
        let category = categoria;

        const itensFiltrados = produtos.filter(function (produto) {
            return produto.categoria === category;
        });

        let innerHTMLSection = `<div class="titulo-section-items">
                        <h3 class="titulo" id="${category}">${category}</h3>
                        <a href="produtos.html"
                            >Ver tudo<i class="fa-solid fa-arrow-right-long"></i
                        ></a>
                    </div>
                    <div class="container-item">
                        ${gerarItems(itensFiltrados)}
                    </div>`;

        arraySection.push(innerHTMLSection);
    });

    function gerarItems(array) {
        let innerHTML = array
            .map(function (produto) {
                return `<div class="item">
                            <div class="container-img">
                                <img src="${produto.img}" alt="${produto.nome}">
                            </div>
                            <p class="nome-produto">${produto.nome}</p>
                            <p class="preco-produto">${produto.preco}</p>
                            <a href="#">Ver produto</a>
                        </div>`;
            })
            .join("");

        return innerHTML;
    }

    containerSection.innerHTML = arraySection.join("");
});
