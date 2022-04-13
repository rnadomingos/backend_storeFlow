import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetStoreSellerUseCase } from "./GetStoreSellerUseCase";


export class GetStoreSellerController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { user_dms } = req.params

    const getStoreSellerUseCase = container.resolve(GetStoreSellerUseCase);

    const store = await getStoreSellerUseCase.execute(user_dms);
    return res.json(store);
  }
}