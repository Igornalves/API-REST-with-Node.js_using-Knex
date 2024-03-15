import { FastifyInstance } from 'fastify' // interface que define a estrutura  esperada de uma instância do Fastify, fornecer informações sobre a estrutura esperada dessa instância.

import { z } from 'zod' // biblioteca em TypeScript que fornece uma forma simples e eficiente de definir e validar esquemas de dados.

import { randomUUID } from 'node:crypto' // permite gerar identificadores únicos universalmente (UUIDs) de forma aleatória e segura.

import { knex } from '../databases/databaseConnection' // importando o arquivo de conexao

// request Body: Https protocolo

// fazendo um exportacao uma funcao assíncrona com um parametro que recebe a instancia fastify para uma rota de transacao

export async function transacoesMaisValidacao(app: FastifyInstance) {
  // {titulo, valor da transacao, tipo: credito ou debito}

  // Esta é a função que será executada quando uma requisição POST for feita para a rota /transacao

  // (request, replay): Isso define os parâmetros da função.

  // O primeiro parâmetro (request) contém informações sobre a requisição HTTP, como corpo da requisição, cabeçalhos, etc.

  // O segundo parâmetro (replay) é o objeto que você usará para enviar uma resposta de volta ao cliente que fez a requisição.

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

    // Isso define o código de status da resposta como 201, que significa "Created" (Criado). Esse código é comumente usado para indicar que uma nova entidade foi criada com sucesso.

    return replay.status(201).send('transacao enviada com suceesso !!!')
  })
}
