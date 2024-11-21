import prismaClient from "../prisma";

interface CreateCustomerProps {
    name: string,
    email: string
}

class CreateCustomerService {
    async execute({ name, email }: CreateCustomerProps) {
        try {
            if (!name || !email) {
                throw new Error("è nescessario um nome e email ")
            }
    
            const customer = await prismaClient.costumer.create({
                data: {
                    name,
                    email,
                    status: true,
                }
            })
            console.log(customer);
            return customer
        } catch (error) {
            throw new Error("Error em registrar cliente")
        }
    }
}

export { CreateCustomerService }