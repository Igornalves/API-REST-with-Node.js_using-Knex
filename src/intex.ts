import fastify from 'fastify'
import { knex } from './databasePG'
import { knexTest } from './databaseSQLITE'

const app = fastify()

// base da aplicacao
// principais metodos: GET, POST, PUT, PATCH, DELETE
// http://localhost:3333/hello

app.get('/alimentos', async () => {
  const tabelas = await knex('produtos_alimenticios').select('*')

  return tabelas
})

app.get('/sqlite', async () => {
  const tabelaTest = await knexTest('sqlite_schema').select('*')

  return tabelaTest
})

app.get('/produtos', async () => {
  const tabelas = await knex('produtos_eletronicos').select('*')

  return tabelas
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running !')
  })
