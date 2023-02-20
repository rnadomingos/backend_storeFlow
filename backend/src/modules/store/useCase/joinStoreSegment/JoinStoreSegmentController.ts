import { Request, Response } from "express";
import { container } from "tsyringe";
import { JoinStoreSegmentUseCase } from "./JoinStoreSegmentUseCase";

export class JoinStoreSegmentController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { storeId, segmentId } = req.body;

        const joinSegmentStoreUseCase = container.resolve(JoinStoreSegmentUseCase)
        await joinSegmentStoreUseCase.execute({
            storeId,
            segmentId
        })        
        return res.status(201).json({
            message: "success"
        });
    }
}