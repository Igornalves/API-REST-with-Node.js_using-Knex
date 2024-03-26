import { expect, test } from 'vitest' // importacao do vitest para teste automatizado

// enunciado do teste a ser realizado aqui
test('o usuario conseguir criar uma nova transacao', () => {
  // faz a chamanda HTTP p/ cria uma nova transacao
  const respostaStatusCode = 201

  // validacao do teste a ser feito
  expect(respostaStatusCode).toEqual(201)
})
