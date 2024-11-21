import prismaClient from "../prisma";

class ListCustomerService {
    async execute() {
        try {

            const customers = await prismaClient.costumer.findMany();
            return customers

        } catch (error) {
            throw new Error("Error ao listar todos clientes")
        }
    }
}

export { ListCustomerService }