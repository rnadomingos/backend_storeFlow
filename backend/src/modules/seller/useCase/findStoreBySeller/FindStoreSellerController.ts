import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindStoreSellerUseCase } from "./FindStoreSellerUseCase";


export class FindStoreSellerController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { user_dms } = req.params

    const findStoreSellerUseCase = container.resolve(FindStoreSellerUseCase);

    const store = await findStoreSellerUseCase.execute(user_dms);
    return res.json(store);
  }
}