import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSellersStoreUseCase } from "./ListSellersStoreUseCase";



export class ListSellersStoreController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { storeId } = req.params

    const listSellerUseCase = container.resolve(ListSellersStoreUseCase);

    const result = await listSellerUseCase.execute(storeId);
    return res.json(result);
  }
}