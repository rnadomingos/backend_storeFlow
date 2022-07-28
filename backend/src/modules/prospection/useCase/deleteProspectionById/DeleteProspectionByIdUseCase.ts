
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { IProspectionRepository } from "domain/prospection/repository/IProspectionRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class DeleteProspectionByIdUseCase {
    constructor(
        @inject("ProspectionRepository")
        private prospectionRespository: IProspectionRepository
    ) { }

    async execute(id: string): Promise<void> {

        const prospectionExists = await this.prospectionRespository.findById(id);

        if (!prospectionExists) {
            throw new ErrorHandler(`This ID:(${id}) was not found!`)
        }

        return await this.prospectionRespository.delete(id);
    }
}