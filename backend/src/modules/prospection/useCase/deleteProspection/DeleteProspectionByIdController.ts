import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteProspectionUseCase } from "./DeleteProspectionByIdUseCase";





export class DeleteProspectionIdController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const deleteProspectionByIdController = container.resolve(DeleteProspectionUseCase)

        await deleteProspectionByIdController.execute(id);

        return res.json({
            message: "Success"
        })
    }
}