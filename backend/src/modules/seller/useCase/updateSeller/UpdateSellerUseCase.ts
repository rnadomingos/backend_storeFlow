
import { IUpdateSellerDTO } from "@domain/seller/dto/IUpdateSellerDTO";
import { ISellerRepository } from "@domain/seller/repository/ISellerRepository";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { inject, injectable } from "tsyringe";


@injectable()
export class UpdateSellerUseCase {
  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) { }

  async execute({
    id,
    name,
    user_dms,
    id_store,
    is_active
  }: IUpdateSellerDTO): Promise<void> {

    const seller = await this.sellerRepository.findById(id);

    if (!seller) {
      throw new ErrorHandler(`This ID:(${seller.id}) was not found!`)
    }

    if (name) {
      seller.name = name
    }
    if (user_dms) {
      seller.user_dms = user_dms
    }
    if (id_store) {
      seller.id_store = id_store
    }
    if (is_active !== null) {
      seller.is_active = is_active
    }

    await this.sellerRepository.update(seller)

  }
}