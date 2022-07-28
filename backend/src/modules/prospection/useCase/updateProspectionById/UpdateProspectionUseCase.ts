
import { IUpdateProspectionDTO } from "@domain/prospection/dto/IUpdateProspection";
import { IProspectionRepository } from "@domain/prospection/repository/IProspectionRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";

import { inject, injectable } from "tsyringe";



@injectable()
export class UpdateProspectionUseCase {
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
            throw new ErrorHandler(`This Prospection ID was not found!`)
        }

        if (name) {
            prospectionExists.name = name.toLocaleLowerCase();
        }

        if (description) {
            prospectionExists.description = description
        }

        if (is_active != null) {
            prospectionExists.is_active = is_active
        }

        await this.prospectionRepository.update(prospectionExists)

    }
}