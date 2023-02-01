import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListStoreFlowUseCase } from "./ListStoreFlowUseCase";


export class ListStoreFlowController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { keyword, page } = req.query

    const listStoreFlowUseCase = container.resolve(ListStoreFlowUseCase);
    const list = await listStoreFlowUseCase.execute(keyword, Number(page));

    return res.json(list);
  }

}