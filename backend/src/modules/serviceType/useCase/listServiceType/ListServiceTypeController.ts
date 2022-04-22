import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListServiceTypeUseCase } from "./ListServiceTypeUseCase";

export class ListServiceTypeController {
    async handle(req: Request, res: Response): Promise<Response> {

        const listServiceTypeUseCase = container.resolve(ListServiceTypeUseCase)
        const listService = await listServiceTypeUseCase.excecute();
        return res.json(listService);

    }
}