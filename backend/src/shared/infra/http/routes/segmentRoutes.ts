import { CreateSegmentController } from "@modules/segment/useCase/createSegment/CreateSegmentController";
import { DeleteSegmentController } from "@modules/segment/useCase/deleteSegmentById/DeleteSegmentController";
import { FindSegmentByIdController } from "@modules/segment/useCase/findSegmentById/FindSegmentByIdController";
import { FindSegmentByNameController } from "@modules/segment/useCase/findSegmentByName/FindSegmentByNameController";
import { ListSegmentController } from "@modules/segment/useCase/listSegment/ListSegmentController";
import { UpdateSegmentController } from "@modules/segment/useCase/updateSegment/UpdateSegmentController";
import { Router } from "express";
import { isAdmin } from "../middlewares/isAdmin";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const segmentRoutes = Router();

const createSegmentController = new CreateSegmentController();
const findSegmentByNameController = new FindSegmentByNameController();
const findSegmentByIdController = new FindSegmentByIdController();
const listSegmentController = new ListSegmentController();
const updateSegment = new UpdateSegmentController();
const deleteSegmentController = new DeleteSegmentController();

segmentRoutes.post("/", isAuthenticated, isAdmin, createSegmentController.handle);
segmentRoutes.get("/", isAuthenticated, listSegmentController.handle);
segmentRoutes.get("/filter", isAuthenticated, findSegmentByNameController.handle);
segmentRoutes.get("/:id", isAuthenticated, findSegmentByIdController.handle);
segmentRoutes.put("/:id", isAuthenticated, isAdmin, updateSegment.handle)
segmentRoutes.delete("/:id", isAuthenticated, isAdmin, deleteSegmentController.handle)

export { segmentRoutes }