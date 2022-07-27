import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateServiceTypeUseCase } from "./CreateServiceTypeUseCase";

export class CreateServiceTypeController {
    async handle(req: Request, res: Response): Promise<Response> {

        const {
            name,
            description
        } = req.body;

        for (const field of [
            "name",
            "description"]) {
            if (!req.body[field]) {
                throw new ErrorHandler(`Params ${field} Missing`)
            }
        }

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