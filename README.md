<h1 align="center">
    API REST - Waifus 🏪
</h1>

<p align="center">
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rodando">Rodando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<a id="tecnologias"></a>

## Tecnologias 🖥️

<div align="center">
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Opera-FF1B2D?style=for-the-badge&logo=Opera&logoColor=white"/>
    <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
    <img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"/>
    <img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white" />
    <img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"/>
    <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
</div>

<a id="projeto"></a>

## Project 📕

Simple api for otakus

building on NodeJS with TypeScript, running on server local

<a id="rodando"></a>

## Running the App 🚀

With the .env.example file, rename it to .env and fill in the information that is requested:

```
# APP
PORT=
BASE= (example http://localhost:4000)

DB_CONN_STRING=
DB_NAME=
GAMES_COLLECTION_NAME=
```

Keep in mind that you own:

    - a code editor
    - NodeJS
    - Mongodb Server (If running natively)


### Running natively 🌅

1. First install all dependencies, use the package manager to your liking.

```bash
npm install
# ou
yarn install
```

2. Remember to have a Mongodb server running on your machine.

3. Now open the current directory and type in the terminal:

```bash
npm run dev
# ou
yarn dev
```

<a id="como-contribuir"></a>

## 🤔 Como contribuir

- Fork this repository;
- Create a branch with your feature: `git checkout -b minha-feature`;
- Commit your changes: `git commit -m 'feat: Minha nova feature'`;
- Push to your branch: `git push origin minha-feature`.

After your pull request is merged, you can delete your branch.

<a id="license"></a>

### 🔖 License

Caso queira conferir a licença do projeto, só olhar esse arquivo [LICENSE](./LICENSE)