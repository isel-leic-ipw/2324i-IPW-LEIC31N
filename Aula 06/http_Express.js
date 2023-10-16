const express = require('express')

const produtos = [
  'Caneta',
  'lapis',
  'Eraser',
  'Cera',
  'Portatil'
]

const buscaProdutos = (produtoBuscado) => produtos.filter(produto => produtoBuscado === produto)

const server = express() /*servidor express*/

server.get('/produtos', (request, response) => {
  response.send(
    'Lista de Produtos:\n' +
    produtos.join('\n'))
})

server.get('/busca', (request, response) => {
  const produtosEncontrados = buscaProdutos(request.query.nomeProduto)

  response.send(
    'Lista de Produtos:\n' +
    produtosEncontrados.join('\n'))
})

server.listen(4000, () => console.log('Acesse localhost:4000'))
/*
npm install express (no terminal VSC)

No Browser http://localhost:3000/produtos
*/ 