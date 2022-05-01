import { ICreateProspectionDTO } from "@modules/prospection/dtos/ICreateProspectionDTO";
import { Prospection } from "@modules/prospection/entities/Prospection";
import { IProspectionRepository } from "@modules/prospection/repositories/IProspectionRepository";
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

        const prospectionExists = await this.prospectionRepository.findByName(name);

        if (prospectionExists) {
            throw new Error(`Prospection already exists!`);
        }

        await this.prospectionRepository.create({
            name,
            description
        });


    }
}