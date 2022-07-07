import { Request, Response } from "express";
import { container } from "tsyringe";
import { UnjoinStoreSegmentUseCase } from "./UnjoinStoreSegmentUseCase";


export class UnjoinStoreSegmentController {
  async handle(req: Request, res: Response): Promise<Response> {

    const { storeId, segmentId } = req.body;

    const unjoinStoreSegmentUseCase = container.resolve(UnjoinStoreSegmentUseCase);
    await unjoinStoreSegmentUseCase.execute({
      storeId,
      segmentId
    })
    return res.status(201).json({
      message: "success"
    });
  }
}