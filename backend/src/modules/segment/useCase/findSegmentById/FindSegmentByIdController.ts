import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindSegmentByIdUseCase } from "./FindSegmentByIdUseCase";



export class FindSegmentByIdController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const findSegmentByIdController = container.resolve(FindSegmentByIdUseCase)
        const segment = await findSegmentByIdController.execute(id)

        return res.json(segment);
    }

}