import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetStoreUserUseCase } from "./GetStoreUserUseCase";


export class GetStoreUserController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { user_dms } = req.params

    const getStoreUserUseCase = container.resolve(GetStoreUserUseCase);

    const store = await getStoreUserUseCase.execute(user_dms);
    return res.json(store);
  }
}