import { ISeller } from "@domain/seller/model/ISeller";
import { ISellerRepository } from "@domain/seller/repository/ISellerRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";




@injectable()
export class FindStoreSellerUseCase {

  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) { }

  async execute(user_dms: string): Promise<ISeller> {
    const sellerStore = await this.sellerRepository.findStoreBySeller(user_dms);

    if (!sellerStore) {
      throw new ErrorHandler('Seller was not found!')
    }

    return sellerStore;
  }

}