import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindSegmentByNameUseCase } from "./FindSegmentByNameUseCase";



export class FindSegmentByNameController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.params;

        const findByNameSegmentController = container.resolve(FindSegmentByNameUseCase)
        const segment = await findByNameSegmentController.execute(name)

        return res.json(segment)
    }

}