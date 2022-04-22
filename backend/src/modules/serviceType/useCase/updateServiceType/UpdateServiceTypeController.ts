import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateServiceTypeUseCase } from "./UpdateServiceTypeUseCase";




export class UpdateServiceTypeController {
    async handle(req: Request, res: Response): Promise<void> {

        const id = req.params.id;

        const {
            name,
            description,
            is_active
        } = req.body;

        const updateServiceTypeController = container.resolve(UpdateServiceTypeUseCase)

        await updateServiceTypeController.execute({
            id,
            name,
            description,
            is_active
        })

        res.json({
            message: "Success"
        })
    }
}