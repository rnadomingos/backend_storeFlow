import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteSegmentUseCase } from "./DeleteSegmentUseCase";

export class DeleteSegmentController {
    async handle(req: Request, res: Response) {

        const {
            id
        } = req.params

        const deleteSegmentByIdUseCase = container.resolve(DeleteSegmentUseCase)

        await deleteSegmentByIdUseCase.execute(id)

        res.json({
            message: "Success"
        })

    }
}