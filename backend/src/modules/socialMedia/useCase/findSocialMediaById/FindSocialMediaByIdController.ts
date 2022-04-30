import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindSocialMediaByIdUseCase } from "./FindSocialMediaByIdUseCase";



export class FindSocialMediaByIdController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const findSocialMediaByIdController = container.resolve(FindSocialMediaByIdUseCase)
        const socialMedia = await findSocialMediaByIdController.excecute(id)

        return res.json(socialMedia);
    }
}