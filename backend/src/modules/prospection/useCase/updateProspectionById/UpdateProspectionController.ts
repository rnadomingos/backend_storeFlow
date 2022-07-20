import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateProspectionUseCase } from "./UpdateProspectionUseCase";

export class UpdateProspectionController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const {
            name,
            description,
            is_active
        } = req.body;

        const updateProspectionByIdController = container.resolve(UpdateProspectionUseCase)

        await updateProspectionByIdController.execute({
            id,
            name,
            description,
            is_active
        })

        return res.json({
            message: "Success"
        })
    }
}