import { Request, Response } from "express";
import { ListStoreUseCase } from "./ListStoreUseCase"


export class ListStoreController {

  constructor(
    private listStoreUseCase: ListStoreUseCase
  ) { }
  async handle(req: Request, res: Response): Promise<Response> {

    const list = await this.listStoreUseCase.execute();
    return res.json(list);
  }
}