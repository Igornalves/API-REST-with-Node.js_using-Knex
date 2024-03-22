import { FastifyRequest } from 'fastify' // Esta linha de código importa os tipos FastifyRequest do pacote fastify. Ela permite que você use esses tipos para garantir a tipagem correta dos objetos de requisição e resposta em seu código.

// Esta função hookGlobal é um exemplo de um "hook" em um aplicativo Fastify.

// Hooks são funções que podem ser executadas em diferentes momentos durante o ciclo de vida de uma requisição HTTP em um servidor Fastify.

// Eles são usados para executar lógica antes ou depois de uma determinada operação, como manipular uma requisição antes de ser processada pelo roteador ou realizar ações após uma resposta ser enviada de volta ao cliente.

export async function hookGlobal(request: FastifyRequest) {
  // imprime informações sobre a requisição atual.

  // Isso inclui o método HTTP da requisição (request.method) e a URL da requisição (request.url).

  console.log(`[${request.method}] ${request.url}`)

  // O método HTTP é a ação que o cliente deseja executar (como GET, POST, PUT, DELETE), e a URL é o endereço específico para onde a requisição está sendo feita.
}
