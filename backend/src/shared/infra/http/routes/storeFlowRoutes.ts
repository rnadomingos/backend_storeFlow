import { Router } from "express";
import { CreateStoreFlowController } from "@modules/storeFlow/useCase/createStoreFlow/CreateStoreFlowController"
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { ListStoreFlowController } from "@modules/storeFlow/useCase/listStoreFlow/ListStoreFlowController";
import { UpdateStoreFlowController } from "@modules/storeFlow/useCase/updateStoreFlow/UpdateStoreFlowController";

const storeFlowRoutes = Router()

const createStoreFlowController = new CreateStoreFlowController()
const listStoreFlowController = new ListStoreFlowController();
const updateStoreFlowController = new UpdateStoreFlowController()

storeFlowRoutes.post("/new", isAuthenticated, createStoreFlowController.handle);
storeFlowRoutes.get("/list", isAuthenticated, listStoreFlowController.handle);
storeFlowRoutes.patch("/update/:id", isAuthenticated, updateStoreFlowController.handle);


export { storeFlowRoutes }