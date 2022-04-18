import { CreateStoreController } from "@modules/store/useCase/createStore/CreateStoreController";
import { ListSellersStoreController } from "@modules/store/useCase/listSellersFromStore/ListSellersStoreController";
import { ListStoreController } from "@modules/store/useCase/listStore/ListStoreController";
import { UpdateStoreController } from "@modules/store/useCase/updateStore/UpdateStoreController";
import { Router } from "express";


const storeRoutes = Router();

const createStoreController = new CreateStoreController();
const listStoreController = new ListStoreController();
const listSellersStoreController = new ListSellersStoreController();
const updateStoreController = new UpdateStoreController()

storeRoutes.post("/new", createStoreController.handle);
storeRoutes.get("/", listStoreController.handle);
storeRoutes.get("/list-sellers/:id", listSellersStoreController.handle);
storeRoutes.put("/update/:id", updateStoreController.handle);


export { storeRoutes }