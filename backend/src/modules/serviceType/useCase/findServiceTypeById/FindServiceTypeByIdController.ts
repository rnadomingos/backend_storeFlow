import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindServiceTypeByIdUseCase } from "./FindServiceTypeByIdUseCase";




export class FindServiceTypeByIdController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;
        const findServiceTypeController = container.resolve(FindServiceTypeByIdUseCase)
        const serviceType = await findServiceTypeController.execute(id)

        return res.json(serviceType);
    }

}