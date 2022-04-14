import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSegmentUseCase } from "./CreateSegmentUseCase";

export class CreateSegmentController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    const createStoreUseCase = container.resolve(CreateSegmentUseCase)
    await createStoreUseCase.execute({ name, description });

    return res.status(201).json("message:success");
  }
}