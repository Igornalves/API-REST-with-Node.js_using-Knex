/* eslint-disable prettier/prettier */
import { knex as setupKnex, Knex } from 'knex'

export const config: Knex.Config = {
    client: 'sqlite',
    connection: {
        filename: './tmp/app.db',
    },
    useNullAsDefault: true,
    migrations: {
        extension: 'ts',
        directory: './tmp/migrations'
    }
}

export const knexTest = setupKnex(config)
