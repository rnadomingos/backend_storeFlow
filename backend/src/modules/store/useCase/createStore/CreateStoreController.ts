import { Request, Response } from "express";
import { CreateStoreUseCase } from "./CreateStoreUseCase";



export class CreateStoreController {

  constructor(
    private createStoreUseCase: CreateStoreUseCase
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { cnpj, name, brand } = req.body;

    await this.createStoreUseCase.execute({ cnpj, name, brand });
    return res.status(201).json("message: success");
  }
}