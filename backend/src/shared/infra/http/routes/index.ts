import { Router } from "express";
import { authenticateRoutes } from "./authenticateRoutes";
import { segmentRoutes } from "./segmentRoutes";
import { sellerRoutes } from "./sellerRoutes";
import { storeRoutes } from "./storeRoutes";
import { serviceTypeRoutes } from "./serviceTypeRoutes";
import { socialMediaRoutes } from "./socialMediaRoutes";
import { prospectionRoutes } from "./prospectionRoutes";
import { userRoutes } from "./userRoutes";
import { storeFlowRoutes } from "./storeFlowRoutes";


const router = Router();

router.use("/stores", storeRoutes);
router.use("/seller", sellerRoutes);
router.use("/segment", segmentRoutes);
router.use("/service-type", serviceTypeRoutes);
router.use("/social-media", socialMediaRoutes);
router.use("/prospection", prospectionRoutes);
router.use("/account", userRoutes);
router.use("/", authenticateRoutes);
router.use("/store-flow", storeFlowRoutes);

export { router }