import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteServiceTypeUseCase } from "./DeleteServiceTypeUseCase";





export class DeleteServiceTypeController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const deleteServiceTypeController = container.resolve(DeleteServiceTypeUseCase)

        await deleteServiceTypeController.execute(id);

        return res.json({
            message: "Success"
        })
    }
}