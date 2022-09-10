import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindSocialMediaUseCase } from "./FindSocialMediaUseCase";

export class FindSocialMediaController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { keyword, page} = req.query

        const findSocialMediaController = container.resolve(FindSocialMediaUseCase)
        const socialMedia = await findSocialMediaController.execute(keyword, Number(page))

        return res.json(socialMedia);
    }
}