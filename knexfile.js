// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

// Você também pode usar uma função assíncrona para obter detalhes de conexão para sua configuração. Isso é útil quando você precisa buscar credenciais de um local seguro como o cofre.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'sistema_de_vendas',
      user: 'igorn',
      password: '08901',
    },
    migrations: {
      extension: 'js',
      directory: './migrations',
      tableName: 'knex_migrations_users',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'sistema_de_vendas',
      user: 'igorn',
      password: '08901',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations_users',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'sistema_de_vendas',
      user: 'igorn',
      password: '08901',
    },
    migrations: {
      tableName: 'knex_migrations_users',
    },
  },
}
