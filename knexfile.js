// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'igorn',
      database: 'sistema_de_vendas',
      password: '08901',
    },
    migrations: {
      tableName: 'migracoes_transacoes',
    },
  },

  staging: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'igorn',
      database: 'sistema_de_vendas',
      password: '08901',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migracoes_transacoes',
    },
  },

  production: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'igorn',
      database: 'sistema_de_vendas',
      password: '08901',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migracoes_transacoes',
    },
  },
}
