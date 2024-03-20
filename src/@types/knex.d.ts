/* eslint-disable @typescript-eslint/no-unused-vars */

// definicao de tipos config
import { Knex } from 'knex'
declare module 'knex/types/tables' {
  export interface Tables {
    transacoes: {
      id: string
      titulo: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
