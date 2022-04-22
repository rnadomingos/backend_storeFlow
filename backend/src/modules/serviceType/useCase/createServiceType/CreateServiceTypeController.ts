import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateServiceTypeUseCase } from "./CreateServiceTypeUseCase";

export class CreateServiceTypeController {
    async handle(req: Request, res: Response): Promise<Response> {

        const {
            name,
            description
        } = req.body;

        const createServiceTypeUseCase = container.resolve(CreateServiceTypeUseCase);

        await createServiceTypeUseCase.execute({
            name,
            description
        })

        return res.status(201).json({
            message: "Success"
        })
    }
}