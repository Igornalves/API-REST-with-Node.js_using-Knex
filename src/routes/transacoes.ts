import { FastifyInstance } from 'fastify' // interface que define a estrutura  esperada de uma instância do Fastify, fornecer informações sobre a estrutura esperada dessa instância.
import { z } from 'zod' // biblioteca em TypeScript que fornece uma forma simples e eficiente de definir e validar esquemas de dados deixando eles com uma tipagem para receber.
import { randomUUID } from 'node:crypto' // permite gerar identificadores únicos universalmente (UUIDs) de forma aleatória e segura.
import { knex } from '../databases/databaseConnection' // importando o arquivo de conexao

// Cookies <--> formas de manter o contexto das requisicoes da aplicacão.

// request Body: Https protocolo

// fazendo um exportacao uma funcao assíncrona com um parametro que recebe a instancia fastify para uma rota de transacao

export async function transacoesMaisValidacao(app: FastifyInstance) {
  // Esta é a função que será executada quando uma requisição POST for feita para a rota /transacao

  // (request, replay): Isso define os parâmetros da função.

  // O primeiro parâmetro (request) contém informações sobre a requisição HTTP, como corpo da requisição, cabeçalhos, etc.

  // O segundo parâmetro (replay) é o objeto que você usará para enviar uma resposta de volta ao cliente que fez a requisição.

  app.post('/criando', async (request, replay) => {
    // passando o const como um objeto da biblioteca Zod para tipar os parametros do metodo post a ser recebido
    const criandoTransacoesNoBodySchema = z.object({
      titulo: z.string(),
      amount: z.number(),
      // {titulo, valor da transacao, tipo: credito ou debito}
      type: z.enum(['credito', 'debito']),
    })

    const { titulo, amount, type } = criandoTransacoesNoBodySchema.parse(
      request.body,
    )
    // procurando deentro dos metadados invisiveis uma coluna que tenha sessionId
    let sessionId = request.cookies.sessionId

    // se nao tever o metadados ainda entra na condicao
    if (!sessionId) {
      // fazendo um sessionId usando o random para gerar um ID aleatorio
      sessionId = randomUUID()
      // é um método usado para configurar e enviar cookies na resposta HTTP.
      replay.cookie('session_id', sessionId, {
        // passando uma config para os cookies que qualquer rota ou uma rota especifica pode acessar os cookies
        path: '/',
        // passando um numero que em milesegundos e os multiplicando vai expira os cookies na maquina do cliente
        maxAge: 1000 * 60 * 24 * 7, // 7 dias que vai dura os cookies expira
      })
    }

    await knex('transacoes').insert({
      // inserindo um numenro aleatorio para ID na aplicacao
      id: randomUUID(),
      titulo,
      amount: type === 'credito' ? amount : amount * -1,
      // passando o id para insersao no banco da dados
      session_id: sessionId,
    })

    console.log('migracao feita com sucesso !!!!')

    // Isso define o código de status da resposta como 201, que significa "Created" (Criado). Esse código é comumente usado para indicar que uma nova entidade foi criada com sucesso.
    return replay.status(201).send('transacao enviada com suceesso !!!')
  })

  // criando uma rota para selecionar uma tabela
  app.get('/select', async () => {
    // select simples no banco de dados fazendo um query
    const listaDeTransacao = await knex('transacoes').select('*')
    // estar sendo passado a const como um objeto para que mesmo que tenha outro valores a ser passado, isso nao interfere na const principal
    return {
      total: 100,
      coisas: 'simplemente bonito',
      listaDeTransacao,
    }
  })

  // passando um metodo que tem uma funcao assincrona com um parametro a ser recebido na rota GET, que vai valida e retorna dados de um ID de alguma transacao especifico feita na tabela existente no banco de dados.
  app.get('/:id', async (request) => {
    // a const estar recebendo um objeto zod para identificar o tipo de dados recebido pela rota um ID espcifico da tabela transacoes
    const getTransacoesParamsSchema = z.object({
      id: z.string().uuid(),
    })

    // passando para a constante um objeto ID para
    const { id } = getTransacoesParamsSchema.parse(request.params)

    // passando o funcao first para que a const criada nao retorne um array e sim um objeto pesquisado ou passado.
    const transacao = await knex('transacoes').where('id', id).first()

    // retornando os dados da const transacao como a pesquisa do ID colocado na rota.
    return { transacao }
  })

  app.get('/resumo', async () => {
    // criando um resumo de transicoes com a soma dos amounts usando (sum) e alem de fazer ele nao retorna um array com (first)

    // o retorno normal a query feita aqui é de um array, porém entretanto podesse usar o (first) para resolver isso retornado um objeto

    // passando algumas configuracoes para o retorno dos dados de forma melhor tirando o nome "sum" que aparece no terminal.

    // desta forma o nome que aparece no terminal e o amount, especificando os dados enviando.
    const resumoTransacao = await knex('transacoes')
      .sum('amount', { as: 'amount' })
      .first()

    // fazendo um retorno da constante.
    return { resumoTransacao }
  })
}
