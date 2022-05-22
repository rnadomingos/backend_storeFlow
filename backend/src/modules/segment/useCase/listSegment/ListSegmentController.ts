import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSegmentUseCase } from "./ListSegmentUseCase";


export class ListSegmentController {
    async handle(req: Request, res: Response): Promise<Response> {

        const listSegmentUseCase = container.resolve(ListSegmentUseCase)
        const segments = await listSegmentUseCase.execute();

        return res.json(segments)
    }
}