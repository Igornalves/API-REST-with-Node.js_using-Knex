import { FastifyReply, FastifyRequest } from 'fastify' // Esta linha de código importa os tipos FastifyReply e FastifyRequest do pacote fastify. Ela permite que você use esses tipos para garantir a tipagem correta dos objetos de requisição e resposta em seu código.

// Aqui, a função recebe dois parâmetros: request e replay. Estes parâmetros são objetos que representam a requisição HTTP e a resposta HTTP, respectivamente.

// Eles são tipados com os tipos FastifyRequest e FastifyReply, que são tipos definidos pelo Fastify, um framework web para Node.js.

// Isso garante que a função aceitará os objetos corretos quando for chamada.
export async function checkSessionIdExist(
  request: FastifyRequest,
  replay: FastifyReply,
) {
  // procurando dentro dos metadados invisiveis uma coluna que tenha sessionId
  const sessionId = request.cookies.session_id

  // fazendo a condicao de que se nao existi o sessionId ira dar erro para acessar os dados da selecao dos dados no banco
  if (!sessionId) {
    return replay.status(401).send({
      error: '!!!! Nao Autorizado !!!!',
    })
  }
}
