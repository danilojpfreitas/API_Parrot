# Parrot - Hands On 04

<p align="center">
  <img src="./docs/logo.png" width="30%">
</p>
<p align="center">
<a href="https://insomnia.rest/run/?label=Parrot&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fdanilojpfreitas%2FHands_On_04_Typeorm%2Fmain%2Fdocs%2FInsomnia_2022-09-07.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

---

No Hands On 04 - Parrot, foi proposto a criação de uma rede social a Parrot. A rede social Parrot é um sistema white label (ou seja, um sistema modelo criado por uma empresa que pode ser reutilizado por outras, apenas modificando informações como logo e marca) do qual condomínios podem contratar para incentivar a interação entre os moradores. A plataforma permite que os usuários façam publicações que ficam visíveis para toda comunidade.

---
## Como usar a API
1. Após clonar o repositório, executar o comando `npm install` ou `yarn install`
2. Criar um arquivo `.env` apartir do arquivo `.env-model` e alterar as credenciais do banco de dados
3. Criar banco de dados sem tabelas no mysql com o comando: `create database nomeDaDataBase`
4. Após configurado, realizar as migrations com os comandos: `npm run migration:generate` e em seguida `npm run migration:run`
5. Inicializar o banco de dados com `npm run dev`
  
---
## Corpo das requisições

1. corpo do create user `{"name": string, "email": string, "password": string, "apartment": int}`
2. corpo do create post `{"content": string}`

---
## :page_with_curl: Documentação

Todas as informações da documentação da API podem ser vistas ao clicar em Run in Insomnia neste README  

---
## :keyboard: Desenvolvedores participantes

[<sub>Larissa Mendes</sub>](https://github.com/annalare)  
[<sub>Danilo Freitas</sub>](https://github.com/danilojpfreitas)  
[<sub>Giordano Cassini</sub>](https://github.com/giordanocassini)  
[<sub>Eduardo Almeida de Jesus</sub>](https://github.com/)  
