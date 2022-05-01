import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindProspectionByNameUseCase } from "./FindProspectionByNameUseCase";


export class FindProspectionByNameController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { name } = req.params;

        const findProspectionByNameController = container.resolve(FindProspectionByNameUseCase);
        const prospection = await findProspectionByNameController.execute(name);

        return res.json(prospection)
    }
}