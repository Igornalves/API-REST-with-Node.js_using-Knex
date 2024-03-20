import { FastifyInstance } from 'fastify' // interface que define a estrutura  esperada de uma instância do Fastify, fornecer informações sobre a estrutura esperada dessa instância.
import { knex } from '../databases/databaseConnection' // importando o arquivo de conexao

export async function ConsultadoTabelas(app: FastifyInstance) {
  app.get('/alimentos', async () => {
    // criando uma const para selecionar a tabela do banco
    const tabelas = await knex('produtos_alimenticios').select('*')

    // imprimindo no terminal para vr se deu certo a conexao
    console.log(
      'retornando dados completos que existe na tabela produtos_alimenticios',
    )

    // retornando a selecao da tabela
    return { tabelas }
  })

  app.get('/eletronicos', async () => {
    const tabelas = await knex('produtos_eletronicos').select('*')

    console.log(
      'retornando dados completos que existe na tabela produtos_eltronicos',
    )

    // retornado um objeto para que possa ser trabalhado outros dados nesse retorno
    return {
      lista: 'novos itens chegando sempre',
      tabelas,
    }
  })
}
