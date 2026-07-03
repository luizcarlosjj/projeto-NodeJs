# API de Vídeos

API REST simples para cadastro de vídeos, construída com [Fastify](https://fastify.dev/). Os dados são persistidos em um banco Postgres (via [Neon](https://neon.tech/)), com uma implementação alternativa em memória disponível em `database-memory.js`.

## Tecnologias

- Node.js
- Fastify
- Postgres (Neon serverless)
- dotenv

## Instalação

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto com a variável de conexão do banco:

```
DATABASE_URL=postgres://usuario:senha@host/banco
```

## Executando

```bash
npm start
```

Ou em modo desenvolvimento (com reload automático):

```bash
npm run dev
```

O servidor sobe por padrão na porta `3333` (configurável via variável de ambiente `PORT`).

## Rotas

| Método | Rota          | Descrição                          |
|--------|---------------|-------------------------------------|
| POST   | `/videos`     | Cria um novo vídeo                  |
| GET    | `/videos`     | Lista vídeos (aceita `?search=`)    |
| PUT    | `/videos/:id` | Atualiza um vídeo existente         |
| DELETE | `/videos/:id` | Remove um vídeo                     |

Exemplos de requisições estão disponíveis em [routes.http](routes.http).

### Corpo da requisição (POST/PUT)

```json
{
  "title": "video 1",
  "description": "esse é meu primeiro video",
  "duration": 180
}
```
