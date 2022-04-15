import { CreateSegmentController } from "@modules/segment/useCase/createSegment/CreateSegmentController";
import { FindByNameSegmentController } from "@modules/segment/useCase/findByNameSegment/FindByNameSegmentController";
import { ListSegmentController } from "@modules/segment/useCase/listSegment/ListSegmentController";
import { Router } from "express";

const segmentRoutes = Router();

const createSegmentController = new CreateSegmentController();
const findBySegmentController = new FindByNameSegmentController();
const listSegmentController = new ListSegmentController();

segmentRoutes.post("/new", createSegmentController.handle);
segmentRoutes.get("/get-segment/:name", findBySegmentController.handle);
segmentRoutes.get("/list", listSegmentController.handle);

export { segmentRoutes }