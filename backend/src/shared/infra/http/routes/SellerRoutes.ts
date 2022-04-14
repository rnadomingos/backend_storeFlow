import { CreateSellerController } from "@modules/seller/useCase/createSeller/CreateSellerController";
import { GetSellerByUserDmsController } from "@modules/seller/useCase/getSellerByUserDMS/GetSellerByUserDmsController";
import { GetStoreSellerController } from "@modules/seller/useCase/getStoreBySeller/GetStoreSellerController";
import { ListSellerController } from "@modules/seller/useCase/listSeller/ListSellerController";
import { Router } from "express";


const sellerRoutes = Router();

const createSellerController = new CreateSellerController();
const getStoreSellerController = new GetStoreSellerController();
const listSellerController = new ListSellerController();
const getSellerByUserDmsController = new GetSellerByUserDmsController();

sellerRoutes.post("/new", createSellerController.handle);
sellerRoutes.get("/get-store/:user_dms", getStoreSellerController.handle);
sellerRoutes.get("/list", listSellerController.handle);
sellerRoutes.get("/get-seller/:user_dms", getSellerByUserDmsController.handle);


export { sellerRoutes }