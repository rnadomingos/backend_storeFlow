import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetSellerByUserDmsUseCase } from "./GetSellerByUserDmsUseCase";


export class GetSellerByUserDmsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user_dms } = req.params

    const getSellerByUserDmsUseCase = container.resolve(GetSellerByUserDmsUseCase);
    const sellers = await getSellerByUserDmsUseCase.execute(user_dms);

    return res.json(sellers)

  }
}