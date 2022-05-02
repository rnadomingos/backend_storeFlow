import { Prospection } from "@modules/prospection/entities/Prospection";
import { IProspectionRepository } from "@modules/prospection/repositories/IProspectionRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindProspectionByIdUseCase {

    constructor(
        @inject("ProspectionRepository")
        private prospectionRepository: IProspectionRepository

    ) { }

    async execute(id: string): Promise<Prospection> {

        const prospection = await this.prospectionRepository.findById(id);

        if (!prospection) {
            throw new ErrorHandler(`Prospection not found with this ID!`)
        }

        return prospection;
    }
}