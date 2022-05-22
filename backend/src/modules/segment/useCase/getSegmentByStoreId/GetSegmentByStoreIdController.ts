import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetSegmentByStoreIdUseCase } from "./GetSegmentByStoreIdUseCase";




export class GetSegmentByStoreIdController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const getSegmentByStoreUseCase = container.resolve(GetSegmentByStoreIdUseCase)
        const segment = await getSegmentByStoreUseCase.execute(id)

        return res.json(segment)

    }
}