
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { IProspection } from "domain/prospection/model/IProspection";
import { IProspectionRepository } from "domain/prospection/repository/IProspectionRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindProspectionByNameUseCase {

    constructor(
        @inject("ProspectionRepository")
        private prospectionRepository: IProspectionRepository

    ) { }

    async execute(name: string): Promise<IProspection> {

        const prospection = await this.prospectionRepository.findByName(name);

        if (!prospection) {
            throw new ErrorHandler('Prospection was not found!')
        }

        return prospection;
    }
}