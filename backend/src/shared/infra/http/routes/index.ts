import { Router } from "express";
import { segmentRoutes } from "./segmentRoutes";
import { sellerRoutes } from "./sellerRoutes";
import { storeRoutes } from "./storeRoutes";
import { serviceTypeRoutes } from "./serviceTypeRoutes";
import { socialMediaRoutes } from "./socialMediaRoutes";
import { prospectionRoutes } from "./prospectionRoutes";


const router = Router();

router.use("/store", storeRoutes);
router.use("/seller", sellerRoutes);
router.use("/segment", segmentRoutes);
router.use("/serviceType", serviceTypeRoutes);
router.use("/socialMedia", socialMediaRoutes);
router.use("/prospection", prospectionRoutes);

export { router }