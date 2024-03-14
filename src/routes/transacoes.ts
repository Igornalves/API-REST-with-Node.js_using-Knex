/* eslint-disable prettier/prettier */
/* eslint-disable spaced-comment */
/* eslint-disable prettier/prettier */

import { FastifyInstance } from "fastify" //interface que define a estrutura  esperada de uma instância do Fastify, fornecer informações sobre a estrutura esperada dessa instância.

import { z } from 'zod' //biblioteca em TypeScript que fornece uma forma simples e eficiente de definir e validar esquemas de dados.

import { randomUUID } from 'node:crypto'// permite gerar identificadores únicos universalmente (UUIDs) de forma aleatória e segura.

import { knex } from "../databases/databaseConnection" //importando o arquivo de conexao

// request Body: Https protocolo

// fazendo um funcao asincrona com um parametro que recebe a instancia fastify para transacao

export async function transacoesMaisValidacao(app: FastifyInstance)  {

    // {titulo, valor da transacao, tipo: credito ou debito}

    app.post('/transacao', async (request, replay) => {

        const criandoTransacoesNoBodySchema = z.object({
            titulo: z.string(),
            amount: z.number(),
            type: z.enum(['credito', 'debito']),
        })

        const { titulo, amount, type } = criandoTransacoesNoBodySchema.parse(
            request.body,
        )

        await knex('transacoes').insert({
            id: randomUUID(),
            titulo,
            amount: type === 'credito' ? amount : amount * -1,
        })

        console.log('migracao feita com sucesso !!!!')

        return replay.status(201).send('transacao enviada com suceesso !!!')

    })
}
