import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserUseCase } from "./LIstUserUseCase";

export class ListUseController {
  async handle(req: Request, res: Response): Promise<Response> {

    const listUserUseCase = container.resolve(ListUserUseCase)

    const list = await listUserUseCase.execute()

    return res.json(list)
  }
}