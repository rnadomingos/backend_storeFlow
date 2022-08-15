import { ISeller } from "@domain/seller/model/ISeller";
import { ISellerRepository } from "@domain/seller/repository/ISellerRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";


@injectable()
export class FindSellerByUserDmsUseCase {

  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) { }


  async execute(user_dms: string): Promise<ISeller> {
    const seller = await this.sellerRepository.findByUserDms(user_dms);

    if (!seller) {
      throw new ErrorHandler('Seller was not found!')
    }

    return seller;
  }

}