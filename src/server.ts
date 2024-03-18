import fastify from 'fastify' // importando biblioteca
import { env } from './env/EnvConfig' // importando arquivo .envConfig

import { inserindoDadosNasTabelas } from './routes/InserindoDados'
import { ConsultadoTabelas } from './routes/ConsultandoTabelas' // importando as rotas para o projeto
import { transacoesMaisValidacao } from './routes/transacoes'

const app = fastify() // usar métodos e funcionalidades do Fastify para configurar a aplicacao

app.register(ConsultadoTabelas) // registrando plugins em uma instância do Fastify

app.register(inserindoDadosNasTabelas) // registrando plugins em uma instância do Fastify

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
