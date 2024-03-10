/* eslint-disable prettier/prettier */
import { knex as setupKnex } from 'knex'
import { env } from './env/intex';

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL nao possui uma String URL indicando o caminho para o banco");
}

export const knex = setupKnex({
  client: 'pg',
  connection: {
    filename: env.DATABASE_URL
  },
})
