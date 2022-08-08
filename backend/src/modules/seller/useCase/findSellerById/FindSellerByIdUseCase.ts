import { ISeller } from "@domain/seller/model/ISeller";
import { ISellerRepository } from "@domain/seller/repository/ISellerRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";




@injectable()
export class FindSellerByIdUseCase {

  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) { }

  async execute(id: string): Promise<ISeller> {
    const seller = await this.sellerRepository.findById(id)

    if (!seller) {
      throw new ErrorHandler('Seller not found !')
    }

    return seller;
  }

}