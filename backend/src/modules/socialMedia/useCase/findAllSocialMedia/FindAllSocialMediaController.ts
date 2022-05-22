import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllSocialMediaUseCase } from "./FindAllSocialMediaUseCase";

export class FindAllSocialMediaController {

    async handle(req: Request, res: Response): Promise<Response> {

        const findAllSocialMediaController = container.resolve(FindAllSocialMediaUseCase)
        const socialMedia = await findAllSocialMediaController.execute()

        return res.json(socialMedia);
    }
}