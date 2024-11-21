import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomerService } from "../services/ListCustomerService";

class ListCustomerController {
    async handle(req: FastifyRequest, reply : FastifyReply) {
        try {
            const lisCustomers = await new ListCustomerService().execute();
            console.log(lisCustomers)
             reply.send(lisCustomers);
        } catch (error) {
           throw new Error("Error in Controller")
        }
    }
}

export { ListCustomerController }