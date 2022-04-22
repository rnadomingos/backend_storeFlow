import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteServiceTypeByIdUseCase } from "./DeleteServiceTypeByIdUseCase";





export class DeleteServiceTypeByIdController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const deleteServiceTypeByController = container.resolve(DeleteServiceTypeByIdUseCase)

        await deleteServiceTypeByController.execute(id);

        return res.json({
            message: "Success"
        })
    }
}