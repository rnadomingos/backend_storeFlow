import { ICreateServiceTypeDTO } from "@modules/serviceType/dtos/ICreateServiceTypeDTO";
import { IServiceTypeRepository } from "../../repositories/IServiceTypeRepository";
import { inject, injectable } from "tsyringe";



@injectable()
export class CreateServiceTypeUseCase {

    constructor(
        @inject("ServiceTypeRepository")
        private serviceTypeREpository: IServiceTypeRepository
    ) { }

    async execute({
        name,
        description
    }: ICreateServiceTypeDTO): Promise<void> {

        await this.serviceTypeREpository.create({
            name,
            description
        });

    }
}