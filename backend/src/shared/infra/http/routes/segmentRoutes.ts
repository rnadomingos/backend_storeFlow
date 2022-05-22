import { CreateSegmentController } from "@modules/segment/useCase/createSegment/CreateSegmentController";
import { DeleteSegmentByIdController } from "@modules/segment/useCase/deleteSegmentById/DeleteSegmentByIdController";
import { FindSegmentByIdController } from "@modules/segment/useCase/findSegmentById/FindSegmentByIdController";
import { FindSegmentByNameController } from "@modules/segment/useCase/findSegmentByName/FindSegmentByNameController";
import { GetSegmentByStoreIdController } from "@modules/segment/useCase/getSegmentByStoreId/GetSegmentByStoreIdController";
import { JoinSegmentStoreController } from "@modules/segment/useCase/joinSegmentStore/JoinSegmentStoreController";
import { ListSegmentController } from "@modules/segment/useCase/listSegment/ListSegmentController";
import { UpdateSegmentByIdController } from "@modules/segment/useCase/updateSegmentById/UpdateSegmentByIdController";
import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const segmentRoutes = Router();

const createSegmentController = new CreateSegmentController();
const findSegmentByNameController = new FindSegmentByNameController();
const findSegmentByIdController = new FindSegmentByIdController();
const listSegmentController = new ListSegmentController();
const joinSegmentStoreController = new JoinSegmentStoreController();
const getSegmentByStoreId = new GetSegmentByStoreIdController();
const updateSegmentById = new UpdateSegmentByIdController();
const deleteSegmentByIdController = new DeleteSegmentByIdController();

segmentRoutes.post("/new", isAuthenticated, createSegmentController.handle);
segmentRoutes.get("/get-segment-name/:name", isAuthenticated, findSegmentByNameController.handle);
segmentRoutes.get("/get-segment-id/:id", isAuthenticated, findSegmentByIdController.handle);
segmentRoutes.get("/list", isAuthenticated, listSegmentController.handle);
segmentRoutes.post("/join", isAuthenticated, joinSegmentStoreController.handle)
segmentRoutes.get("/get-store/:id", isAuthenticated, getSegmentByStoreId.handle)
segmentRoutes.patch("/update/:id", isAuthenticated, updateSegmentById.handle)
segmentRoutes.delete("/del/:id", isAuthenticated, deleteSegmentByIdController.handle)

export { segmentRoutes }