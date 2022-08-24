
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { IProspectionRepository } from "domain/prospection/repository/IProspectionRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class DeleteProspectionUseCase {
    constructor(
        @inject("ProspectionRepository")
        private prospectionRepository: IProspectionRepository
    ) { }

    async execute(id: string): Promise<void> {

        const prospectionExists = await this.prospectionRepository.findById(id);

        if (!prospectionExists) {
            throw new ErrorHandler('Prospection was not found!')
        }

        return await this.prospectionRepository.delete(id);
    }
}