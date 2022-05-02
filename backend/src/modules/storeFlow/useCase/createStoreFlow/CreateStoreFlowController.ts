import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateStoreFlowUseCase } from "./CreateStoreFlowUseCase";


export class CreateStoreFlowController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      client_name,
      client_email,
      client_phone,
      time,
      date,
      test_driver,
      sold,
      id_store,
      id_seller,
      id_store_segment,
      id_type_service,
      id_user,
      id_prospection
    } = req.body;

    const createStoreFlowUseCase = container.resolve(CreateStoreFlowUseCase);
    await createStoreFlowUseCase.execute({
      client_name,
      client_email,
      client_phone,
      time,
      date,
      test_driver,
      sold,
      id_store,
      id_seller,
      id_store_segment,
      id_type_service,
      id_user,
      id_prospection
    })

    return res.status(201).json({
      success: true
    });
  }
}