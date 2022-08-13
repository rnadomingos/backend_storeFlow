import { ISeller } from "@domain/seller/model/ISeller";
import { ISellerRepository } from "@domain/seller/repository/ISellerRepository";
import { inject, injectable } from "tsyringe";




@injectable()
export class FindStoreSellerUseCase {

  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) { }

  async execute(user_dms: string): Promise<ISeller[]> {
    const store = await this.sellerRepository.findStoreBySeller(user_dms);
    return store;
  }

}