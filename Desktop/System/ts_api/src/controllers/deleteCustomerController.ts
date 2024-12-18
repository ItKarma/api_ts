import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerController {
    async handle(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.query as { id: string }
        const deleteCustomerSerice = new DeleteCustomerService();
        const customer = await deleteCustomerSerice.execute({ id });
        reply.send(customer)
    }
}

export { DeleteCustomerController }