import { Router } from "express";
import { segmentRoutes } from "./segmentRoutes";
import { sellerRoutes } from "./SellerRoutes";
import { storeRoutes } from "./storeRoutes";

const router = Router();

router.use("/store", storeRoutes);
router.use("/seller", sellerRoutes);
router.use("/segment", segmentRoutes);

export { router }