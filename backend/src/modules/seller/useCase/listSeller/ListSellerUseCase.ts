import { Seller } from "@modules/seller/entities/Seller";
import { ISellerRepository } from "@modules/seller/repositories/ISellerRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class ListSellerUseCase {

  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) { }

  async execute(): Promise<Seller[]> {
    return await this.sellerRepository.list();
  }
}