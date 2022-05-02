import { IServiceTypeRepository } from "@modules/serviceType/repositories/IServiceTypeRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";


@injectable()
export class DeleteServiceTypeByIdUseCase {
    constructor(
        @inject("ServiceTypeRepository")
        private serviceTypeRespository: IServiceTypeRepository
    ) { }

    async execute(id: string): Promise<void> {

        const serviceTypeExists = await this.serviceTypeRespository.findById(id);

        if (!serviceTypeExists) {
            throw new ErrorHandler(`This ID:(${id}) was not found!`)
        }

        return await this.serviceTypeRespository.deleteById(id);
    }
}