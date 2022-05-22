import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetStoreByCNPJUseCase } from "./GetStoreByCNPJUseCase";


export class GetStoreByCNPJController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { cnpj } = req.params

    const getStoreByCNPJUseCase = container.resolve(GetStoreByCNPJUseCase)
    const store = await getStoreByCNPJUseCase.execute(cnpj)

    return res.json(store)
  }
}