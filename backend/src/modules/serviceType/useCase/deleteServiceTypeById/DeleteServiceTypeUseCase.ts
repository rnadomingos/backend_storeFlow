import { IServiceTypeRepository } from "@domain/serviceType/repository/IServiceTypeRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";


@injectable()
export class DeleteServiceTypeUseCase {
    constructor(
        @inject("ServiceTypeRepository")
        private serviceTypeRepository: IServiceTypeRepository
    ) { }

    async execute(id: string): Promise<void> {

        const serviceTypeExists = await this.serviceTypeRepository.findById(id);

        if (!serviceTypeExists) {
            throw new ErrorHandler(`Service Type was not found!`)
        }

        return await this.serviceTypeRepository.deleteById(id);
    }
}