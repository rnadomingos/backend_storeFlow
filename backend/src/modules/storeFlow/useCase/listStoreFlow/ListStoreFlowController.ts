import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListStoreFlowUseCase } from "./ListStoreFlowUseCase";


export class ListStoreFlowController {
  async handle(req: Request, res: Response): Promise<Response> {

    const listStoreFlowUseCase = container.resolve(ListStoreFlowUseCase);
    const list = await listStoreFlowUseCase.execute();

    return res.json(list);
  }

}