# API REST Notion

Este projeto é uma API REST para integração com o Notion.

## Requisitos

- Node.js
- npm

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/apirest-notion.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd apirest-notion
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Uso

1. Inicie o servidor:
    ```sh
    npm run dev
    ```
2. Acesse a API em `http://localhost:3000`.

## Endpoints

- `GET /api/rows/:id`: Retorna uma linha específica do Notion.
- `POST /api/rows`: Adiciona uma nova linha no Notion.
- `PUT /api/rows/:id`: Atualiza uma linha existente no Notion.
- `DELETE /api/rows/:id`: Remove uma linha do Notion.