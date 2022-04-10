import { Router } from "express";
import { storeRoutes } from "./storeRoutes";

const router = Router();

router.use("/store", storeRoutes);

export { router }