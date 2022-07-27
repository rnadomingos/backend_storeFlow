import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProspectionUseCase } from "./CreateProspectionUseCase";

export class CreateProspectionController {

    async handle(req: Request, res: Response): Promise<Response> {

        const {
            name,
            description,
        } = req.body;

        for (const field of ["name", "description"]) {
            if (!req.body[field]) {
              throw new ErrorHandler(`Params ${field} Missing`)
            }
          }
          
        const createProspectionController = container.resolve(CreateProspectionUseCase);

        await createProspectionController.execute({
            name,
            description
        });

        return res.status(201).json({
            message: "Success"
        })
    }
}