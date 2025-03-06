# 🏢 Gerenciador de Clientes

## 🔥 Introdução
Um sistema simples de gerenciamento de clientes, desenvolvido com **Vite**, **React**, **TypeScript** e **TailwindCSS** no **Frontend**, e **Fastify**, **Prisma** e **MongoDB** no **Backend**.

### 🎯 Funcionalidades
✔️ Cadastrar novos clientes
✔️ Listar clientes cadastrados
✔️ Excluir clientes
✔️ Consumo de API para gerenciamento de dados
✔️ Exibição do status do cliente

## 🚀 Tecnologias Utilizadas


### 🔹 Frontend

- **React** ⚛️
- **TypeScript** 🟦
- **Vite** ⚡
- **TailwindCSS** 🎨
- **Axios** 🔗
- **React Icons** 🖼️

### 🔹 Backend

- **Fastify** ⚡
- **TypeScript** 🟦
- **Prisma** 🛢️
- **MongoDB** 🏦
- **Fastify CORS** 🔐 



## 📂 Estrutura do Projeto
``` bash
📂 gerenciador-clientes
 ┣ ┣ 📂 backend
 ┃ ┃ ┣ 📂 prisma
 ┃ ┃ ┃ ┗ schema.prisma
 ┃ ┃ ┣ 📂 src
 ┃ ┃ ┃ ┣ 📂 controllers
 ┃ ┃ ┃ ┣ 📜 CreateCustomerController.ts
 ┃ ┃ ┃ ┣ 📜 DeleteCustomerController.ts
 ┃ ┃ ┃ ┗ 📜 ListCustomerController.ts
 ┃ ┃ ┃ ┣ 📂 prisma
 ┃ ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┃ ┃ ┣ 📂 services
 ┃ ┃ ┃ ┃ ┣ 📜 CreateCustomerService.ts
 ┃ ┃ ┃ ┃ ┣ 📜 DeleteCustomerService.ts
 ┃ ┃ ┃ ┃ ┗ 📜 ListCustomerService.ts
 ┃ ┃ ┃ ┣ 📜 routes.ts
 ┃ ┃ ┃ ┗ 📜 server.ts
 ┃ ┃ ┣ 📜 .gitignore
 ┃ ┃ ┣ 📜 api.http
 ┃ ┃ ┣ 📜 package.json
 ┃ ┃ ┣ 📜 package-lock.json
 ┃ ┃ ┗ 📜 tsconfig.json
 ┃ ┣ 📂 frontend
 ┃ ┃ ┣ 📂 src
 ┃ ┃ ┃ ┣ 📂 components
 ┃ ┃ ┃ ┃ ┣ 📜 ClientItem.tsx
 ┃ ┃ ┃ ┃ ┣ 📜 Form.tsx
 ┃ ┃ ┃ ┃ ┗ 📜 ListClients.tsx
 ┃ ┃ ┃ ┣ 📂 services
 ┃ ┃ ┃ ┃ ┗ 📜 api.ts
 ┃ ┃ ┣ 📜 App.tsx
 ┃ ┃ ┣ 📜 index.css
 ┃ ┃ ┣ 📜 main.tsx
 ┃ ┃ ┗ 📜 vite-env.d.ts
 ┃ ┣ 📜.gitignore
 ┃ ┣ 📜 eslint.config.js
 ┃ ┣ 📜 index.html
 ┃ ┣ 📜 package.json
 ┃ ┣ 📜 package-lock.json
 ┃ ┣ 📜 tsconfig.json
 ┃ ┣ 📜 tsconfig.app.json
 ┃ ┣ 📜 tsconfig.node.json
 ┃ ┗ 📜 vite.config.json
 ┣ 📜 .gitattributes
 ┗ 📜 README.md

```

## 🛠️ Como Executar o Projeto

1️⃣ Clone o repositório

```bash
 git clone https://github.com/tatyanepgoncalves/gerenciador-clientes.git
```

2️⃣ Instale as dependências

```bash
cd gerenciador-clientes
npm install  # ou yarn install
```

3️⃣ Configure a API Backend
Certifique-se de que a API está rodando localmente na porta `3333` ou ajuste a URL em `services/api.ts`.

4️⃣ Inicie o projeto
```bash
npm run dev # ou yarn dev
```

## 🌍 API Endpoints Utilizados
- `GET /customers` -> Lista todos os clientes
- `POST /customer` -> Adiciona um novo cliente
- `DELETE /customer/:id` -> Remove um cliente pelo ID

## 📌 Melhorias Futuras

🔹 Editar clientes cadastrados
🔹 Paginação na listagem de clientes
🔹 Confirmação antes de excluir um cliente

## 

🚀 Desenvolvido por [@tatyanepgoncalves](https://github.com/tatyanepgoncalves)