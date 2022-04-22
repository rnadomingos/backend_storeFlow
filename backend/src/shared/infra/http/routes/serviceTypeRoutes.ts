import { CreateServiceTypeController } from "@modules/serviceType/useCase/createServiceType/CreateServiceTypeController";
import { ListServiceTypeController } from "@modules/serviceType/useCase/listServiceType/ListServiceTypeController";
import { Router } from "express";

const serviceTypeRoutes = Router();

const createServiceTypeController = new CreateServiceTypeController();
const listServiceTypeController = new ListServiceTypeController();


serviceTypeRoutes.post("/new", createServiceTypeController.handle)
serviceTypeRoutes.get("/list", listServiceTypeController.handle)


export { serviceTypeRoutes }