import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSellerUseCase } from "./ListSellerUseCase";

export class ListSellerController {
  async handle(req: Request, res: Response): Promise<Response> {

    const listSellerUseCase = container.resolve(ListSellerUseCase);
    const sellers = await listSellerUseCase.execute();
    return res.json(sellers)

  }
}