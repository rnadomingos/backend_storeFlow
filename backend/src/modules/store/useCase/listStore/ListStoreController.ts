import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListStoreUseCase } from "./ListStoreUseCase"


export class ListStoreController {

  async handle(req: Request, res: Response): Promise<Response> {

    const listStoreUseCase = container.resolve(ListStoreUseCase);

    const list = await listStoreUseCase.execute();
    return res.json(list);
  }
}