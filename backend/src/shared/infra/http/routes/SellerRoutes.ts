import { CreateSellerController } from "@modules/seller/useCase/createSeller/CreateSellerController";
import { GetStoreSellerController } from "@modules/seller/useCase/getStoreBySeller/GetStoreSellerController";
import { Router } from "express";


const sellerRoutes = Router();

const createSellerController = new CreateSellerController();
const getStoreSellerController = new GetStoreSellerController();

sellerRoutes.post("/new", createSellerController.handle);
sellerRoutes.get("/get-store/:user_dms", getStoreSellerController.handle);

export { sellerRoutes }