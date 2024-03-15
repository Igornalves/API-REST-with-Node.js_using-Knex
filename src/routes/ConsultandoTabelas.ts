import { FastifyInstance } from 'fastify' // interface que define a estrutura  esperada de uma instância do Fastify, fornecer informações sobre a estrutura esperada dessa instância.
import { knex } from '../databases/databaseConnection' // importando o arquivo de conexao

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
    const consultandoMigrations = await knex('migracoes_transacoes').select('*')

    console.log('consulta liberada da migration1 !!!!')

    return consultandoMigrations
  })

  app.get('/migration2', async () => {
    const consultandoMigrations2 = await knex(
      'migracoes_transacoes_lock',
    ).select('*')

    console.log('consulta liberada da migration2 !!!!')

    return consultandoMigrations2
  })

  app.get('/migration3', async () => {
    const consultandoMigrations2 = await knex('transacoes').select('*')

    console.log('consulta liberada da migration3 !!!!')

    return consultandoMigrations2
  })
}
