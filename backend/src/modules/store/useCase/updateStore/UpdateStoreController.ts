import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateStoreUseCase } from "./UpdateStoreUseCase";

export class UpdateStoreController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { cnpj, name, brand, is_active } = req.body;

    const updateStoreUseCase = container.resolve(UpdateStoreUseCase)

    await updateStoreUseCase.execute({
      id,
      cnpj,
      name,
      brand,
      is_active
    });

    return res.status(200).json({
      success: true
    });
  }
}