let carrinho = [];
let total = 0, qtdCarrinho = 0;

const carrinhoContainer = document.getElementById("carrinhoContainer");
const textoCarrinho = document.getElementById("textoCarrinho");
const botaoCarrinho = document.getElementById("botaoCarrinho");

// Estiliza para sobrepor outros elementos
carrinhoContainer.style.position = 'fixed';
carrinhoContainer.style.zIndex = '9999';
carrinhoContainer.style.overflowY = 'auto';  

// Abrir carrinho
function abrirCarrinho(event) {
    event.stopPropagation(); // Evita fechar ao clicar no botão
    carrinhoContainer.style.display = "block";
    document.body.style.overflow = "hidden";
    console.log("A");
}

// Fechar carrinho
function fecharCarrinho() {
    console.log("B");
    document.body.style.overflow = "auto";
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
function adicionarAoCarrinho(nome, preco, img, id) {
    const item = carrinho.find(item => item.id === id);
    if (item) {
        item.qtd++;
    } else {
        carrinho.push({ nome, preco, img, id, qtd: 1 });
        qtdCarrinho++;
        document.getElementById("contador").innerText = qtdCarrinho;
    }
    total += preco;
    total = parseFloat(total.toFixed(2));
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
    if(qtdCarrinho < 0) {
        qtdCarrinho = 0;
    }
    document.getElementById("contador").innerText = qtdCarrinho;
    if (carrinho[index].qtd > 1) {
        carrinho[index].qtd--;
    } else {
        carrinho.splice(index, 1);
    }
    
    atualizarCarrinho();
}


function atualizarCarrinho() {
    const carrinhoElemento = document.getElementById("carrinho");
    carrinhoElemento.innerHTML = "";


    carrinho.forEach((item, index) => {
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.alignItems = "top";
        
        const img = document.createElement("img");
        img.style.marginRight = "10px";
        img.style.marginBottom  = "20px";
        img.src = item.img;
        img.alt = item.nome;
        img.style.width = "50px"; 
    
       
        const texto = document.createElement("span");
        texto.innerHTML = `${item.nome} <br> R$${item.preco} - Qtd: ${item.qtd}`;
    
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
    

    document.getElementById("total").textContent = `R$ ${total}`;
}
