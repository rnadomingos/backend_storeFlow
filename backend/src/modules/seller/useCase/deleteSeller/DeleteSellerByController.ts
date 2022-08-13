import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteSellerUseCase } from "./DeleteSellerUseCase";


export class DeleteSellerByController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const getSellerByUserDmsUseCase = container.resolve(DeleteSellerUseCase);
    await getSellerByUserDmsUseCase.execute(id);

    return res.status(200).json({
      success: true
    })

  }
}