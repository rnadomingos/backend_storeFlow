import { Router } from "express";
import { sellerRoutes } from "./SellerRoutes";
import { storeRoutes } from "./storeRoutes";

const router = Router();

router.use("/store", storeRoutes);
router.use("/seller", sellerRoutes);

export { router }