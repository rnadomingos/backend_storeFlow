import { IProspection } from "domain/prospection/model/IProspection";
import { IProspectionRepository } from "domain/prospection/repository/IProspectionRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllProspectionUseCase {

    constructor(
        @inject("ProspectionRepository")
        private prospectionRepository: IProspectionRepository

    ) { }

    async execute(): Promise<IProspection[]> {
        return await this.prospectionRepository.list()

    }
}