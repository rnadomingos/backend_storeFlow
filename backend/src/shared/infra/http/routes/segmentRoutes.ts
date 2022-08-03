import { CreateSegmentController } from "@modules/segment/useCase/createSegment/CreateSegmentController";
import { DeleteSegmentController } from "@modules/segment/useCase/deleteSegmentById/DeleteSegmentController";
import { FindSegmentByIdController } from "@modules/segment/useCase/findSegmentById/FindSegmentByIdController";
import { FindSegmentByNameController } from "@modules/segment/useCase/findSegmentByName/FindSegmentByNameController";
import { ListSegmentController } from "@modules/segment/useCase/listSegment/ListSegmentController";
import { UpdateSegmentController } from "@modules/segment/useCase/updateSegment/UpdateSegmentController";
import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const segmentRoutes = Router();

const createSegmentController = new CreateSegmentController();
const findSegmentByNameController = new FindSegmentByNameController();
const findSegmentByIdController = new FindSegmentByIdController();
const listSegmentController = new ListSegmentController();
const updateSegment = new UpdateSegmentController();
const deleteSegmentController = new DeleteSegmentController();
DeleteSegmentController
segmentRoutes.post("/new", isAuthenticated, createSegmentController.handle);
segmentRoutes.get("/get-segment-name/:name", isAuthenticated, findSegmentByNameController.handle);
segmentRoutes.get("/get-segment-id/:id", isAuthenticated, findSegmentByIdController.handle);
segmentRoutes.get("/list", isAuthenticated, listSegmentController.handle);
segmentRoutes.put("/update/:id", isAuthenticated, updateSegment.handle)
segmentRoutes.delete("/del/:id", isAuthenticated, deleteSegmentController.handle)

export { segmentRoutes }