/* eslint-disable prettier/prettier */
import 'dotenv/config'
import { z } from 'zod'

// process.env.DATABASE_URL

// development, test, production

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
    DATABASE_URL: z.string(),
    PORT: z.number().default(3333)
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
    console.log('⚠️ Variavel da config invalida ou indefinida !!!', _env.error.format())

    throw new Error('Variavel da config invalida ou indefinida')
}

export const env = _env.data

