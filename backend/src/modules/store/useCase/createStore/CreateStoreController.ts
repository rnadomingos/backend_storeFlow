import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateStoreUseCase } from "./CreateStoreUseCase";



export class CreateStoreController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { cnpj, name, brand } = req.body;

    const createStoreUseCase = container.resolve(CreateStoreUseCase)
    await createStoreUseCase.execute({ cnpj, name, brand });

    return res.status(201).json("message: success");
  }
}