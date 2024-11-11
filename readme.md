# API REST Notion

Este projeto é uma API REST para integração com o Notion.

## Requisitos

- Node.js
- npm
- Crie um arquivo `.env` baseado no `.env.example` com os dados corretos.

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/Jhuanassumpcao/apirest-notion.git
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

- `GET /api/tasks/:id`: Retorna uma linha específica do Notion.
- `POST /api/tasks`: Adiciona uma nova linha no Notion.
- `PUT /api/tasks/:id`: Atualiza uma linha existente no Notion.
- `DELETE /api/tasks/:id`: Remove uma linha do Notion.
