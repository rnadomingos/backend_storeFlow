import { ICreateSellerDTO } from "@modules/seller/dtos/ICreateSellerDTO";
import { ISellerRepository } from "@modules/seller/repositories/ISellerRepository";
import { inject, injectable } from "tsyringe";



@injectable()
export class CreateSellerUseCase {

  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) { }

  async execute({
    name,
    user_dms,
    id_store
  }: ICreateSellerDTO): Promise<void> {

    const sellerExists = await this.sellerRepository.findByUserDms(user_dms);

    if (sellerExists) {
      throw new Error("Seller Already Exists !")
    }

    await this.sellerRepository.create({
      name,
      user_dms,
      id_store
    });

  }
}