import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByNameSegmentUseCase } from "./FindByNameSegmentUseCase";



export class FindByNameSegmentController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.params;

        const findByNameSegmentController = container.resolve(FindByNameSegmentUseCase)
        const segment = await findByNameSegmentController.execute(name)

        return res.json(segment)
    }

}