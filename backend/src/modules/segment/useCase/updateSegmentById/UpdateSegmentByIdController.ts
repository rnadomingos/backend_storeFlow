import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateSegmentByIdUseCase } from "./UpdateSegmentByIdUseCase";



export class UpdateSegmentByIdController {
    async handle(req: Request, res: Response) {


        const id = req.params.id;

        console.log("req.params", id);


        const {
            name,
            description,
            is_active
        } = req.body;



        const updateSegmentByIdUseCase = container.resolve(UpdateSegmentByIdUseCase)

        await updateSegmentByIdUseCase.excecute({
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