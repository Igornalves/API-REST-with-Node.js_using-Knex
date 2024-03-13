/* eslint-disable prettier/prettier */
import { FastifyInstance } from 'fastify'
import { knex } from '../databases/databaseConnection'

export async function inserindoDadosNasTabelas(app: FastifyInstance) {
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

        console.log(
            'Dados inserido com sucesso no Banco dee dados na tabela produtos_eletronicos!!!',
        )

        return inserindo
    })
}
