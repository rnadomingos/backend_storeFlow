import { ISellerRepository } from "@domain/seller/repository/ISellerRepository";
import { Seller } from "@modules/seller/entities/Seller";
import { inject, injectable } from "tsyringe";


@injectable()
export class GetSellerByUserDmsUseCase {

  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) { }


  async execute(user_dms: string): Promise<Seller> {
    return await this.sellerRepository.findByUserDms(user_dms);
  }

}