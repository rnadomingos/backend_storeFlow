import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindSocialMediaByNameUseCase } from "./FindSocialMediaByNameUseCase";

export class FindSocialMediaByNameController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { name } = req.query;
        
        const findSocialMediaByNameController = container.resolve(FindSocialMediaByNameUseCase)
        const socialMedia = await findSocialMediaByNameController.execute(name.toString())

        return res.json(socialMedia);
    }
}