import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserUseCase } from "./LIstUserUseCase";

export class ListUseController {
  async handle(req: Request, res: Response): Promise<Response> {

    const {keyword, page} = req.query

    const listUserUseCase = container.resolve(ListUserUseCase)
    const list = await listUserUseCase.execute(keyword, Number(page))

    return res.json(list)
  }
}