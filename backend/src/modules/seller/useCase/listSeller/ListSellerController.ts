import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSellerUseCase } from "./ListSellerUseCase";

export class ListSellerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {keyword, page} = req.query

    const listSellerUseCase = container.resolve(ListSellerUseCase);
    const sellers = await listSellerUseCase.execute(keyword, Number(page))

    return res.json(sellers)

  }
}