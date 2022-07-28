import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindSellerByUserDmsUseCase } from "./FindSellerByUserDmsUseCase";


export class FindSellerByUserDmsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user_dms } = req.params

    const getSellerByUserDmsUseCase = container.resolve(FindSellerByUserDmsUseCase);
    const sellers = await getSellerByUserDmsUseCase.execute(user_dms);

    return res.json(sellers)

  }
}