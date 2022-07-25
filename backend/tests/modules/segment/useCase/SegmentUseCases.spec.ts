import "reflect-metadata"
import { ICreateSegmentDTO } from "@domain/segment/dto/ICreateSegmentDTO";
import { IUpdateSegmentByIdDTO } from "@domain/segment/dto/IUpdateSegmentByIdDTO";
import { ISegment } from "@domain/segment/model/ISegment";
import { ISegmentRepository } from "@domain/segment/repository/ISegmentRepository";
import { Segment } from "@modules/segment/entities/Segment";
import { CreateSegmentUseCase } from "@modules/segment/useCase/createSegment/CreateSegmentUseCase"


const makeFakeSegment= (): ISegment => ({
  id: 'any_uuid',
  name: 'any_name',
  description: 'any_description',
  is_active: true,
  create_at: new Date('2022-05-02T22:02:50.641Z'),
  store: 'any_id_store'
})

const makeSegmentRepository = (): ISegmentRepository => {
  class SegmentRepositoryStub implements ISegmentRepository {
    async create(data: ICreateSegmentDTO): Promise<void> {
      return await new Promise(resolve => resolve(null))
    }
    async findByName(name: string): Promise<Segment> {
      return await new Promise(resolve => resolve(null))
    }
    findById(id: string): Promise<Segment> {
      throw new Error("Method not implemented.");
    }
    list(): Promise<Segment[]> {
      throw new Error("Method not implemented.");
    }
    updateSegmentById(data: IUpdateSegmentByIdDTO): Promise<void> {
      throw new Error("Method not implemented.");
    }
    deleteSegmentById(id: string): Promise<void> {
      throw new Error("Method not implemented.");
    }

  }
  return new SegmentRepositoryStub()
}

interface ISutTypes {
  createSegmentUseCase: CreateSegmentUseCase;
  segmentRepositoryStub: ISegmentRepository;
}

const makeSut = (): ISutTypes => {
const segmentRepositoryStub = makeSegmentRepository()
const createSegmentUseCase = new CreateSegmentUseCase(segmentRepositoryStub)
return {
  createSegmentUseCase,
  segmentRepositoryStub
}
} 

describe('Segment use cases' , () => { 
  test('Should be able to create a segment', async () => { 
    const {createSegmentUseCase, segmentRepositoryStub} = makeSut()
    const executeSpy = jest.spyOn(segmentRepositoryStub, 'create')
    await createSegmentUseCase.execute({
      name: 'any_name',
      description: 'any_description'
    });
    expect(executeSpy).toHaveBeenCalledWith({
      name: 'any_name',
      description: 'any_description'
    });

  })
})