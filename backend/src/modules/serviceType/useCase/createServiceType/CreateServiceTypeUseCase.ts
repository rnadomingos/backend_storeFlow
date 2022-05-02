import { ICreateServiceTypeDTO } from "@modules/serviceType/dtos/ICreateServiceTypeDTO";
import { IServiceTypeRepository } from "../../repositories/IServiceTypeRepository";
import { inject, injectable } from "tsyringe";
import { ErrorHandler } from "@shared/errors/ErrorHandler";



@injectable()
export class CreateServiceTypeUseCase {

    constructor(
        @inject("ServiceTypeRepository")
        private serviceTypeRepository: IServiceTypeRepository
    ) { }

    async execute({
        name,
        description
    }: ICreateServiceTypeDTO): Promise<void> {
        name = name.toLocaleLowerCase()
        const serviceTypeExists = await this.serviceTypeRepository.findByName(name)

        if (serviceTypeExists) {
            throw new ErrorHandler("Service Type Already exists")
        }

        await this.serviceTypeRepository.create({
            name,
            description
        });

    }
}