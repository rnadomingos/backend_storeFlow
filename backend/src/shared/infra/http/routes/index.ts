import { Router } from "express";
import { segmentRoutes } from "./SegmentRoutes";
import { sellerRoutes } from "./SellerRoutes";
import { storeRoutes } from "./storeRoutes";
import { serviceTypeRoutes } from "./ServiceTypeRoutes";
import { socialMediaRoutes } from "./SocialMediaRoutes";
import { prospectionRoutes } from "./ProspectionRoutes";


const router = Router();

router.use("/store", storeRoutes);
router.use("/seller", sellerRoutes);
router.use("/segment", segmentRoutes);
router.use("/serviceType", serviceTypeRoutes);
router.use("/socialMedia", socialMediaRoutes);
router.use("/prospection", prospectionRoutes);

export { router }