import "reflect-metadata"
import { ICreateProspectionDTO } from "@domain/prospection/dto/ICreateProspectionDTO"
import { IUpdateProspectionDTO } from "@domain/prospection/dto/IUpdateProspection"
import { IProspection } from "@domain/prospection/model/IProspection"
import { IProspectionRepository } from "@domain/prospection/repository/IProspectionRepository"
import { CreateProspectionUseCase } from "@modules/prospection/useCase/createProspection/CreateProspectionUseCase"
import { UpdateProspectionUseCase } from "@modules/prospection/useCase/updateProspectionById/UpdateProspectionUseCase"
import { ListProspectionUseCase } from "@modules/prospection/useCase/listProspection/ListProspectionUseCase"
import { DeleteProspectionUseCase } from "@modules/prospection/useCase/deleteProspection/DeleteProspectionByIdUseCase"
import { FindProspectionByIdUseCase } from "@modules/prospection/useCase/findProspectionById/FindProspectionByIdUseCase"
import { FindProspectionByNameUseCase } from "@modules/prospection/useCase/findProspectionByName/FindProspectionByNameUseCase"


const makeFakeProspection = (): IProspection => ({
  id: 'any_uuid',
  name: 'any_name',
  description: 'any_description',
  is_active: true,
  created_at: new Date('2022-05-02T22:02:50.641Z'),
  socialMedia: 'any_id_social_media'
})

const makeFakeProspections = (): IProspection[] => [
  {
    id: 'first_uuid',
    name: 'first_name',
    description: 'first_description',
    is_active: true,
    created_at: new Date('2022-05-02T22:02:50.641Z'),
    socialMedia: 'first_id_social_media'
  },
  {
    id: 'second_uuid',
    name: 'second_name',
    description: 'second_description',
    is_active: true,
    created_at: new Date('2022-05-02T22:02:50.641Z'),
    socialMedia: 'second_id_social_media'
  },
  {
    id: 'third_uuid',
    name: 'third_name',
    description: 'third_description',
    is_active: true,
    created_at: new Date('2022-05-02T22:02:50.641Z'),
    socialMedia: 'third_id_social_media'
  }
]


const makeProspectionRepository = (): IProspectionRepository => {
  class ProspectionRepositoryStub implements IProspectionRepository {
    async create(data: ICreateProspectionDTO): Promise<void> {
      return await new Promise(resolve => resolve(null))
    }

    async list(): Promise<IProspection[]> {
      return await new Promise(resolve => resolve(makeFakeProspections()))
    }

    async findById(id: string): Promise<IProspection> {
      return await new Promise(resolve => resolve(makeFakeProspection()))
    }

    async findByName(name: string): Promise<IProspection> {
      return await new Promise(resolve => resolve(null))
    }

    async update(data: IUpdateProspectionDTO): Promise<void> {
      return await new Promise(resolve => resolve(null))
    }

    async delete(id: string): Promise<void> {
      return await new Promise(resolve => resolve(null))
    }

    disableEnableById(id: string, is_active: boolean): Promise<void> {
      throw new Error("Method not implemented.")
    }

  }

  return new ProspectionRepositoryStub()
}

interface ISutTypes {
  createProspectionUseCase: CreateProspectionUseCase;
  prospectionRepositoryStub: IProspectionRepository;
  findAllProspectionUseCase: ListProspectionUseCase;
  updateProspectionUseCase: UpdateProspectionUseCase;
  deleteProspectionUseCase: DeleteProspectionUseCase;
  findProspectionByIdUseCase: FindProspectionByIdUseCase;
  findProspectionByNameUseCase: FindProspectionByNameUseCase;
}

const makeSut = (): ISutTypes => {
  const prospectionRepositoryStub = makeProspectionRepository();
  const createProspectionUseCase = new CreateProspectionUseCase(prospectionRepositoryStub);
  const findAllProspectionUseCase = new ListProspectionUseCase(prospectionRepositoryStub);
  const updateProspectionUseCase = new UpdateProspectionUseCase(prospectionRepositoryStub);
  const deleteProspectionUseCase = new DeleteProspectionUseCase(prospectionRepositoryStub);
  const findProspectionByIdUseCase = new FindProspectionByIdUseCase(prospectionRepositoryStub);
  const findProspectionByNameUseCase = new FindProspectionByNameUseCase(prospectionRepositoryStub);
  return {
    createProspectionUseCase,
    prospectionRepositoryStub,
    findAllProspectionUseCase,
    updateProspectionUseCase,
    deleteProspectionUseCase,
    findProspectionByIdUseCase,
    findProspectionByNameUseCase
  }

}


describe('Prospection use cases', () => {
  test('Should be able to  create a prospection', async () => {
    const { createProspectionUseCase, prospectionRepositoryStub } = makeSut()
    const executeSpy = jest.spyOn(prospectionRepositoryStub, 'create')
    await createProspectionUseCase.execute({
      name: 'any_name',
      description: 'any_description'
    });
    expect(executeSpy).toHaveBeenCalledWith({
      name: 'any_name',
      description: 'any_description'
    });
  });

  test('Should not be able to  create a prospection if already exist', () => {
    expect(async () => {
      const { createProspectionUseCase, prospectionRepositoryStub } = makeSut()
      jest.spyOn(prospectionRepositoryStub, 'findByName').mockReturnValueOnce(
        new Promise((resolve) => resolve(makeFakeProspection()))
      )
      await createProspectionUseCase.execute({
        name: 'any_name',
        description: 'any_description'
      });
    }).rejects.toEqual({ "message": "Prospection already exists!", "statusCode": 400 });

  });

  test('Should be able to list all prospections', async () => {
    const { findAllProspectionUseCase } = makeSut()
    const prospections = await findAllProspectionUseCase.execute();
    expect(prospections.length).toBe(3);
  });

  test('Should be able to update a prospection', async () => {
    const { updateProspectionUseCase, prospectionRepositoryStub } = makeSut()
    const executeSpy = jest.spyOn(prospectionRepositoryStub, 'update')
    await updateProspectionUseCase.execute({
      id: 'any_uuid',
      name: 'update_name',
      is_active: false
    });
    expect(executeSpy).toHaveBeenCalledWith({
      id: 'any_uuid',
      name: 'update_name',
      description: 'any_description',
      is_active: false,
      created_at: new Date('2022-05-02T22:02:50.641Z'),
      socialMedia: 'any_id_social_media'
    });
  });

  test('Should not be able to update a prospection if id not found', async () => {
    expect(async () => {
      const { updateProspectionUseCase, prospectionRepositoryStub } = makeSut()
      jest.spyOn(prospectionRepositoryStub, 'findById').mockReturnValueOnce(
        new Promise((resolve) => resolve(null))
      )
      await updateProspectionUseCase.execute({
        id: 'invalid_uuid',
        is_active: false
      });
    }).rejects.toEqual({ "message": "Prospection was not found!", "statusCode": 400 });
  });

  test('Should be able to delete a prospection', async () => {
    const { deleteProspectionUseCase, prospectionRepositoryStub } = makeSut()
    const deleteSpy = jest.spyOn(prospectionRepositoryStub, 'delete')
    await deleteProspectionUseCase.execute('any_uuid');
    expect(deleteSpy).toHaveBeenCalled();
  });

  test('Should not be able to delete a prospection if id not found', async () => {
    expect(async () => {
      const { deleteProspectionUseCase, prospectionRepositoryStub } = makeSut()
      jest.spyOn(prospectionRepositoryStub, 'findById').mockReturnValueOnce(
        new Promise((resolve) => resolve(null))
      )
      await deleteProspectionUseCase.execute('invalid_uuid');
    }).rejects.toEqual({ "message": "Prospection was not found!", "statusCode": 400 });
  });

  test('Should be able to find prospection by ID', async () => {
    const { findProspectionByIdUseCase } = makeSut()
    const prospection = await findProspectionByIdUseCase.execute('any_uuid');
    expect(prospection.name).toBe('any_name');
  });

  test('Should not be able to find prospection if ID not found', async () => {
    expect(async () => {
      const { findProspectionByIdUseCase, prospectionRepositoryStub } = makeSut()
      jest.spyOn(prospectionRepositoryStub, 'findById').mockReturnValueOnce(
        new Promise((resolve) => resolve(null))
      )
      await findProspectionByIdUseCase.execute('invalid_uuid');
    }).rejects.toEqual({ "message": "Prospection was not found!", "statusCode": 400 });
  });

  test('Should be able to find prospection by name', async () => {
    const { findProspectionByNameUseCase, prospectionRepositoryStub } = makeSut()
    jest.spyOn(prospectionRepositoryStub, 'findByName').mockReturnValueOnce(
      new Promise((resolve) => resolve(makeFakeProspection()))
    )
    const prospection = await findProspectionByNameUseCase.execute('any_name');
    expect(prospection.id).toBe('any_uuid');
  });

  test('Should not be able to find prospection if prospection name not found', async () => {
    expect(async () => {
      const { findProspectionByNameUseCase } = makeSut()
      await findProspectionByNameUseCase.execute('invalid_name');
    }).rejects.toEqual({ "message": "Prospection was not found!", "statusCode": 400 });
  });


})