import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindStoreByIdUseCase } from "./FindStoreByIdUseCase";


export class FindStoreByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { storeId } = req.params

    const findStoreByIdUseCase = container.resolve(FindStoreByIdUseCase)
    const store = await findStoreByIdUseCase.execute(storeId)

    return res.json(store)
  }
}