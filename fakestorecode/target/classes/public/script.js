let carrinho = [];
let total = 0, qtdCarrinho = 0 ;
const carrinhoContainer = document.getElementById("carrinhoContainer");
const textoCarrinho = document.getElementById("textoCarrinho");

function abrirCarrinho () {
    carrinhoContainer.style.display = "block";
    console.log("A");
}

function fecharCarrinho () {
    console.log("B");
    carrinhoContainer.style.display = "none";
}

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    total = parseFloat(total.toFixed(2));
    qtdCarrinho++;
    console.log(qtdCarrinho);
    document.getElementById("contador").innerText = qtdCarrinho;
    atualizarCarrinho();
}

function removerDoCarrinho(index) {
    if(total>=0) {
        total -= carrinho[index].preco;
        total = parseFloat(total.toFixed(2));
    }
    else {
        total=0;
    }
    
    qtdCarrinho--;
    document.getElementById("contador").innerText = qtdCarrinho;
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoElemento = document.getElementById("carrinho");
    carrinhoElemento.innerHTML = "";

    carrinho.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$${item.preco}`;
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerDoCarrinho(index);
        li.appendChild(botaoRemover);
        carrinhoElemento.appendChild(li);
    });

    document.getElementById("total").textContent = `Total: R$${total}`;
}
