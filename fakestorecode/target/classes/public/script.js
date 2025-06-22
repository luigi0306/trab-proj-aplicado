//login configs
document.addEventListener("DOMContentLoaded", () => {
  const loginIcon = document.getElementById("login-icon");
  const popupLogin = document.getElementById("popupLogin");
  const mensagem = document.getElementById("mensagem");
  const popupUsuario = document.getElementById("popupUsuario");
  const usuarioNomeSpan = document.getElementById("usuarioNome");
  const usuarioEmailP = document.getElementById("usuarioEmail");
  const btnDeslogar = document.getElementById("btnDeslogar");

  const formLogin = document.getElementById("formLogin");
  const formRegistro = document.getElementById("formRegistro");

  const loginEmail = document.getElementById("loginEmail");
  const loginSenha = document.getElementById("loginSenha");

  const registroNome = document.getElementById("registroNome");
  const registroEmail = document.getElementById("registroEmail");
  const registroSenha = document.getElementById("registroSenha");

  if (loginIcon) {
    loginIcon.addEventListener("click", () => {
      mostrarLogin(); 
      popupLogin.classList.remove("hidden");
      mensagem.textContent = "";
    });
  }

  document.getElementById("btnEntrar").addEventListener("click", (e) => {
    e.preventDefault();
    login();
  });

  document.getElementById("btnRegistrar").addEventListener("click", (e) => {
    e.preventDefault();
    registrar();
  });

  document.querySelector(".close-btn").addEventListener("click", fecharPopup);

  function fecharPopup() {
    popupLogin.classList.add("hidden");
    mensagem.textContent = "";
  }
  
window.mostrarRegistro = function () {
  formLogin.classList.add("hidden");
  formRegistro.classList.remove("hidden");
  mensagem.textContent = "";
};

window.mostrarLogin = function () {
  formRegistro.classList.add("hidden");
  formLogin.classList.remove("hidden");
  mensagem.textContent = "";
};


  function login() {
    const email = loginEmail.value.trim();
    const senha = loginSenha.value.trim();

    if (email === "admin" && senha === "admin") {
      localStorage.setItem("usuarioLogado", "admin");
      window.location.href = "admin.html";
      return;
    }

    const dados = JSON.parse(localStorage.getItem(email));

    if (dados && dados.senha === senha) {
      localStorage.setItem("usuarioLogado", email);
      mensagem.textContent = "Login bem-sucedido!";
      fecharPopup();
    } else {
      mensagem.textContent = "Email ou senha inválidos.";
    }
  }

  function registrar() {
    const nome = registroNome.value.trim();
    const email = registroEmail.value.trim();
    const senha = registroSenha.value.trim();

    if (!nome || !email || !senha) {
      mensagem.textContent = "Preencha todos os campos.";
      return;
    }

    if (localStorage.getItem(email)) {
      mensagem.textContent = "Usuário já existe.";
      return;
    }

    const usuario = {
      nome: nome,
      senha: senha
    };

    localStorage.setItem(email, JSON.stringify(usuario));
    mensagem.textContent = "Registro bem-sucedido! Faça login.";
    mostrarLogin();
  }

  function abrirPopupUsuario() {
  
  const emailLogado = localStorage.getItem("usuarioLogado");

  if (!emailLogado) {
    return; 
  }

  // Recupera os dados do usuário do localStorage
  const dadosUsuario = JSON.parse(localStorage.getItem(emailLogado));

  if (emailLogado === "admin") {
    usuarioNomeSpan.textContent = "Administrador";
    usuarioEmailP.textContent = "admin@noirelle.com";
  } else if (dadosUsuario) {
    usuarioNomeSpan.textContent = dadosUsuario.nome || "Usuário";
    usuarioEmailP.textContent = emailLogado;
  } else {
    usuarioNomeSpan.textContent = "Usuário";
    usuarioEmailP.textContent = emailLogado;
  }

  popupLogin.classList.add("hidden");
  popupUsuario.classList.remove("hidden");
}

loginIcon.addEventListener("click", () => {
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  if (usuarioLogado) {
    abrirPopupUsuario();
  } else {
    mostrarLogin();
    popupLogin.classList.remove("hidden");
    popupUsuario.classList.add("hidden");
  }
});

document.getElementById("fecharUsuario").addEventListener("click", () => {
  popupUsuario.classList.add("hidden");
});

btnDeslogar.addEventListener("click", () => {
  localStorage.removeItem("usuarioLogado");
  popupUsuario.classList.add("hidden");
  mensagem.textContent = "Você saiu da conta.";
});
});

//Carrinho 

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let total = 0, qtdCarrinho = 0;
carrinho.forEach((item, index) => {
    qtdCarrinho += item.qtd;
});
document.getElementById("contador").innerText = qtdCarrinho;

const carrinhoContainer = document.getElementById("carrinhoContainer");
const textoCarrinho = document.getElementById("textoCarrinho");
const botaoCarrinho = document.getElementById("botaoCarrinho");

carrinhoContainer.style.position = 'fixed';
carrinhoContainer.style.zIndex = '9999';
carrinhoContainer.style.overflowY = 'auto';  
sidebar.style.zIndex = '9998';

function abrirCarrinho(event) {
    event.stopPropagation(); 
    carrinhoContainer.style.display = "block";
    document.body.style.overflow = "hidden";
    console.log("A");
    atualizarCarrinho();
}

function fecharCarrinho() {
    console.log("B");
    document.body.style.overflow = "auto";
    carrinhoContainer.style.display = "none";
}

document.addEventListener("click", function (event) {
    const isClickDentro = carrinhoContainer.contains(event.target);
    const isBotaoCarrinho = botaoCarrinho.contains(event.target);
    if (!isClickDentro && !isBotaoCarrinho) {
        fecharCarrinho();
    }
});

function adicionarAoCarrinho(nome, preco, img, id) {
    const item = carrinho.find(item => item.id === id);
    if (item) {
        item.qtd++;
    } else {
        carrinho.push({ nome, preco, img, idComTamanho, qtd: 1 });
        qtdCarrinho++;
        document.getElementById("contador").innerText = qtdCarrinho;
    }
    total += preco;
    total = parseFloat(total.toFixed(2));
    salvarCarrinho();
    atualizarCarrinho();
}

function adicionarAoCarrinhoComQuantidade(nome, preco, img, id, quantidade, tamanho) {
  const item = carrinho.find(item => item.id === id);
  if (item) {
    item.qtd += quantidade;
  } else {
    carrinho.push({ nome, preco, img, id, qtd: quantidade, tamanho });
    qtdCarrinho++;
    document.getElementById("contador").innerText = qtdCarrinho;
  }

  total += preco * quantidade;
  total = parseFloat(total.toFixed(2));
  salvarCarrinho();
  atualizarCarrinho();
}

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function removerDoCarrinho(index) {
    if (total >= 0) {
        total -= carrinho[index].preco;
        total = parseFloat(total.toFixed(2));
    } else {
        total = 0;
    }

    if (carrinho[index].qtd > 1) {
        carrinho[index].qtd--;
        
    } else {
        carrinho.splice(index, 1);
        qtdCarrinho--; 
        if(qtdCarrinho < 0) {
            qtdCarrinho = 0;
        }
    }
    document.getElementById("contador").innerText = qtdCarrinho;
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
}


function atualizarCarrinho() {
    const carrinhoElemento = document.getElementById("carrinho");
    carrinhoElemento.innerHTML = "";
    total = 0;
    qtdCarrinho = 0;


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
        texto.innerHTML = `${item.nome} (${item.tamanho})<br> R$${item.preco} - Qtd: ${item.qtd}`;

    
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("btn-remover");
        botaoRemover.onclick = (event) => {
            event.stopPropagation();
            removerDoCarrinho(index);
        };
    
        li.appendChild(img);
        li.appendChild(texto);
        li.appendChild(botaoRemover);
        carrinhoElemento.appendChild(li);
        total += item.preco * item.qtd;
        total = parseFloat(total.toFixed(2));
        qtdCarrinho++;
    });
    

    document.getElementById("total").textContent = ` R$ ${total}`;
}

document.getElementById("logo").addEventListener("click", () => {
  document.getElementById("sidebar").classList.add("open");
});

document.getElementById("closeSidebar").addEventListener("click", () => {
  document.getElementById("sidebar").classList.remove("open");
});

document.getElementById("searchInput").addEventListener("input", async (event) => {
  const query = event.target.value;
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  if (query.length > 1) {
    const response = await fetch(`http://localhost:4567/api/products`);
    const products = await response.json();
  
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  
    filteredProducts.forEach((product) => {
      if (product.category === "women's clothing" ||
              product.category === "men's clothing" ||
              product.category === "jewelery") 
      {
        const lin = document.createElement("div");

      lin.addEventListener("click", () => {
        window.location.href = `produto.html?id=${product.id}`;
      });
  
      
      const img2 = document.createElement("img");
      img2.src = product.image; 
      img2.alt = product.title; 
      img2.style.width = "50px"; 
      img2.style.marginRight = "10px";
      img2.style.marginBottom  = "20px";
      img2.style.cursor = "pointer"; 

      lin.style.display = "flex";
      lin.style.alignItems = "top";
      lin.style.cursor = "pointer";
      lin.style.backgroundColor = "#f4f4f4";

      const text2 = document.createElement("span");
      text2.innerHTML = product.title + "<br>" + "R$ " + product.price.toFixed(2);
  
      lin.appendChild(img2);
      lin.appendChild(text2);
  
      resultsContainer.appendChild(lin);
      }
    });
  }
});

/*carrinho final */
