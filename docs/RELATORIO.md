# Relatório de Desenvolvimento

Este relatório tem como objetivo descrever o processo de desenvolvimento do projeto Noirelle, um site demonstrativo de e-commerce de roupas, criado para a disciplina **Projeto Aplicado II** da UnDF.

## Etapas do Desenvolvimento

### 1. Ideação e Protótipo

O ponto de partida do projeto foi a fase de ideação visual e funcional da plataforma, onde nos concentramos em definir a estética e a experiência do usuário (UX). Utilizamos o **Figma** como ferramenta principal para a construção de protótipos navegáveis. Nessa etapa, foram definidos os principais elementos visuais como:

- Paleta de cores (com tons terrosos/amarronzados, inspirados na moda francesa),
- Tipografia,
- Navegação entre páginas,
- Estrutura básica do layout (header, hero, cards de produtos, footer etc.).

Além disso, definimos a **estrutura de categorias** (Cavalheiros, Damas, Novidades, Style de Vie), reforçando o estilo francês da marca fictícia.

### 2. Conversão do protótipo para código

Após a finalização dos protótipos no Figma, utilizamos uma ferramenta complementar do próprio Figma que gera automaticamente trechos de código HTML e CSS a partir das camadas visuais. Isso nos ajudou a dar os primeiros passos no front-end com uma base estruturada.

Essa abordagem acelerou o processo inicial de desenvolvimento, já que a estrutura visual estava clara e com base em um design previamente já aprovado pelo grupo.

### 3. Integração no VS Code

Com o código-base gerado, migramos o projeto para o VS Code, onde passamos a trabalhar de forma mais integrada. Iniciamos também a organização do repositório e o versionamento do projeto com Git e GitHub.

Para possibilitar futuras implementações envolvendo lógica de back-end, integração com banco de dados e testes mais robustos, configuramos o projeto com o Maven.

Mesmo que o projeto não tenha uma funcionalidade de login ou persistência real de dados (como em bancos de dados relacionais), a integração com o Maven foi útil para organizar o uso de bibliotecas como o SparkJav* (para o back-end) e o consumo da FakeStoreAPI (API responsável pelos dados dos produtos exibidos).

### 4. Desenvolvimento Web

A maior parte do tempo de desenvolvimento foi direcionada á confecção do front-end, utilizando:

- HTML para estrutura,
- CSS para estilização,
- JavaScript para interação com a API.

Durante essa fase, trabalhamos em conjunto para adaptar o layout original no que foi tomando cara com o andamento do desenvolvimento. A utilização da FakeStoreAPI permitiu usufruir de produtos genéricos (roupas, acessórios, etc.), simulando uma loja real.

### 5. Dificuldades e Soluções

A parte mais desafiadora do projeto foi a estilização do front-end. Tentando alinhar os elementos visuais de acordo com o protótipo original, mantendo a responsividade e a fidelidade estética, nos exigiu muito aprimoramento e dedicação.

Além disso, a integração com a API exigiu o entendimento de requisições assíncronas, estrutura de dados em JSON, manipulação do DOM com JavaScript e uso de fetch.

Para superar essas dificuldades, assistimos conteúdos de desenvolvimento no YouTube, consultas à documentação oficial das tecnologias utilizadas e também contamos com o suporte de ferramentas de inteligência artificial (como o ChatGPT) para resolução de problemas específicos e sugestões de melhorias no código.

## Conclusão

O projeto foi uma experiência rica de aprendizado prático. Concluímos um site com estrutura completa de navegação, listagem e detalhamento de produtos, com visual atrativo e responsivo. Conseguimos aplicar com sucesso o conhecimento adquirido ao longo da disciplina e desenvolvemos habilidades essenciais para projetos futuros, como trabalho em equipe, versionamento com Git, uso de ferramentas modernas de prototipação e desenvolvimento web com integração entre front-end e back-end.

Apesar das limitações de tempo e escopo (como a ausência de sistema real de login, pagamento ou banco de dados), o resultado final atendeu aos objetivos da disciplina e está disponível em repositório público no GitHub para consulta.

