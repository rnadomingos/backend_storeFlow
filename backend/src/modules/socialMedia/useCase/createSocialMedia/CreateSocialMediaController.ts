import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSocialMediaUseCase } from "./CreateSocialMediaUseCase";



export class CreateSocialMediaController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            name,
            description,
            id_prospection
        } = req.body

        const createSocialMediaController = container.resolve(CreateSocialMediaUseCase)

        await createSocialMediaController.execute({
            name,
            description,
            id_prospection
        });

        return res.status(201).json({
            message: "Success"
        });
    }
}