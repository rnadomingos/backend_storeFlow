import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindSellerByIdUseCase } from "./FindSellerByIdUseCase";


export class FindSellerByIdController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const findSellerUseCase = container.resolve(FindSellerByIdUseCase);

    const store = await findSellerUseCase.execute(id);
    return res.json(store);
  }
}