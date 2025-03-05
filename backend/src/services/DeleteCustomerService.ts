import prismaClient from "../prisma";

interface DeleteCustomerProps {
  id: string;
}

export class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) {
      throw new Error("Informe um id.");
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error("Cliente não existe!");
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id
      }
    })

    return { message: "Deletado com sucesso!"}

  }
}
