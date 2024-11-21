import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/createCustomerController";
import { ListCustomerController } from "./controllers/listCustomerController";
import { DeleteCustomerController } from "./controllers/deleteCustomerController";

export async function routes(fastify: FastifyInstance, Options: FastifyPluginOptions) {
    fastify.get("/", async (req: FastifyRequest, reply: FastifyReply) => {
       return reply.send({ oi: "Ok"})
    })

    fastify.post("/customer", async ( req: FastifyRequest, reply: FastifyReply )=>{
        return new CreateCustomerController().handle(req, reply)
    })

    fastify.get("/list", async ( req: FastifyRequest, reply: FastifyReply )=>{
        return new ListCustomerController().handle(req, reply)
    })

    fastify.delete("/customer", async ( req: FastifyRequest, reply: FastifyReply )=>{
        return new DeleteCustomerController().handle(req, reply)
    })
} 