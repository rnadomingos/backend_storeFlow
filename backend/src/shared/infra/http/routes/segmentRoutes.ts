import { CreateSegmentController } from "@modules/segment/useCase/createSegment/CreateSegmentController";
import { FindByNameSegmentController } from "@modules/segment/useCase/findByNameSegment/FindByNameSegmentController";
import { JoinSegmentStoreController } from "@modules/segment/useCase/joinSegmentStore/JoinSegmentStoreController";
import { ListSegmentController } from "@modules/segment/useCase/listSegment/ListSegmentController";
import { Router } from "express";

const segmentRoutes = Router();

const createSegmentController = new CreateSegmentController();
const findBySegmentController = new FindByNameSegmentController();
const listSegmentController = new ListSegmentController();
const joinSegmentStoreController = new JoinSegmentStoreController();

segmentRoutes.post("/new", createSegmentController.handle);
segmentRoutes.get("/get-segment/:name", findBySegmentController.handle);
segmentRoutes.get("/list", listSegmentController.handle);
segmentRoutes.post("/join", joinSegmentStoreController.handle)

export { segmentRoutes }