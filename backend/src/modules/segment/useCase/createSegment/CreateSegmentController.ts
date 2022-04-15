import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSegmentUseCase } from "./CreateSegmentUseCase";

export class CreateSegmentController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    const createSegmentUseCase = container.resolve(CreateSegmentUseCase)
    await createSegmentUseCase.execute({ name, description });

    return res.status(201).json("message:success");
  }
}