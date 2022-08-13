import { ISellerRepository } from "@domain/seller/repository/ISellerRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";


@injectable()
export class DeleteSellerUseCase {

  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) { }


  async execute(id: string): Promise<void> {

    const sellerExist = await this.sellerRepository.findById(id);

    if (!sellerExist) {
      throw new ErrorHandler(`Seller was not found!`)
    }

    await this.sellerRepository.delete(id);
  }

}