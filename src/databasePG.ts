/* eslint-disable prettier/prettier */
import { knex as setupKnex } from 'knex'

export const knex = setupKnex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'igorn',
    password: '08901',
    database: 'sistema_de_vendas',
  },
  // outra forma de fazer a conexao com o banco de dados
  // connection: 'postgres://igorn:08901@localhost:5432/sistema_de_vendas',
  // searchPath: ['knex', 'public'],
})
