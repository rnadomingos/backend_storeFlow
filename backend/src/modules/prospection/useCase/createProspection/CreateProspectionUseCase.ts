import { ICreateProspectionDTO } from "@modules/prospection/dtos/ICreateProspectionDTO";
import { IProspectionRepository } from "@modules/prospection/repositories/IProspectionRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";



@injectable()
export class CreateProspectionUseCase {
    constructor(
        @inject("ProspectionRepository")
        private prospectionRepository: IProspectionRepository
    ) { }

    async execute({
        name,
        description
    }: ICreateProspectionDTO): Promise<void> {
        name = name.toLocaleLowerCase()
        const prospectionExists = await this.prospectionRepository.findByName(name);

        if (prospectionExists) {
            throw new ErrorHandler(`Prospection already exists!`);
        }

        await this.prospectionRepository.create({
            name,
            description
        });


    }
}