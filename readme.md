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

- `GET /api/tasks/:id`: Retorna todas as páginas do Notion.
- `POST /api/tasks`: Cria uma nova página no Notion.
- `PUT /api/tasks/:id`: Cria uma nova página no Notion.
- `DELETE /api/tasks/:id`: Cria uma nova página no Notion.