import "reflect-metadata"
import { ICreateSellerDTO } from "@domain/seller/dto/ICreateSellerDTO";
import { IUpdateSellerDTO } from "@domain/seller/dto/IUpdateSellerDTO";
import { ISeller } from "@domain/seller/model/ISeller"
import { ISellerRepository } from "@domain/seller/repository/ISellerRepository";
import { CreateSellerUseCase } from "@modules/seller/useCase/createSeller/CreateSellerUseCase";
import { ListSellerUseCase } from "@modules/seller/useCase/listSeller/ListSellerUseCase";
import { UpdateSellerUseCase } from "@modules/seller/useCase/updateSeller/UpdateSellerUseCase";
import { DeleteSellerUseCase } from "@modules/seller/useCase/deleteSeller/DeleteSellerUseCase";


const makeFakeSeller = (): ISeller => ({
  id: "any_uuid",
  name: "any_seller_name",
  user_dms: "any_user_dms",
  is_active: true,
  create_at: new Date('2022-05-02T22:02:50.641Z'),
  id_store: "any_id_store"
});

const makeFakeSellers = (): ISeller[] => [
  {
    id: "first_uuid",
    name: "first_seller_name",
    user_dms: "first_user_dms",
    is_active: true,
    create_at: new Date('2022-05-02T22:02:50.641Z'),
    id_store: "first_id_store"
  },
  {
    id: "second_uuid",
    name: "second_seller_name",
    user_dms: "second_user_dms",
    is_active: true,
    create_at: new Date('2022-05-02T22:02:50.641Z'),
    id_store: "second_id_store"
  },
  {
    id: "other_uuid",
    name: "other_seller_name",
    user_dms: "other_user_dms",
    is_active: true,
    create_at: new Date('2022-05-02T22:02:50.641Z'),
    id_store: "other_id_store"
  }
];


const makeFakeCreateSeller = (): ICreateSellerDTO => ({
  name: "any_seller_name",
  user_dms: "any_user_dms",
  id_store: "any_id_store"
})

const makeSellerRepository = (): ISellerRepository => {
  class SellerRepositoryStub implements ISellerRepository {
    async findById(id: string): Promise<ISeller> {
      return await new Promise(resolve => resolve(makeFakeSeller()))
    }
    async findByUserDms(user_dms: string): Promise<ISeller> {
      return await new Promise(resolve => resolve(null))
    }
    async create(data: ICreateSellerDTO): Promise<void> {
      return await new Promise(resolve => resolve(null))
    }
    async list(): Promise<ISeller[]> {
      return await new Promise(resolve => resolve(makeFakeSellers()))
    }
    findStoreBySeller(user_dms: string): Promise<ISeller[]> {
      throw new Error("Method not implemented.");
    }
    async update(data: IUpdateSellerDTO): Promise<void> {
      return await new Promise(resolve => resolve(null))
    }
    async delete(id: string): Promise<void> {
      return await new Promise(resolve => resolve(null))
    }

  }
  return new SellerRepositoryStub()
}

interface ISutTypes {
  sellerRepositoryStub: ISellerRepository
  createSellerUseCase: CreateSellerUseCase
  listSellerUseCase: ListSellerUseCase
  updateSellerUseCase: UpdateSellerUseCase
  deleteSellerUseCase: DeleteSellerUseCase
}

const makeSut = (): ISutTypes => {
  const sellerRepositoryStub = makeSellerRepository()
  const createSellerUseCase = new CreateSellerUseCase(sellerRepositoryStub)
  const listSellerUseCase = new ListSellerUseCase(sellerRepositoryStub)
  const updateSellerUseCase = new UpdateSellerUseCase(sellerRepositoryStub)
  const deleteSellerUseCase = new DeleteSellerUseCase(sellerRepositoryStub)
  return {
    sellerRepositoryStub,
    createSellerUseCase,
    listSellerUseCase,
    updateSellerUseCase,
    deleteSellerUseCase
  }
}

describe('Seller use cases', () => {
  test('Should be able to create a new seller on success', async () => {
    const { createSellerUseCase, sellerRepositoryStub } = makeSut()
    const createSpy = jest.spyOn(sellerRepositoryStub, 'create')
    await createSellerUseCase.execute(makeFakeCreateSeller())
    expect(createSpy).toHaveBeenCalledWith(makeFakeCreateSeller())
  });

  test('Should not be able to  create a seller if already exist', () => {
    expect(async () => {
      const { createSellerUseCase, sellerRepositoryStub } = makeSut()
      jest.spyOn(sellerRepositoryStub, 'findByUserDms').mockReturnValueOnce(
        new Promise((resolve) => resolve(makeFakeSeller()))
      )
      await createSellerUseCase.execute(makeFakeSeller());
    }).rejects.toEqual({ "message": "Seller Already Exists !", "statusCode": 400 });
  });

  test('Should be able to list all sellers', async () => {
    const { listSellerUseCase } = makeSut()
    const segments = await listSellerUseCase.execute();
    expect(segments.length).toBe(3);
  });

  test('Should be able to update a seller', async () => {
    const { updateSellerUseCase, sellerRepositoryStub } = makeSut()
    const executeSpy = jest.spyOn(sellerRepositoryStub, 'update')
    await updateSellerUseCase.execute({
      id: 'any_id',
      is_active: false,
      id_store: "new_id_store"
    });
    expect(executeSpy).toHaveBeenCalledWith({
      id: "any_uuid",
      name: "any_seller_name",
      user_dms: "any_user_dms",
      is_active: false,
      create_at: new Date('2022-05-02T22:02:50.641Z'),
      id_store: "new_id_store"
    });
  });

  test('Should not be able to update a seller if id not found', async () => {
    expect(async () => {
      const { updateSellerUseCase, sellerRepositoryStub } = makeSut()
      jest.spyOn(sellerRepositoryStub, 'findById').mockReturnValueOnce(
        new Promise((resolve) => resolve(null))
      )
      await updateSellerUseCase.execute({
        id: 'invalid_uuid',
        is_active: false
      });
    }).rejects.toEqual({ "message": "This Seller was not found!", "statusCode": 400 });
  });

  test('Should be able to delete a seller', async () => {
    const { deleteSellerUseCase, sellerRepositoryStub } = makeSut()
    const deleteSpy = jest.spyOn(sellerRepositoryStub, 'delete')
    await deleteSellerUseCase.execute('any_uuid');
    expect(deleteSpy).toHaveBeenCalled();
  });

  test('Should not be able to delete a seller if id not found', async () => {
    expect(async () => {
      const { deleteSellerUseCase, sellerRepositoryStub } = makeSut()
      jest.spyOn(sellerRepositoryStub, 'findById').mockReturnValueOnce(
        new Promise((resolve) => resolve(null))
      )
      await deleteSellerUseCase.execute('invalid_uuid');
    }).rejects.toEqual({ "message": "Seller was not found!", "statusCode": 400 });
  });

})