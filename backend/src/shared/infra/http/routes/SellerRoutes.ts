import { CreateSellerController } from "@modules/seller/useCase/createSeller/CreateSellerController";
import { Router } from "express";


const sellerRoutes = Router();

const createSellerController = new CreateSellerController();

sellerRoutes.post("/new", createSellerController.handle);

export { sellerRoutes }