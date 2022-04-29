import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateSegmentByIdUseCase } from "./UpdateSegmentByIdUseCase";



export class UpdateSegmentByIdController {
    async handle(req: Request, res: Response) {


        const nameReq = req.params.name;

        console.log("req.params", nameReq);


        const {
            id,
            name,
            description,
            is_active
        } = req.body;



        const updateSegmentByIdUseCase = container.resolve(UpdateSegmentByIdUseCase)

        await updateSegmentByIdUseCase.excecute({
            id,
            name,
            nameReq,
            description,
            is_active
        })

        res.json({
            success: true
        })
    }
}