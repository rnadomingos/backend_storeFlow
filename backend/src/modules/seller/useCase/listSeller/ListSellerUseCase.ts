import { ISeller } from "@domain/seller/model/ISeller";
import { ISellerRepository } from "@domain/seller/repository/ISellerRepository";
import { inject, injectable } from "tsyringe";
import env from '@config/env'

interface IResponse {
  total: number;
  limit_per_page: number;
  sellers: ISeller[]
}

@injectable()
export class ListSellerUseCase {

  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) { }

  async execute(args: any = '', page: number = 1): Promise<IResponse> {
    const rowsPerPage = env.register_per_page
    const sellers = await this.sellerRepository.list(args, page, rowsPerPage)
    const total = (await this.sellerRepository.list(args)).length
    return {
      total,
      limit_per_page: rowsPerPage,
      sellers
    }
  }
}