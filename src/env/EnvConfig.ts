import 'dotenv/config' // importa e executa o pacote dotenv, que carrega as variáveis de ambiente de um arquivo .env no diretório raiz do projeto.
import { z } from 'zod' // importando a função z do pacote zod, que é uma biblioteca de validação de esquema para JavaScript e TypeScript.

// process.env.DATABASE_URL
// development, test, production

// Este trecho de código define um esquema de validação usando o zod. O esquema especifica quais variáveis de ambiente são necessárias, seus tipos esperados e quaisquer valores padrão.
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'), // Uma variável de ambiente que deve ser uma das três opções: 'development', 'test' ou 'production'. O valor padrão é 'production'.
  // Variáveis de ambiente para configuração de conexão com o banco de dados.
  DATABASE_CLIENT: z.string(),
  HOST_DB: z.string(),
  USER_DB: z.string(),
  PORT_DB: z.number().default(5432), // Números de porta para o banco de dados tem o valor padrão e 5432.
  PASSWORD_DB: z.string(),
  DATABASE_NAME: z.string(),
  PORT: z.number().default(3333), // Números de porta para o servidor da aplicação tem o valor padrão e 3333.
})

// Este trecho de código utiliza o esquema de validação definido anteriormente para analisar (parse) as variáveis de ambiente atualmente definidas no objeto process.env.
// A função safeParse retorna um objeto que indica se a validação foi bem-sucedida ou não, bem como os dados validados.
const _env = envSchema.safeParse(process.env)

// verificamos se a validação das variáveis de ambiente falhou. Se falhar, exibimos uma mensagem de erro no console e lançamos uma exceção.
if (_env.success === false) {
  console.log(
    '⚠️ Variavel da config invalida ou indefinida !!!',
    _env.error.format(),
  )

  throw new Error('Variavel da config invalida ou indefinida')
}

// Se a validação for bem-sucedida, exportamos os dados validados das variáveis de ambiente para uso em outros módulos da aplicação.
export const env = _env.data
