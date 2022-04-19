import { CreateSegmentController } from "@modules/segment/useCase/createSegment/CreateSegmentController";
import { FindSegmentByIdController } from "@modules/segment/useCase/findSegmentById/FindSegmentByIdController";
import { FindSegmentByNameController } from "@modules/segment/useCase/findSegmentByName/FindSegmentByNameController";
import { GetSegmentByStoreIdController } from "@modules/segment/useCase/getSegmentByStoreId/GetSegmentByStoreIdController";
import { JoinSegmentStoreController } from "@modules/segment/useCase/joinSegmentStore/JoinSegmentStoreController";
import { ListSegmentController } from "@modules/segment/useCase/listSegment/ListSegmentController";
import { UpdateSegmentByIdController } from "@modules/segment/useCase/updateSegmentById/UpdateSegmentByIdController";
import { Router } from "express";

const segmentRoutes = Router();

const createSegmentController = new CreateSegmentController();
const findSegmentByNameController = new FindSegmentByNameController();
const findSegmentByIdController = new FindSegmentByIdController();
const listSegmentController = new ListSegmentController();
const joinSegmentStoreController = new JoinSegmentStoreController();
const getSegmentByStoreId = new GetSegmentByStoreIdController();
const updateSegmentById = new UpdateSegmentByIdController();

segmentRoutes.post("/new", createSegmentController.handle);
segmentRoutes.get("/get-segment-name/:name", findSegmentByNameController.handle);
segmentRoutes.get("/get-segment-id/:id", findSegmentByIdController.handle);
segmentRoutes.get("/list", listSegmentController.handle);
segmentRoutes.post("/join", joinSegmentStoreController.handle)
segmentRoutes.get("/get-store/:id", getSegmentByStoreId.handle)
segmentRoutes.patch("/update/:name", updateSegmentById.handle)

export { segmentRoutes }