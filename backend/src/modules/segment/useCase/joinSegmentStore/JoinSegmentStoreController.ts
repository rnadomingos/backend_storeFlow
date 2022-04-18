import { Request, Response } from "express";
import { container } from "tsyringe";
import { JoinSegmentStoreUseCase } from "./JoinSegmentStoreUseCase";



export class JoinSegmentStoreController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { segmentId, storeId } = req.body;

        const joinSegmentStoreUseCase = container.resolve(JoinSegmentStoreUseCase)
        await joinSegmentStoreUseCase.excecute({
            segmentId,
            storeId
        })
        return res.status(201).json({
            message: "success"
        });
    }
}