/* eslint-disable prettier/prettier */
import { FastifyInstance } from "fastify"
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { knex } from "../databases/databaseConnection"

// request Body: Https protocolo

export async function transacoesMaisValidacao(app: FastifyInstance) {

    // {titulo, valor da transacao, tipo: credito ou debito}

    app.post('/transacao', async (request, replay) => {

        const criandoTransacoesNoBodySchema = z.object({
            title: z.string(),
            amount: z.number(),
            type: z.enum(['credito', 'debito']),
        })

        const { title, amount, type } = criandoTransacoesNoBodySchema.parse(
            request.body,
        )

        await knex('transacoes').insert({
            id: randomUUID(),
            title,
            amount: type === 'credito' ? amount : amount * -1,
        })

        return replay.status(201).send('transacao enviada com suceesso !!!')

    })
}
