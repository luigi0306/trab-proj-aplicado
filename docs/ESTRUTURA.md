# Como executar o projeto

**Softwares necessários para execução do projeto**
- Alguma IDE de sua escolha [(Recomendamos VSCode)](https://code.visualstudio.com/)
- [GIT](https://git-scm.com/downloads)
- [JAVA 24](https://www.oracle.com/br/java/technologies/downloads/)
- [MAVEN](https://maven.apache.org/download.cgi) 

## Para executar o projeto localmente

1. Crie uma pasta e abra ela com o VSCode

2. No terminal, clone esse repositório com o git
```bash
   git clone https://github.com/luigi0306/trab-proj-aplicado.git
```
3. Navegue até a pasta do projeto
 cd trab-proj-aplicado

4. Compile e execute o código utilizando o Maven
   mvn clean install
   mvn exec:java 

**Obs**: Caso o Java instalado na sua máquina não seja o 24, vá no pom.xml, na parte <properties> e troque para a versão do Java que voce desejar

5.Acesse o site em seu navegador:

http://localhost:4567

# Estrutura do Projeto

`./src/main/java/com/example/Main.java:` Ponto de entrada da aplicação Java. Responsável por inicializar o servidor com Spark e expor rotas para servir os arquivos HTML e consumir a FakeStoreAPI.

`./src/main/resources/public/index.html:` Página inicial do site, com o hero principal e navegação entre as seções da loja.

`./src/main/resources/public/categorias.html:` Tela que apresenta as categorias de produtos (Cavalheiros, Damas, Novidades, Style de Vie), com dados consumidos da API externa.

`./src/main/resources/public/produto.html:` Exibe os detalhes de um produto específico selecionado, carregado dinamicamente com base no ID da URL.

`./src/main/resources/public/finalizar.html:` Página final do fluxo, usada para simular a etapa de checkout (não funcional).

`./src/main/resources/public/script.js:` Código JavaScript principal. Responsável por:

Buscar produtos e categorias da FakeStoreAPI.

Popular dinamicamente as páginas HTML.

Lidar com eventos de clique e navegação.

`./src/main/resources/public/style.css:` Estilização com paleta amarronzada e tipografia inspirada na moda francesa. Os elementos são responsivos e seguem a identidade visual definida no protótipo Figma.

`./target/:` Diretório gerado automaticamente pelo Maven com os arquivos compilados.

`pom.xml:` Arquivo de configuração do Maven com dependências e metadados do projeto.
