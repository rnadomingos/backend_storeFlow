import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindSegmentByNameUseCase } from "./FindSegmentByNameUseCase";



export class FindSegmentByNameController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.query;

        const findByNameSegmentController = container.resolve(FindSegmentByNameUseCase)
        const segment = await findByNameSegmentController.execute(name.toString())

        return res.json(segment)
    }

}