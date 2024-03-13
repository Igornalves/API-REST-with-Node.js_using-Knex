/* eslint-disable prettier/prettier */

// definicao de tipos config

// eslint-disable-next-line 
import { Knex } from 'knex'

declare module 'knex/types/tables' {
    export interface Tables {
        trasacao: {
            id: string
            title: string
            amount: number
            created_at: string
            session_id?: string
        }
    }
}
