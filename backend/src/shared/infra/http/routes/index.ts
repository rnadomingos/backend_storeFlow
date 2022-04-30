import { Router } from "express";
import { segmentRoutes } from "./segmentRoutes";
import { sellerRoutes } from "./SellerRoutes";
import { storeRoutes } from "./storeRoutes";
import { serviceTypeRoutes } from "./serviceTypeRoutes";
import { socialMediaRoutes } from "./socialMediaRoutes";


const router = Router();

router.use("/store", storeRoutes);
router.use("/seller", sellerRoutes);
router.use("/segment", segmentRoutes);
router.use("/serviceType", serviceTypeRoutes);
router.use("/socialMedia", socialMediaRoutes);

export { router }