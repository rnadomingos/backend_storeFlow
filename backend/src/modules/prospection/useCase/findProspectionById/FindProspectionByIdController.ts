import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindProspectionByIdUseCase } from "./FindProspectionByIdUseCase";


export class FindProspectionByIdController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const findProspectionByIdController = container.resolve(FindProspectionByIdUseCase);
        const prospection = await findProspectionByIdController.execute(id);

        return res.json(prospection)
    }
}