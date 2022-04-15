import { CreateSegmentController } from "@modules/segment/useCase/createSegment/CreateSegmentController";
import { FindByNameSegmentController } from "@modules/segment/useCase/findByNameSegment/FindByNameSegmentController";
import { Router } from "express";

const segmentRoutes = Router();

const createSegmentController = new CreateSegmentController();
const findBySegmentController = new FindByNameSegmentController();

segmentRoutes.post("/new", createSegmentController.handle);
segmentRoutes.get("/get-segment/:name", findBySegmentController.handle);

export { segmentRoutes }