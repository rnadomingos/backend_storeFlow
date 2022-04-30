import { Request, Response } from "express";
import { container } from "tsyringe";
import { DisableEnableSocialMediaByIdUseCase } from "./DisableEnableSocialMediaByIdUseCase";

export class DisableEnableSocialMediaByIdController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const disableEnableSocialMediaByIdController = container.resolve(DisableEnableSocialMediaByIdUseCase)

        await disableEnableSocialMediaByIdController.execute(id);

        return res.json({
            message: "Success"
        })
    }
}