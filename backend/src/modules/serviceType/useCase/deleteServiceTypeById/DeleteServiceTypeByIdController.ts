import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteServiceTypeByIdUseCase } from "./DeleteServiceTypeByIdUseCase";





export class DeleteServiceTypeByIdController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const deleteServiceTypeByIdController = container.resolve(DeleteServiceTypeByIdUseCase)

        await deleteServiceTypeByIdController.execute(id);

        return res.json({
            message: "Success"
        })
    }
}