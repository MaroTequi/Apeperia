<h1 align="center"> Apeperia

![Banner Apeperia](https://user-images.githubusercontent.com/92412984/202663923-98a8d7be-7ccc-40f4-a192-1b83143aa3b8.png)

![GitHub Org's stars](https://img.shields.io/github/stars/MaroTequi?style=social)

## Descrição

Plataforma para contratação de serviços de criação de aplicativos, apresentando as informações mais importantes diretamente na página principal, com planos e preços em cards para compra imediata.

![Project Apeperia](https://user-images.githubusercontent.com/92412984/202669346-9b361cc5-a3ce-46b7-8079-0e47bedf42d7.png)

## 📱 Tecnologias

### Frontend
- **React** 19
- **Vite** 6
- **CSS Modules** + Design System customizado

### Backend
- **Java** 21
- **Spring Boot** 3.4.3
- **Maven**

## 📁 Estrutura do Projeto

```
Apeperia/
├── apeperia-frontend/      # Aplicação React (Vite)
│   ├── src/
│   │   ├── components/     # Componentes React (Header, Hero, Planos, etc.)
│   │   ├── App.jsx         # Componente principal
│   │   ├── main.jsx        # Ponto de entrada
│   │   └── index.css       # Design System global
│   ├── public/img/         # Assets estáticos
│   └── package.json
│
├── apeperia-backend/       # API Spring Boot
│   ├── src/main/java/com/apeperia/
│   │   ├── controller/     # Endpoints REST
│   │   ├── model/          # Modelos de dados
│   │   └── config/         # Configurações (CORS, etc.)
│   └── pom.xml
│
└── README.md
```

## 🚀 Como Rodar

### Frontend

```bash
cd apeperia-frontend
npm install
npm run dev
```

O servidor de desenvolvimento estará disponível em `http://localhost:5173`.

### Backend

```bash
cd apeperia-backend
./mvnw spring-boot:run
```

A API estará disponível em `http://localhost:8080`.

## ⚒️ Funcionalidades

- **Apresentação**: Landing page com informações sobre a empresa
- **Destaques**: Seção de conteúdos em destaque
- **Sobre**: Informações sobre a Apeperia e plataformas suportadas
- **Planos**: Cards de planos (Start, Mega, Ultra) com preços e compra direta
- **Contato**: Formulário de contato integrado à API
- **Institucional**: Endereço, telefone e vídeo institucional

## 🧑‍🤝‍🧑 Contribuindo

Este projeto existe graças a todas as pessoas que contribuem. [[Contribua](CONTRIBUTING.md)].

## Desenvolvedor

| [<img src="https://user-images.githubusercontent.com/92412984/202680910-be6d2bd8-7529-463a-b7a6-0661bf859c57.jpg" width=115><br><sub>Maurício Oliveira</sub>](https://github.com/MaroTequi) |
| :---: |
