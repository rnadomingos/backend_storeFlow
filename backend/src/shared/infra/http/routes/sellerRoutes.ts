import { CreateSellerController } from "@modules/seller/useCase/createSeller/CreateSellerController";
import { GetSellerByUserDmsController } from "@modules/seller/useCase/getSellerByUserDMS/GetSellerByUserDmsController";
import { GetStoreSellerController } from "@modules/seller/useCase/getStoreBySeller/GetStoreSellerController";
import { ListSellerController } from "@modules/seller/useCase/listSeller/ListSellerController";
import { UpdateSellerController } from "@modules/seller/useCase/updateSeller/UpdateSellerController";
import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";


const sellerRoutes = Router();

const createSellerController = new CreateSellerController();
const getStoreSellerController = new GetStoreSellerController();
const listSellerController = new ListSellerController();
const getSellerByUserDmsController = new GetSellerByUserDmsController();
const updateSellerController = new UpdateSellerController();

sellerRoutes.post("/new", isAuthenticated, createSellerController.handle);
sellerRoutes.get("/get-store/:user_dms", isAuthenticated, getStoreSellerController.handle);
sellerRoutes.get("/list", isAuthenticated, listSellerController.handle);
sellerRoutes.get("/get-seller/:user_dms", isAuthenticated, getSellerByUserDmsController.handle);
sellerRoutes.put("/update/:id", isAuthenticated, updateSellerController.handle);


export { sellerRoutes }