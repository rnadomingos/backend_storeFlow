import "reflect-metadata"
import { ICreateSegmentDTO } from "@domain/segment/dto/ICreateSegmentDTO";
import { IUpdateDTO } from "@domain/segment/dto/IUpdateSegmentDTO";
import { ISegment } from "@domain/segment/model/ISegment";
import { ISegmentRepository } from "@domain/segment/repository/ISegmentRepository";
import { CreateSegmentUseCase } from "@modules/segment/useCase/createSegment/CreateSegmentUseCase"
import { ListSegmentUseCase } from "@modules/segment/useCase/listSegment/ListSegmentUseCase";
import { UpdateSegmentUseCase } from "@modules/segment/useCase/updateSegment/UpdateSegmentUseCase";
import { DeleteSegmentUseCase } from "@modules/segment/useCase/deleteSegmentById/DeleteSegmentUseCase";


const makeFakeSegment = (): ISegment => ({
  id: 'any_uuid',
  name: 'any_name',
  description: 'any_description',
  is_active: true,
  create_at: new Date('2022-05-02T22:02:50.641Z'),
  store: 'any_id_store'
});

const makeFakeSegments = (): ISegment[] => [
  {
    id: 'first_uuid',
    name: 'first_name',
    description: 'first_description',
    is_active: true,
    create_at: new Date('2022-05-02T22:02:50.641Z'),
    store: 'first_id_store'
  },
  {
    id: 'second_uuid',
    name: 'second_name',
    description: 'second_description',
    is_active: true,
    create_at: new Date('2022-05-02T22:02:50.641Z'),
    store: 'second_id_store'
  },
]

const makeSegmentRepository = (): ISegmentRepository => {
  class SegmentRepositoryStub implements ISegmentRepository {
    async create(data: ICreateSegmentDTO): Promise<void> {
      return await new Promise(resolve => resolve(null))
    }
    async findByName(name: string): Promise<ISegment> {
      return await new Promise(resolve => resolve(null))
    }
    async findById(id: string): Promise<ISegment> {
      return await new Promise(resolve => resolve(makeFakeSegment()))
    }
    async list(): Promise<ISegment[]> {
      return await new Promise(resolve => resolve(makeFakeSegments()))
    }
    async update(data: IUpdateDTO): Promise<void> {
      return await new Promise(resolve => resolve(null))
    }
    async delete(id: string): Promise<void> {
      return await new Promise(resolve => resolve(null))
    }

  }
  return new SegmentRepositoryStub()
}

interface ISutTypes {
  createSegmentUseCase: CreateSegmentUseCase;
  segmentRepositoryStub: ISegmentRepository;
  listSegmentUseCase: ListSegmentUseCase;
  updateSegmentUseCase: UpdateSegmentUseCase;
  deleteSegmentUseCase: DeleteSegmentUseCase;
}

const makeSut = (): ISutTypes => {
  const segmentRepositoryStub = makeSegmentRepository()
  const createSegmentUseCase = new CreateSegmentUseCase(segmentRepositoryStub)
  const listSegmentUseCase = new ListSegmentUseCase(segmentRepositoryStub)
  const updateSegmentUseCase = new UpdateSegmentUseCase(segmentRepositoryStub)
  const deleteSegmentUseCase = new DeleteSegmentUseCase(segmentRepositoryStub)
  return {
    createSegmentUseCase,
    segmentRepositoryStub,
    listSegmentUseCase,
    updateSegmentUseCase,
    deleteSegmentUseCase
  }
}

describe('Segment use cases', () => {
  test('Should be able to create a segment', async () => {
    const { createSegmentUseCase, segmentRepositoryStub } = makeSut()
    const createSpy = jest.spyOn(segmentRepositoryStub, 'create')
    await createSegmentUseCase.execute({
      name: 'any_name',
      description: 'any_description'
    });
    expect(createSpy).toHaveBeenCalledWith({
      name: 'any_name',
      description: 'any_description'
    });
  });

  test('Should not be able to  create a segment if already exist', () => {
    expect(async () => {
      const { createSegmentUseCase, segmentRepositoryStub } = makeSut()
      jest.spyOn(segmentRepositoryStub, 'findByName').mockReturnValueOnce(
        new Promise((resolve) => resolve(makeFakeSegment()))
      )
      await createSegmentUseCase.execute({
        name: 'any_name',
        description: 'any_description'
      });
    }).rejects.toEqual({ "message": "Segment Already exists !", "statusCode": 400 });
  });

  test('Should be able to list all segments', async () => {
    const { listSegmentUseCase } = makeSut()
    const segments = await listSegmentUseCase.execute();
    expect(segments.length).toBe(2);
  });

  test('Should be able to update a segment', async () => {
    const { updateSegmentUseCase, segmentRepositoryStub } = makeSut()
    const executeSpy = jest.spyOn(segmentRepositoryStub, 'update')
    await updateSegmentUseCase.execute({
      id: 'any_uuid',
      name: 'update_name',
      is_active: false
    });
    expect(executeSpy).toHaveBeenCalledWith({
      id: 'any_uuid',
      name: 'update_name',
      description: 'any_description',
      is_active: false,
      create_at: new Date('2022-05-02T22:02:50.641Z'),
      store: 'any_id_store'
    });
  });

  test('Should not be able to update a prospection if id not found', async () => {
    expect(async () => {
      const { updateSegmentUseCase, segmentRepositoryStub } = makeSut()
      jest.spyOn(segmentRepositoryStub, 'findById').mockReturnValueOnce(
        new Promise((resolve) => resolve(null))
      )
      await updateSegmentUseCase.execute({
        id: 'invalid_uuid',
        is_active: false
      });
    }).rejects.toEqual({ "message": "Segment was not found!", "statusCode": 400 });
  });

  test('Should be able to delete a prospection', async () => {
    const { deleteSegmentUseCase, segmentRepositoryStub } = makeSut()
    const deleteSpy = jest.spyOn(segmentRepositoryStub, 'delete')
    await deleteSegmentUseCase.execute('any_uuid');
    expect(deleteSpy).toHaveBeenCalled();
  });

  test('Should not be able to delete a prospection if id not found', async () => {
    expect(async () => {
      const { deleteSegmentUseCase, segmentRepositoryStub } = makeSut()
      jest.spyOn(segmentRepositoryStub, 'findById').mockReturnValueOnce(
        new Promise((resolve) => resolve(null))
      )
      await deleteSegmentUseCase.execute('invalid_uuid');
    }).rejects.toEqual({ "message": "Segment was not found!", "statusCode": 400 });
  });

})