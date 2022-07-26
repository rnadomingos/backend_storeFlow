import "reflect-metadata"
import { ICreateProspectionDTO } from "@domain/prospection/dto/ICreateProspectionDTO"
import { IUpdateProspectionDTO } from "@domain/prospection/dto/IUpdateProspection"
import { IProspection } from "@domain/prospection/model/IProspection"
import { IProspectionRepository } from "@domain/prospection/repository/IProspectionRepository"
import { CreateProspectionUseCase } from "@modules/prospection/useCase/createProspection/CreateProspectionUseCase"
import { FindAllProspectionUseCase } from "@modules/prospection/useCase/findAllProspection/FindAllProspectionUseCase"
import { UpdateProspectionUseCase } from "@modules/prospection/useCase/updateProspectionById/UpdateProspectionUseCase"


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

    deleteById(id: string): Promise<void> {
      throw new Error("Method not implemented.")
    }

    disableEnableById( id: string, is_active: boolean): Promise<void> {
      throw new Error("Method not implemented.")
    }

  }
  
  return new ProspectionRepositoryStub()
}

interface ISutTypes {
  createProspectionUseCase: CreateProspectionUseCase;
  prospectionRepositoryStub: IProspectionRepository;
  findAllProspectionUseCase: FindAllProspectionUseCase;
  updateProspectionUseCase: UpdateProspectionUseCase;
}

const makeSut = (): ISutTypes => {
  const prospectionRepositoryStub = makeProspectionRepository();
 const createProspectionUseCase = new CreateProspectionUseCase(prospectionRepositoryStub);
 const findAllProspectionUseCase = new FindAllProspectionUseCase(prospectionRepositoryStub);
 const updateProspectionUseCase = new UpdateProspectionUseCase(prospectionRepositoryStub)
 return {
  createProspectionUseCase,
  prospectionRepositoryStub,
  findAllProspectionUseCase,
  updateProspectionUseCase
 }
  
}


describe('Prospection use cases' , () => { 
  test('Should be able to  create a prospection', async () => {
    const {createProspectionUseCase, prospectionRepositoryStub} = makeSut()
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
      const {createProspectionUseCase, prospectionRepositoryStub} = makeSut()
    jest.spyOn(prospectionRepositoryStub, 'findByName').mockReturnValueOnce(
      new Promise((resolve) => resolve(makeFakeProspection()))
    )
   await createProspectionUseCase.execute({
      name:'any_name', 
      description:'any_description'
    });
    }).rejects.toEqual({"message": "Prospection already exists!", "statusCode": 400});
  
   });

   test('Should be able to list all prospections', async () => {
    const {findAllProspectionUseCase} = makeSut()
    const prospections = await findAllProspectionUseCase.execute();
    expect(prospections.length).toBe(3);
   });

   test('Should be able to update a prospection', async () => {
    const {updateProspectionUseCase, prospectionRepositoryStub} = makeSut()
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
        const {updateProspectionUseCase, prospectionRepositoryStub} = makeSut()
        jest.spyOn(prospectionRepositoryStub, 'findById').mockReturnValueOnce(
          new Promise((resolve) => resolve(null))
        )
        await updateProspectionUseCase.execute({
          id: 'invalid_uuid',
          is_active: false
        });
      }).rejects.toEqual({"message": "This ID:(invalid_uuid) was not found!", "statusCode": 400});
   });

})