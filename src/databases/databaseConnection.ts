import { knex as setupKnex } from 'knex' // importa a função knex do pacote Knex e a renomeia como setupKnex. Isso permite que usemos setupKnex para configurar o Knex.
import { env } from '../env/EnvConfig' // importando um objeto chamado env de um módulo chamado EnvConfig

// esta linha exporta uma instância do Knex configurada com as opções fornecidas.
export const knex = setupKnex({
  // Define o tipo de banco de dados que o Knex vai interagir
  client: env.DATABASE_CLIENT,
  // Define as configurações de conexão com o banco de dados.
  connection: {
    host: env.HOST_DB, // O endereço do servidor do banco de dados
    port: env.PORT_DB, // A porta em que o banco de dados está sendo executado.
    user: env.USER_DB, // O nome de usuário para autenticação no banco de dados.
    password: env.PASSWORD_DB, // A senha para autenticação no banco de dados.
    database: env.DATABASE_NAME, // O nome do banco de dados que será usado.
  },
})
