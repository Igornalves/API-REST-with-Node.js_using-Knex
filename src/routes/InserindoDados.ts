import { FastifyInstance } from 'fastify'
import { knex } from '../databases/databaseConnection'

export async function inserindoDadosNasTabelas(app: FastifyInstance) {
  // criando a rota GET para inseerir dados na tabela de produtos eletronicos
  // que possui uma funcao assíncrona qu possui codigo de insercao
  app.get('/produtos_eletronicos', async () => {
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

    // imprimindo que deu certo a insercao dos dados usando query builders (knex.js)
    console.log(
      'Dados inserido com sucesso no Banco dee dados na tabela produtos_eletronicos!!!',
    )

    // retornando a variavel await (é uma palavra-chave usada em JavaScript em conjunto com funções assíncronas para esperar a conclusão de uma operação assíncrona)
    return inserindo
  })
}
