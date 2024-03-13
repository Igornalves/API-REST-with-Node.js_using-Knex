/* eslint-disable prettier/prettier */
import { knex as setupKnex } from 'knex'
import { env } from '../env/EnvConfig';

if (!process.env.HOST_DB) {
  throw new Error("HOST_DB nao possui uma String indicando o caminho IP para o banco");
}

if (!process.env.USER_DB) {
  throw new Error("USER_DB nao possui um String indicando o nome correto para o usuario no banco");
}

if (!process.env.PASSWORD_DB) {
  throw new Error("PASSWORD_DB nao possui um String indicando a senha correta do usuario desejado no banco");
}

if (!process.env.DATABASE_NAME) {
  throw new Error("DATABASE_NAME nao possui um String indicando o nome correta do banco de dado desejado");
}

export const knex = setupKnex({
  client: env.DATABASE_CLIENT,
  connection: {
    host: env.HOST_DB,
    port: env.PORT_DB,
    user: env.USER_DB,
    password: env.PASSWORD_DB,
    database: env.DATABASE_NAME,
  },
})
