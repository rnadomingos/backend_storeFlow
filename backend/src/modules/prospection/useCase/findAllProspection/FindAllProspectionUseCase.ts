import { Prospection } from "@modules/prospection/entities/Prospection";
import { IProspectionRepository } from "@modules/prospection/repositories/IProspectionRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllProspectionUseCase {

    constructor(
        @inject("ProspectionRepository")
        private prospectionRepository: IProspectionRepository

    ) { }

    async execute(): Promise<Prospection[]> {
        return await this.prospectionRepository.list()

    }
}