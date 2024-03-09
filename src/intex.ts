import fastify from 'fastify'
import { knex } from './databasePG'

const app = fastify()

// base da aplicacao
// principais metodos: GET, POST, PUT, PATCH, DELETE
// http://localhost:3333/hello

app.get('/alimentos', async () => {
  const tabelas = await knex('produtos_alimenticios').select('*')

  console.log(
    'retornando dados completos que existe na tabela produtos_alimenticios',
  )

  return tabelas
})

app.get('/produtos', async () => {
  const tabelas = await knex('produtos_eletronicos').select('*')

  console.log(
    'retornando dados completos que existe na tabela produtos_eltronicos',
  )

  return tabelas
})

app.get('/inserindo', async () => {
  const inserindo = await knex('produtos_eletronicos')
    .insert({
      nome_produto: 'projetor portatil',
      categoria: 'eletronico',
      descricao: 'projeto com wifi 6.0 e BT 5.0 inteligente e full HD',
      quantidade_estoque: 300,
      preco: 440,
    })
    .returning('*')

  console.log(
    'Dados inserido com sucesso no Banco dee dados na tabela produtos_eletronicos!!!',
  )

  return inserindo
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running !')
  })
