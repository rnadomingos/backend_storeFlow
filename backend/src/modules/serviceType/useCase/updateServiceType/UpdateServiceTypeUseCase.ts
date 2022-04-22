import { IUpdateSegmentByIdDTO } from "@modules/segment/dtos/IUpdateSegmentByIdDTO";
import { IServiceTypeRepository } from "@modules/serviceType/repositories/IServiceTypeRepository";
import { container, inject, injectable } from "tsyringe";
import { FindServiceTypeByIdUseCase } from "../findServiceTypeById/FindServiceTypeByIdUseCase";


@injectable()
export class UpdateServiceTypeUseCase {

    constructor(
        @inject("ServiceTypeRepository")
        private serviceTypeRepository: IServiceTypeRepository
    ) { }
    async execute({
        id,
        name,
        description,
        is_active
    }: IUpdateSegmentByIdDTO): Promise<void> {


        const serviceType = await this.serviceTypeRepository.findById(id);

        if (!serviceType) {
            throw new Error(`This ID:(${id}) was not found!`)
        }

        if (name) {
            serviceType.name = name
        }

        if (description) {
            serviceType.description = description
        }

        if (is_active != null) {
            serviceType.is_active = is_active
        }

        return await this.serviceTypeRepository.updateById(serviceType);
    }
}