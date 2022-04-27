import { CreateSegmentController } from "@modules/segment/useCase/createSegment/CreateSegmentController";
import { FindByNameSegmentController } from "@modules/segment/useCase/findByNameSegment/FindByNameSegmentController";
import { GetSegmentByStoreIdController } from "@modules/segment/useCase/getSegmentByStoreId/GetSegmentByStoreIdController";
import { JoinSegmentStoreController } from "@modules/segment/useCase/joinSegmentStore/JoinSegmentStoreController";
import { ListSegmentController } from "@modules/segment/useCase/listSegment/ListSegmentController";
import { UpdateSegmentByIdController } from "@modules/segment/useCase/updateSegmentById/UpdateSegmentByIdController";
import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const segmentRoutes = Router();

const createSegmentController = new CreateSegmentController();
const findBySegmentController = new FindByNameSegmentController();
const listSegmentController = new ListSegmentController();
const joinSegmentStoreController = new JoinSegmentStoreController();
const getSegmentByStoreId = new GetSegmentByStoreIdController();
const updateSegmentById = new UpdateSegmentByIdController();

segmentRoutes.post("/new", isAuthenticated, createSegmentController.handle);
segmentRoutes.get("/get-segment/:name", isAuthenticated, findBySegmentController.handle);
segmentRoutes.get("/list", isAuthenticated, listSegmentController.handle);
segmentRoutes.post("/join", isAuthenticated, joinSegmentStoreController.handle)
segmentRoutes.get("/get-store/:id", isAuthenticated, getSegmentByStoreId.handle)
segmentRoutes.patch("/update/:name", isAuthenticated, updateSegmentById.handle)

export { segmentRoutes }