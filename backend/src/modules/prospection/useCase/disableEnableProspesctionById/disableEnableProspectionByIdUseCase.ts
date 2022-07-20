
import { IProspectionRepository } from "domain/prospection/repository/IProspectionRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class DisableEnableProspectionByIdUseCase {
    constructor(
        @inject("ProspectionRepository")
        private prospectionRepository: IProspectionRepository
    ) { }

    async execute(id: string): Promise<void> {

        const prospectionExists = await this.prospectionRepository.findById(id);

        if (!prospectionExists) {
            throw new Error(`This ID:(${id}) was not found!`)
        }

        if (prospectionExists.is_active) {
            prospectionExists.is_active = false
        } else {
            prospectionExists.is_active = true
        }

        const is_active = prospectionExists.is_active;

        return await this.prospectionRepository.disableEnableById({
            id,
            is_active
        });
    }
}