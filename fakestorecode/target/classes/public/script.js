let carrinho = [];
let total = 0, qtdCarrinho = 0;

const carrinhoContainer = document.getElementById("carrinhoContainer");
const textoCarrinho = document.getElementById("textoCarrinho");
const botaoCarrinho = document.getElementById("botaoCarrinho");

// Estiliza para sobrepor outros elementos
carrinhoContainer.style.position = 'fixed';
carrinhoContainer.style.zIndex = '9999';

// Abrir carrinho
function abrirCarrinho(event) {
    event.stopPropagation(); // Evita fechar ao clicar no botão
    carrinhoContainer.style.display = "block";
    console.log("A");
}

// Fechar carrinho
function fecharCarrinho() {
    console.log("B");
    carrinhoContainer.style.display = "none";
}

// Clicar fora do carrinho fecha ele
document.addEventListener("click", function (event) {
    const isClickDentro = carrinhoContainer.contains(event.target);
    const isBotaoCarrinho = botaoCarrinho.contains(event.target);
    if (!isClickDentro && !isBotaoCarrinho) {
        fecharCarrinho();
    }
});

// Adicionar item
function adicionarAoCarrinho(nome, preco, img) {
    carrinho.push({ nome, preco, img });
    total += preco;
    total = parseFloat(total.toFixed(2));
    qtdCarrinho++;
    document.getElementById("contador").innerText = qtdCarrinho;
    atualizarCarrinho();
}

// Remover item
function removerDoCarrinho(index) {
    if (total >= 0) {
        total -= carrinho[index].preco;
        total = parseFloat(total.toFixed(2));
    } else {
        total = 0;
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
    
        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.nome;
        img.style.width = "50px"; 
    
       
        const texto = document.createTextNode(` ${item.nome} - R$${item.preco}`);
    
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = (event) => {
            event.stopPropagation();
            removerDoCarrinho(index);
        };
    
        li.appendChild(img);
        li.appendChild(texto);
        li.appendChild(botaoRemover);
        carrinhoElemento.appendChild(li);
    });
    

    document.getElementById("total").textContent = `Total: R$${total}`;
}
