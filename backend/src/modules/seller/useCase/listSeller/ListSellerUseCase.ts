import { ISeller } from "@domain/seller/model/ISeller";
import { ISellerRepository } from "@domain/seller/repository/ISellerRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class ListSellerUseCase {

  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) { }

  async execute(): Promise<ISeller[]> {
    return await this.sellerRepository.list();
  }
}