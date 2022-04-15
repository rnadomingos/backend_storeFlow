import { Seller } from "@modules/seller/entities/Seller";
import { ISellerRepository } from "@modules/seller/repositories/ISellerRepository";
import { inject, injectable } from "tsyringe";




@injectable()
export class GetStoreSellerUseCase {

  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) { }

  async execute(user_dms: string): Promise<Seller[]> {
    const store = await this.sellerRepository.findStoreBySeller(user_dms);
    return store;
  }

}