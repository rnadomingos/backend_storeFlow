import { Prospection } from "@modules/prospection/entities/Prospection";
import { IProspectionRepository } from "@modules/prospection/repositories/IProspectionRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindProspectionByNameUseCase {

    constructor(
        @inject("ProspectionRepository")
        private prospectionRepository: IProspectionRepository

    ) { }

    async execute(name: string): Promise<Prospection> {

        const prospection = await this.prospectionRepository.findByName(name);

        if (!prospection) {
            throw new ErrorHandler(`Prospection not found with this Name!`)
        }

        return prospection;
    }
}