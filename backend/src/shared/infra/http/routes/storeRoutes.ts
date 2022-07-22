import { CreateStoreController } from "@modules/store/useCase/createStore/CreateStoreController";
import { GetStoreByCNPJController } from "@modules/store/useCase/getStoreByCNPJ/GetStoreByCNPJController";
import { ListSellersStoreController } from "@modules/store/useCase/listSellersFromStore/ListSellersStoreController";
import { ListStoreController } from "@modules/store/useCase/listStore/ListStoreController";
import { UpdateStoreController } from "@modules/store/useCase/updateStore/UpdateStoreController";
import { JoinStoreSegmentController } from "@modules/store/useCase/joinStoreSegment/JoinStoreSegmentController";
import { GetSegmentByStoreIdController } from "@modules/store/useCase/getSegmentByStoreId/GetSegmentByStoreIdController";
import { SeparateStoreSegmentController } from "@modules/store/useCase/separateStoreSegment/SeparateStoreSegmentController";
import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";


const storeRoutes = Router();

const createStoreController = new CreateStoreController();
const listStoreController = new ListStoreController();
const listSellersStoreController = new ListSellersStoreController();
const updateStoreController = new UpdateStoreController();
const getStoreByCNPJController = new GetStoreByCNPJController();
const joinStoreSegmentController = new JoinStoreSegmentController();
const getSegmentByStoreIdController = new GetSegmentByStoreIdController();
const separateStoreSegmentController = new SeparateStoreSegmentController();

storeRoutes.post("/new", isAuthenticated, createStoreController.handle);
storeRoutes.get("/", isAuthenticated, listStoreController.handle);
storeRoutes.get("/list-sellers/:id", isAuthenticated, listSellersStoreController.handle);
storeRoutes.put("/update/:id", isAuthenticated, updateStoreController.handle);
storeRoutes.get("/:cnpj", isAuthenticated, getStoreByCNPJController.handle);
storeRoutes.post("/joinStoreSegment", isAuthenticated, joinStoreSegmentController.handle)
storeRoutes.get("/get-segment/:id_store", isAuthenticated, getSegmentByStoreIdController.handle)
storeRoutes.post("/separateStoreSegment", separateStoreSegmentController.handle)



export { storeRoutes }