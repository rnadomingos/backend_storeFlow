import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSellerUseCase } from "./CreateSellerUseCase";


export class CreateSellerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      user_dms,
      id_store } = req.body;

      for (const field of [
        "name",
        "user_dms",
        "id_store"]) {
        if (!req.body[field]) {
          throw new ErrorHandler(`Params ${field} Missing`)
        }
      }


    const createSellerUseCase = container.resolve(CreateSellerUseCase);
    await createSellerUseCase.execute({
      name,
      user_dms,
      id_store
    });

    return res.status(201).json({
      success: true
    })
  }
}

