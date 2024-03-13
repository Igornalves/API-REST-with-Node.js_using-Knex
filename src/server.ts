import fastify from 'fastify'
import { env } from './env/EnvConfig'
import { inserindoDadosNasTabelas } from './routes/InserindoDados'
import { ConsultadoTabelas } from './routes/ConsultandoTabelas'
import { transacoesMaisValidacao } from './routes/transacoes'

const app = fastify()

app.register(ConsultadoTabelas)

app.register(inserindoDadosNasTabelas)

app.register(transacoesMaisValidacao)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server running !')
  })
