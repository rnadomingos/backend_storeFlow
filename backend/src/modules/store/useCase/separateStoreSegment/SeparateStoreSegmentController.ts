import { Request, Response } from "express";
import { container } from "tsyringe";
import { SeparateStoreSegmentUseCase } from "./SeparateStoreSegmentUseCase";


export class SeparateStoreSegmentController {
  async handle(req: Request, res: Response): Promise<Response> {

    const { storeId, segmentId } = req.body;

    console.log('teste:', req.body);

    const separateStoreSegmentUseCase = container.resolve(SeparateStoreSegmentUseCase);
    await separateStoreSegmentUseCase.execute({
      storeId,
      segmentId
    })
    return res.status(201).json({
      message: "success"
    });
  }
}