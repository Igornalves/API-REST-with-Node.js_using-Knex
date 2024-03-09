/* eslint-disable prettier/prettier */
import 'dotenv/config'
import { z } from 'zod'

// process.env.DATABASE_URL

const envSchema = z.object({
    DATABASE_URL: z.string(),
})

export const env = envSchema.parse(process.env)



