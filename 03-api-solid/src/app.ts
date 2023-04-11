import fastify from 'fastify'

export const app = fastify()

console.log(process.env.DATABASE_URL)
