import { SegmentRepositoryInMemory } from "../repositories/in-memory/SegmentRepositoryInMemory";
import { CreateSegmentController } from "./createSegment/CreateSegmentController";
import { CreateSegmentUseCase } from "./createSegment/CreateSegmentUseCase";


const segmentRepositoryInMemory = SegmentRepositoryInMemory.getInstance()

const createSegmentUseCase = new CreateSegmentUseCase(segmentRepositoryInMemory)
const createSegmentController = new CreateSegmentController(createSegmentUseCase)

export { createSegmentController, createSegmentUseCase}