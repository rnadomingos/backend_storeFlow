import { Request, Response } from "express";
import { CreateSegmentUseCase } from "./CreateSegmentUseCase";

export class CreateSegmentController {

  constructor(
    private createSegmentUseCase: CreateSegmentUseCase
  ) { }
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;
    this.createSegmentUseCase.execute({ name, description })

    return res.status(201).json("message: success")
  }
}