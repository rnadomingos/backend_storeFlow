import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteSocialMediaByIdUseCase } from "./DeleteSocialMediaByIdUseCase";





export class DeleteSocialMediaByIdController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const deleteSocialMediaByIdController = container.resolve(DeleteSocialMediaByIdUseCase)

        await deleteSocialMediaByIdController.execute(id);

        return res.json({
            message: "Success"
        })
    }
}