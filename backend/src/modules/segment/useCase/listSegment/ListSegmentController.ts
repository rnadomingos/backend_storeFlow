import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSegmentUseCase } from "./ListSegmentUseCase";


export class ListSegmentController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {keyword, page } = req.query

        const listSegmentUseCase = container.resolve(ListSegmentUseCase)
        const segments = await listSegmentUseCase.execute(keyword, Number(page));

        return res.json(segments)
    }
}