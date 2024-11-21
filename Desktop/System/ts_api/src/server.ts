import fastify from 'fastify';
import { routes } from './routes';
import cors from '@fastify/cors';

const app = fastify({ logger : true });

const start = async () => {
    
    try {
        await app.register(cors)
        await app.register(routes)
        await app.listen({ port : 8080 })
        
    } catch (error) {
        process.exit(1)
    }
}

start()