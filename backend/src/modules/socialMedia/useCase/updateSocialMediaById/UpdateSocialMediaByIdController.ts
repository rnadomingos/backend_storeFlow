import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateSocialMediaByIdUseCase } from "./UpdateSocialMediaByIdUseCase";

export class UpdateSocialMediaByIdController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const {
            name,
            description,
            is_active,
            id_prospection
        } = req.body;

        const updateSocialMediaByIdController = container.resolve(UpdateSocialMediaByIdUseCase)

        await updateSocialMediaByIdController.execute({
            id,
            name,
            description,
            is_active,
            id_prospection
        })

        return res.json({
            message: "Success"
        })
    }
}