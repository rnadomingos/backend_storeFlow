import "reflect-metadata"
import { ICreateProspectionDTO } from "@domain/prospection/dto/ICreateProspectionDTO"
import { IUpdateProspectionDTO } from "@domain/prospection/dto/IUpdateProspection"
import { IProspection } from "@domain/prospection/model/IProspection"
import { IProspectionRepository } from "@domain/prospection/repository/IProspectionRepository"
import { CreateProspectionUseCase } from "@modules/prospection/useCase/createProspection/CreateProspectionUseCase"


const makeFakeProspection = (): IProspection => ({
  id: 'any_uuid',
  name: 'any_name',
  description: 'any_description',
  is_active: true,
  created_at: new Date('2022-05-02T22:02:50.641Z'),
  socialMedia: 'any_id_social_media'
})

const makeProspectionRepository = (): IProspectionRepository => {
  class ProspectionRepositoryStub implements IProspectionRepository {
    async create(data: ICreateProspectionDTO): Promise<IProspection> {
      return await new Promise(resolve => resolve(makeFakeProspection()))
    }
    list(): Promise<IProspection[]> {
      throw new Error("Method not implemented.")
    }
    findById(id: string): Promise<IProspection> {
      throw new Error("Method not implemented.")
    }
    async findByName(name: string): Promise<IProspection> {
      return await new Promise(resolve => resolve(null))
    }
    updateById(data: IUpdateProspectionDTO): Promise<void> {
      throw new Error("Method not implemented.")
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

class SutTypes {
  createProspectionUseCase: CreateProspectionUseCase;
  prospectionRepositoryStub: IProspectionRepository;
}

const makeSut = (): SutTypes => {
  const prospectionRepositoryStub = makeProspectionRepository();
 const sut = new CreateProspectionUseCase(prospectionRepositoryStub);
 return {
  createProspectionUseCase: sut,
  prospectionRepositoryStub
 }
  
}


describe('Prospection use cases' , () => { 
  test('Should be able to  create a prospection', async () => {
    const {createProspectionUseCase, prospectionRepositoryStub} = makeSut()
    const executeSpy = jest.spyOn(prospectionRepositoryStub, 'create')
    await createProspectionUseCase.execute({
      name: 'any_name',
      description: 'any_description'
    })
    expect(executeSpy).toHaveBeenCalledWith({
      name: 'any_name',
      description: 'any_description'
    });
   })

   test('Should not be able to  create a prospection if already exist', async () => {
    const {createProspectionUseCase, prospectionRepositoryStub} = makeSut()
    jest.spyOn(prospectionRepositoryStub, 'findByName').mockReturnValueOnce(
      new Promise((resolve, reject) => reject(new Error()))
    )
    const prospection = createProspectionUseCase.execute({
      name:'any_name', 
      description:'any_description'
    })
    await expect(prospection).rejects.toThrow();
   })

})