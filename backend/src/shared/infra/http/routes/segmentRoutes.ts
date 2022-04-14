import { CreateSegmentController } from "@modules/segment/useCase/createSegment/CreateSegmentController";
import { Router } from "express";

const segmentRoutes = Router();

const createSegmentController = new CreateSegmentController()

segmentRoutes.post("/new", createSegmentController.handle)

export { segmentRoutes }