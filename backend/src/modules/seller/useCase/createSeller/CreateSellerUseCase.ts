import { ICreateSellerDTO } from "@modules/seller/dtos/ICreateSellerDTO";
import { ISellerRepository } from "@modules/seller/repositories/ISellerRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";



@injectable()
export class CreateSellerUseCase {

  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) { }

  async execute(sellerData: ICreateSellerDTO): Promise<void> {

    for (const field of [
      "name",
      "user_dms",
      "id_store"]) {
      if (!sellerData[field]) {
        throw new ErrorHandler(`Params ${field} Missing`)
      }
    }


    const sellerExists = await this.sellerRepository.findByUserDms(sellerData.user_dms);

    if (sellerExists) {
      throw new ErrorHandler("Seller Already Exists !")
    }

    await this.sellerRepository.create(sellerData);

  }
}