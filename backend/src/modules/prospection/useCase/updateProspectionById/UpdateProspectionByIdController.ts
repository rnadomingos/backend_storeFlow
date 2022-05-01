import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateProspectionByIdUseCase } from "./UpdateProspectionByIdUseCase";

export class UpdateProspectionByIdController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const {
            name,
            description,
            is_active
        } = req.body;

        const updateProspectionByIdController = container.resolve(UpdateProspectionByIdUseCase)

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