import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetSegmentByStoreIdUseCase } from "./GetSegmentByStoreIdUseCase";

export class GetSegmentByStoreIdController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { id_store } = req.params;

        const getSegmentByStoreUseCase = container.resolve(GetSegmentByStoreIdUseCase)
        const segment = await getSegmentByStoreUseCase.execute(id_store)

        return res.json(segment)

    }
}