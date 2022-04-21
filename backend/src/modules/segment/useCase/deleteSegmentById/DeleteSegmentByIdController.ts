import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteSegmentByIdUseCase } from "./DeleteSegmentByIdUseCase";

export class DeleteSegmentByIdController {
    async handle(req: Request, res: Response) {

        const {
            id
        } = req.params

        const deleteSegmentByIdUseCase = container.resolve(DeleteSegmentByIdUseCase)

        await deleteSegmentByIdUseCase.execute(id)

        res.json({
            message: "Success"
        })

    }
}