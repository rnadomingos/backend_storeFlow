import { Router } from "express";
import { authenticateRoutes } from "./authenticateRoutes";
import { segmentRoutes } from "./segmentRoutes";
import { sellerRoutes } from "./sellerRoutes";
import { storeRoutes } from "./storeRoutes";
import { userRoutes } from "./userRoutes";


const router = Router();

router.use("/store", storeRoutes);
router.use("/seller", sellerRoutes);
router.use("/segment", segmentRoutes);
router.use("/account", userRoutes);
router.use("/", authenticateRoutes)

export { router }