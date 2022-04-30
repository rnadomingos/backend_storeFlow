import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindSocialMediaByNameUseCase } from "./FindSocialMediaByNameUseCase";



export class FindSocialMediaByNameController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { name } = req.params;

        const findSocialMediaByNameController = container.resolve(FindSocialMediaByNameUseCase)
        const socialMedia = await findSocialMediaByNameController.excecute(name)

        return res.json(socialMedia);
    }
}