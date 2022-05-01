import { Request, Response } from "express";
import { container } from "tsyringe";
import { DisableEnableProspectionByIdUseCase } from "./disableEnableProspectionByIdUseCase";


export class DisableEnableProspectionByIdController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const disableEnableProspectionByIdController = container.resolve(DisableEnableProspectionByIdUseCase)

        await disableEnableProspectionByIdController.execute(id);

        return res.json({
            message: "Success"
        })
    }
}