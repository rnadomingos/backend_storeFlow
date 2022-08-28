import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateStoreFlowUseCase } from "./UpdateStoreFlowUseCase";


export class UpdateStoreFlowController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

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
      id_prospection,
      id_social_media,
      comments
    } = req.body;

    const updateStoreFlowUseCase = container.resolve(UpdateStoreFlowUseCase);
    await updateStoreFlowUseCase.execute({
      id,
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
      id_prospection,
      id_social_media,
      comments
    })

    return res.status(200).json({
      success: true
    });
  }

}