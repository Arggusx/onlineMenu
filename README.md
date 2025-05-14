# 🍽️ Cardápio Online

Este repositório contém o site principal do sistema de cardápio online, desenvolvido em React e TailWindcss. Ele permite que os usuários visualizem os itens disponíveis (como comidas e bebidas), façam pedidos e acompanhem o funcionamento do cardápio em tempo real.

## Funcionalidades

- Exibição de itens do cardápio com nome, descrição, imagem e preço;
- Itens organizados por categorias (ex: pratos principais, bebidas, sobremesas);
- Sistema de pedidos: o usuário seleciona os itens e envia para a cozinha;
- Design responsivo, compatível com celulares, tablets e desktops;
- Recebimento de QR Code para validação do pedido, enviado via WhatsApp após o pedido ser finalizado.

## Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Arggusx/onlineMenu.git

2. Acesse a pasta do projeto:

    `cd nome-do-repositorio`

3. Baixe e instale o Node.js:

    🔗 [Download do Node.js](https://nodejs.org/)


5. Instale as dependências:

    `npm install` ou `npm i`

6. Inicie o projeto localmente:

    `npm run dev`

Estará disponível em: `http://localhost:4000`

## Observações

* Os pedidos feitos neste site são enviados para o painel de administração, onde são gerenciados pelos funcionários.

* Este repositório é voltado apenas para o público final. O painel de administração está separado, em outro repositório.

* Após a finalização do pedido, o administrador gera um QR Code que é enviado via WhatsApp para o cliente. O garçom valida o pedido escaneando o QR Code ao entregar o prato.
