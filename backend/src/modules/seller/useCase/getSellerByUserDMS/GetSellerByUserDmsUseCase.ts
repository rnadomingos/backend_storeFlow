import { ISeller } from "@domain/seller/model/ISeller";
import { ISellerRepository } from "@domain/seller/repository/ISellerRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class GetSellerByUserDmsUseCase {

  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) { }


  async execute(user_dms: string): Promise<ISeller> {
    return await this.sellerRepository.findByUserDms(user_dms);
  }

}