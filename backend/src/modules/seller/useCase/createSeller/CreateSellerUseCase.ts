import { ICreateSellerDTO } from "@domain/seller/dto/ICreateSellerDTO";
import { ISellerRepository } from "@domain/seller/repository/ISellerRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";



@injectable()
export class CreateSellerUseCase {

  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) { }

  async execute(sellerData: ICreateSellerDTO): Promise<void> {

    const sellerExists = await this.sellerRepository.findByUserDms(sellerData.user_dms);

    if (sellerExists) {
      throw new ErrorHandler("Seller Already Exists !")
    }

    await this.sellerRepository.create(sellerData);

  }
}