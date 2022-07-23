import { CreateServiceTypeController } from "@modules/serviceType/useCase/createServiceType/CreateServiceTypeController";
import { DeleteServiceTypeByIdController } from "@modules/serviceType/useCase/deleteServiceTypeById/DeleteServiceTypeByIdController";
import { FindServiceTypeByIdController } from "@modules/serviceType/useCase/findServiceTypeById/FindeServiceTypeByIdController";
import { ListServiceTypeController } from "@modules/serviceType/useCase/listServiceType/ListServiceTypeController";
import { UpdateServiceTypeController } from "@modules/serviceType/useCase/updateServiceType/UpdateServiceTypeController";
import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const serviceTypeRoutes = Router();

const createServiceTypeController = new CreateServiceTypeController();
const listServiceTypeController = new ListServiceTypeController();
const findServiceTypeByIidController = new FindServiceTypeByIdController();
const updateServiceTypeController = new UpdateServiceTypeController();
const deleteServiceTypeController = new DeleteServiceTypeByIdController();

serviceTypeRoutes.post("/new", isAuthenticated, createServiceTypeController.handle);
serviceTypeRoutes.get("/list", isAuthenticated, listServiceTypeController.handle);
serviceTypeRoutes.get("/get-service/:id", isAuthenticated, findServiceTypeByIidController.handle);
serviceTypeRoutes.put("/update/:id", isAuthenticated, updateServiceTypeController.handle);
serviceTypeRoutes.delete("/delete/:id", isAuthenticated, deleteServiceTypeController.handle);


export { serviceTypeRoutes }