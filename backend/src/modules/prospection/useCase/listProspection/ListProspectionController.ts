import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProspectionUseCase } from "./ListProspectionUseCase";

export class ListProspectionController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { keyword, page } = req.query;

        const listProspectionUseCase = container.resolve(ListProspectionUseCase);
        const prospection = await listProspectionUseCase.execute(keyword, Number(page));

        return res.json(prospection)
    }
}