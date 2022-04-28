import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSocialMediaUseCase } from "./CreateSocialMediaUseCase";



export class CreateSocialMediaController {
    async handle(req: Request, res: Response) {
        const {
            name,
            description
        } = req.body

        const createSocialMediaController = container.resolve(CreateSocialMediaUseCase)

        await createSocialMediaController.execute({
            name,
            description
        });

    }
}