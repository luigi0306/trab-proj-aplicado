# Trabalho de Projeto Aplicado 2 - Prof. Vinicius / UnDF
## Integrantes do grupo e suas respectivas funções:

- Documentação e arquitetura: João Enomoto
- Desenvolvedor e integração - Luca Matos Parente
- Gerente e repositório: Luigi Calovi Fonini
- Protótipo UX: Estevao Souza
- Requisitos e Testes: João Paulo Tablas

# Noirelle - Loja de roupas on-line

A Noirelle é um site de e-commerce de roupas, desenvolvido como um **projeto demonstrativo** para a disciplina de **Projeto Aplicado II**. O site simula uma loja virtual com listagem de produtos, categorias e detalhes de itens, com foco na integração entre front-end e back-end.

> **Nota:** Este projeto é não funcional (sem sistema real de pagamentos ou login), sendo voltado apenas para fins educacionais e avaliação acadêmica.

# Sobre o projeto/ About the project

## Objetivos
Fazer um site funcional, otimizado, rápido, responsivo e agradável ao usuário


## Tecnologias
O site foi desenvolvido com as seguintes tecnologias:
- HTML
- CSS
- JAVASCRIPT
- JAVA 24
- FAKESTORE API

## Concepção e Estilo 
A proposta estética do site Noirelle é inspirada na elegância da moda francesa, com foco em uma paleta de cores amarronzadas, terrosas e neutras, remetendo à sofisticação e ao estilo bucólico contemporâneo.

A fase de ideação incluiu o desenvolvimento de protótipos no Figma, com rascunhos da estrutura das páginas, definição das cores e posicionamento dos elementos principais.

Os produtos não são de autoria própria, sendo consumidos de uma API externa (FakeStoreAPI - https://fakestoreapi.com/)

## Estrutura do Projeto

```text
trab-proj-aplicado/
├── src/
│   └── main/
│       └── java/
│           └── com/
│               └── example/
│                   └── Main.java         # Classe principal do servidor Spark
│
│       └── resources/
│           └── public/
│               ├── index.html           # Página inicial 
│               ├── categorias.html      # Página de categorias 
│               ├── produto.html         # Página de detalhes do produto
│               ├── finalizar.html       # Página de finalização 
│               ├── script.js            # Lógica de consumo da API e interações
│               └── style.css            # Estilização do site 
│
├── target/                              # Gerado automaticamente 
│   └── fake-store-demo-1.0-SNAPSHOT.jar # JAR gerado pelo Maven
│
├── pom.xml                              # Arquivo de configuração Maven
└── .gitkeep                             # Placeholder para manter diretórios vazios no Git
```
[*Como Executar*](ESTRUTURA.MD)
