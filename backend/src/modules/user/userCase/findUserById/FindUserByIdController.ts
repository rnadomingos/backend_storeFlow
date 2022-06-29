import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";

export class FindUserByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase)
    const user = await findUserByIdUseCase.execute(id)

    return res.json(user)
  }
}