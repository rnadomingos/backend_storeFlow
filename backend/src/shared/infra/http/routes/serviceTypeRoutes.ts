import { CreateServiceTypeController } from "@modules/serviceType/useCase/createServiceType/CreateServiceTypeController";
import { DeleteServiceTypeByIdController } from "@modules/serviceType/useCase/deleteServiceTypeById/DeleteServiceTypeByIdController";
import { FindServiceTypeByIdController } from "@modules/serviceType/useCase/findServiceTypeById/FindeServiceTypeByIdController";
import { ListServiceTypeController } from "@modules/serviceType/useCase/listServiceType/ListServiceTypeController";
import { UpdateServiceTypeController } from "@modules/serviceType/useCase/updateServiceType/UpdateServiceTypeController";
import { Router } from "express";

const serviceTypeRoutes = Router();

const createServiceTypeController = new CreateServiceTypeController();
const listServiceTypeController = new ListServiceTypeController();
const findServiceTypeByIidController = new FindServiceTypeByIdController();
const updateServiceTypeController = new UpdateServiceTypeController();
const deleteServiceTypeController = new DeleteServiceTypeByIdController();

serviceTypeRoutes.post("/new", createServiceTypeController.handle);
serviceTypeRoutes.get("/list", listServiceTypeController.handle);
serviceTypeRoutes.get("/get-service/:id", findServiceTypeByIidController.handle);
serviceTypeRoutes.patch("/update/:id", updateServiceTypeController.handle);
serviceTypeRoutes.delete("/del/:id", deleteServiceTypeController.handle);


export { serviceTypeRoutes }