import { ServiceType } from "@modules/serviceType/entities/ServiceType";
import { Router } from "express";
import { segmentRoutes } from "./segmentRoutes";
import { sellerRoutes } from "./SellerRoutes";
import { storeRoutes } from "./storeRoutes";
import { serviceTypeRoutes } from "./serviceTypeRoutes";


const router = Router();

router.use("/store", storeRoutes);
router.use("/seller", sellerRoutes);
router.use("/segment", segmentRoutes)
router.use("/serviceType", serviceTypeRoutes)

export { router }