import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProspectionUseCase } from "./ListProspectionUseCase";

export class ListProspectionController {
    async handle(req: Request, res: Response): Promise<Response> {

        const listProspectionUseCase = container.resolve(ListProspectionUseCase);
        const prospection = await listProspectionUseCase.execute();

        return res.json(prospection)
    }
}