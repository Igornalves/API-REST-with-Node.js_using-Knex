/* eslint-disable prettier/prettier */
import { FastifyInstance } from "fastify"
import { knex } from "../databases/databaseConnection"

export async function ConsultadoTabelas(app: FastifyInstance) {

    app.get('/alimentos', async () => {

        const tabelas = await knex('produtos_alimenticios').select('*')

        console.log(
            'retornando dados completos que existe na tabela produtos_alimenticios',
        )

        return tabelas
    })

    app.get('/eletronicos', async () => {

        const tabelas = await knex('produtos_eletronicos').select('*')

        console.log(
            'retornando dados completos que existe na tabela produtos_eltronicos',
        )

        return tabelas
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
}