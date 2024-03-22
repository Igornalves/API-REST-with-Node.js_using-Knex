import fastify from 'fastify' // importando biblioteca
import { env } from './env/EnvConfig' // importando arquivo .envConfig
import cookiesApi from '@fastify/cookie' // importando a biblioteca do fastify para usar cookies para manter o contexto das requisicoes da aplicacão, ou seja, usario logado e saber se é ele mesmo fazendo a requisicao.

import { inserindoDadosNasTabelas } from './routes/InserindoDados'
import { ConsultadoTabelas } from './routes/ConsultandoTabelas' // importando as rotas para o projeto
import { transacoesMaisValidacao } from './routes/transacoes'
import { hookGlobal } from './middleware/hookGlobal'

const app = fastify() // usar métodos e funcionalidades do Fastify para configurar a aplicacao

app.addHook('preHandler', hookGlobal) // Esta chamada de método addHook é usada para adicionar um gancho (hook) global ao aplicativo Fastify. Um gancho é uma função que é executada em um determinado ponto do ciclo de vida de uma requisição HTTP. O primeiro argumento 'preHandler' especifica o ponto no ciclo de vida da requisição em que o gancho será executado. Neste caso, o gancho será executado antes do processamento do manipulador de rota.

app.register(cookiesApi) // fazendo o registro antes para das transacoes para fazer os cookies funcionar totalmente

app.register(ConsultadoTabelas, {
  prefix: '/consulta',
}) // registrando plugins em uma instância do Fastify

app.register(inserindoDadosNasTabelas, {
  prefix: '/inserindo',
}) // registrando plugins em uma instância do Fastify

app.register(transacoesMaisValidacao, {
  prefix: '/transacoes',
}) // registrando plugins em uma instância do Fastify

app
  .listen({
    port: env.PORT, // colocando uma porta usando o env para definir um caminho
  })
  .then(() => {
    console.log('HTTP server running !') // imprimindo de deu certo o server ser ativado
  })

// query builders (knex.js) / ORM (prisma.js)
