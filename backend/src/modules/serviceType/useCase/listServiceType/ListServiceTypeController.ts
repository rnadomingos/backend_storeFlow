import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListServiceTypeUseCase } from "./ListServiceTypeUseCase";

export class ListServiceTypeController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {keyword, page} = req.query

        const listServiceTypeUseCase = container.resolve(ListServiceTypeUseCase)
        const listService = await listServiceTypeUseCase.execute(keyword, Number(page));

        return res.json(listService);
    }
}