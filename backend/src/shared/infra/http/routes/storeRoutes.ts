import { CreateStoreController } from "@modules/store/useCase/createStore/CreateStoreController";
import { ListStoreController } from "@modules/store/useCase/listStore/ListStoreController";
import { Router } from "express";


const storeRoutes = Router();

const createStoreController = new CreateStoreController();
const listStoreController = new ListStoreController();

storeRoutes.post("/new", createStoreController.handle);
storeRoutes.get("/", listStoreController.handle);


export { storeRoutes }