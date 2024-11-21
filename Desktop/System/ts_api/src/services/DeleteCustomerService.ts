import prismaClient from "../prisma"

interface DelteCustomerProps {
    id: string
}

class DeleteCustomerService {
    async execute({ id } : DelteCustomerProps ){
        try {
            if(!id){
                throw new Error("è nescessario enviar um id")
            }
    
            const findCustomer = await prismaClient.costumer.findFirst({
                where :{
                    id:id
                }
            })
    
            if(!findCustomer){
                throw  new Error("Cliente não existe")
            }
    
            await prismaClient.costumer.delete({
                where:{
                    id: findCustomer.id
                }
            })
    
            return { message : "Delete with Success!!"}
        } catch (error) {
            throw new Error("Error ao deletar o cliente");
        }
    }
}

export { DeleteCustomerService }