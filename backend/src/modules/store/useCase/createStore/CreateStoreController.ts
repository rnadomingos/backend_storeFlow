import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateStoreUseCase } from "./CreateStoreUseCase";
import { ErrorHandler } from "@shared/errors/ErrorHandler";



export class CreateStoreController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { cnpj, name, brand } = req.body;

    for (const field of ["cnpj", "name", "brand"]) {
      if (!req.body[field]) {
        throw new ErrorHandler(`Params ${field} Missing`)
      }
    }


    const createStoreUseCase = container.resolve(CreateStoreUseCase)
    await createStoreUseCase.execute({ cnpj, name, brand });

    return res.status(201).json({
      success: true
    });
  }
}