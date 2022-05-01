import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllProspectionUseCase } from "./FindAllProspectionUseCase";

export class FindAllProspectionController {
    async handle(req: Request, res: Response): Promise<Response> {

        const findAllProspectionController = container.resolve(FindAllProspectionUseCase);
        const prospection = await findAllProspectionController.execute();

        return res.json(prospection)
    }
}