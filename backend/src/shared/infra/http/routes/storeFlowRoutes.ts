import { Router } from "express";
import { CreateStoreFlowController } from "@modules/storeFlow/useCase/createStoreFlow/CreateStoreFlowController"
import { isAuthenticated } from "../middlewares/isAuthenticated";

const storeFlowRoutes = Router()

const createStoreFlowController = new CreateStoreFlowController()

storeFlowRoutes.post("/new", isAuthenticated, createStoreFlowController.handle);

export { storeFlowRoutes }