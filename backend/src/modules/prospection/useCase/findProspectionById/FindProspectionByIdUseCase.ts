
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { IProspection } from "domain/prospection/model/IProspection";
import { IProspectionRepository } from "domain/prospection/repository/IProspectionRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindProspectionByIdUseCase {

    constructor(
        @inject("ProspectionRepository")
        private prospectionRepository: IProspectionRepository

    ) { }

    async execute(id: string): Promise<IProspection> {

        const prospection = await this.prospectionRepository.findById(id);

        if (!prospection) {
            throw new ErrorHandler(`Prospection not found with this ID!`)
        }

        return prospection;
    }
}