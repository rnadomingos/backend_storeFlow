import { IUpdateProspectionDTO } from "@modules/prospection/dtos/IUpdateProspection";
import { IProspectionRepository } from "@modules/prospection/repositories/IProspectionRepository";
import { inject, injectable } from "tsyringe";



@injectable()
export class UpdateProspectionByIdUseCase {
    constructor(
        @inject("ProspectionRepository")
        private prospectionRepository: IProspectionRepository
    ) { }
    async execute({
        id,
        name,
        description,
        is_active
    }: IUpdateProspectionDTO): Promise<void> {

        const prospectionExists = await this.prospectionRepository.findById(id);

        if (!prospectionExists) {
            throw new Error(`This ID:(${id}) was not found!`)
        }

        if (name) {
            prospectionExists.name = name;
        }

        if (description) {
            prospectionExists.description = description
        }

        if (is_active != null) {
            prospectionExists.is_active = is_active
        }

        return await this.prospectionRepository.updateById(prospectionExists)

    }
}