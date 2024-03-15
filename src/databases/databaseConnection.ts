import { knex as setupKnex } from 'knex'
import { env } from '../env/EnvConfig'

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
