import { Router } from "express";
import { CreateServiceTypeController } from "@modules/serviceType/useCase/createServiceType/CreateServiceTypeController";
import { DeleteServiceTypeController } from "@modules/serviceType/useCase/deleteServiceTypeById/DeleteServiceTypeController";
import { FindServiceTypeByIdController } from "@modules/serviceType/useCase/findServiceTypeById/FindServiceTypeByIdController";
import { ListServiceTypeController } from "@modules/serviceType/useCase/listServiceType/ListServiceTypeController";
import { UpdateServiceTypeController } from "@modules/serviceType/useCase/updateServiceType/UpdateServiceTypeController";
import { isAdmin } from "../middlewares/isAdmin";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const serviceTypeRoutes = Router();

const createServiceTypeController = new CreateServiceTypeController();
const listServiceTypeController = new ListServiceTypeController();
const findServiceTypeByIidController = new FindServiceTypeByIdController();
const updateServiceTypeController = new UpdateServiceTypeController();
const deleteServiceTypeController = new DeleteServiceTypeController();

serviceTypeRoutes.post("/", isAuthenticated, isAdmin, createServiceTypeController.handle);
serviceTypeRoutes.get("/", isAuthenticated, listServiceTypeController.handle);
serviceTypeRoutes.get("/:id", isAuthenticated, findServiceTypeByIidController.handle);
serviceTypeRoutes.put("/:id", isAuthenticated, isAdmin, updateServiceTypeController.handle);
serviceTypeRoutes.delete("/:id", isAuthenticated, isAdmin, deleteServiceTypeController.handle);


export { serviceTypeRoutes }