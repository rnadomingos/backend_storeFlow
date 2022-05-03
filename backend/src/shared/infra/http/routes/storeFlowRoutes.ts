import { Router } from "express";
import { CreateStoreFlowController } from "@modules/storeFlow/useCase/createStoreFlow/CreateStoreFlowController"
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { ListStoreFlowController } from "@modules/storeFlow/useCase/listStoreFlow/ListStoreFlowController";

const storeFlowRoutes = Router()

const createStoreFlowController = new CreateStoreFlowController()
const listStoreFlowController = new ListStoreFlowController();

storeFlowRoutes.post("/new", isAuthenticated, createStoreFlowController.handle);
storeFlowRoutes.get("/list", isAuthenticated, listStoreFlowController.handle);


export { storeFlowRoutes }