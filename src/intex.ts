import fastify from 'fastify'

const app = fastify()

// base da aplicacao

// principais metodos: GET, POST, PUT, PATCH, DELETE

// http://localhost:3333/hello

app.get('/hello', () => {
  return 'hello node.js'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running !')
  })
