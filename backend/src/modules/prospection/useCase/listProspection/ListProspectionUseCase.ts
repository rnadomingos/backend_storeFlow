import { IProspection } from "domain/prospection/model/IProspection";
import { IProspectionRepository } from "domain/prospection/repository/IProspectionRepository";
import { inject, injectable } from "tsyringe";
import env from "@config/env";

interface IResponse {
total: number;
limit_per_page: number;
prospections: IProspection[]
}

@injectable()
export class ListProspectionUseCase {

    constructor(
        @inject("ProspectionRepository")
        private prospectionRepository: IProspectionRepository

    ) { }

    async execute(args: any = '', page: number = 1): Promise<IResponse> {
        const rowsPerPage = env.register_per_page;
        const prospections = await this.prospectionRepository.list(args, page, rowsPerPage);
        const total =  (await this.prospectionRepository.list(args)).length;
        return {
            total,
            limit_per_page: rowsPerPage,
            prospections
        }
    }
}