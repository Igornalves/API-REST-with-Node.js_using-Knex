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
      nome_produto: 'caixa de som portatil',
      categoria: 'eletronico',
      descricao:
        'caixa com fio e BT 5.0 inteligente mais otima qualidade de som',
      quantidade_estoque: 120,
      preco: 140,
    })
    .returning('*')

  console.log(
    'Dados inserido com sucesso no Banco dee dados na tabela produtos_eletronicos!!!',
  )

  return inserindo
})

app.get('/migration', async () => {
  const consultandoMigrations = await knex('knex_migrations_users').select('*')

  console.log('consulta liberada da migration !!!!')

  return consultandoMigrations
})

app.get('/migration2', async () => {
  const consultandoMigrations2 = await knex(
    'knex_migrations_users_lock',
  ).select('*')

  console.log('consulta liberada da migration2 !!!!')

  return consultandoMigrations2
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running !')
  })
