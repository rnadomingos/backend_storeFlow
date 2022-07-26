import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateSegmentUseCase } from "./UpdateSegmentUseCase";



export class UpdateSegmentController {
    async handle(req: Request, res: Response) {


        const id = req.params.id;

        console.log("req.params", id);


        const {
            name,
            description,
            is_active
        } = req.body;



        const updateSegmentByIdUseCase = container.resolve(UpdateSegmentUseCase)

        await updateSegmentByIdUseCase.execute({
            id,
            name,
            description,
            is_active
        })

        res.json({
            success: true
        })
    }
}