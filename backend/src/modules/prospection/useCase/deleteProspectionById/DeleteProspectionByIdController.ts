import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteProspectionByIdUseCase } from "./DeleteProspectionByIdUseCase";





export class DeleteProspectionByIdController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const deleteProspectionByIdController = container.resolve(DeleteProspectionByIdUseCase)

        await deleteProspectionByIdController.execute(id);

        return res.json({
            message: "Success"
        })
    }
}