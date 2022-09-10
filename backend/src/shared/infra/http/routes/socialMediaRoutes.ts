import { Router } from "express";
import { CreateSocialMediaController } from "@modules/socialMedia/useCase/createSocialMedia/CreateSocialMediaController";
import { DeleteSocialMediaByIdController } from "@modules/socialMedia/useCase/deleteSocialMediaById/DeleteSocialMediaByIdController";
import { FindSocialMediaController } from "@modules/socialMedia/useCase/findSocialMedia/FindSocialMediaController";
import { FindSocialMediaByIdController } from "@modules/socialMedia/useCase/findSocialMediaById/FindSocialMediaByIdController";
import { FindSocialMediaByNameController } from "@modules/socialMedia/useCase/findSocialMediaByName/FindSocialMediaByNameController";
import { UpdateSocialMediaByIdController } from "@modules/socialMedia/useCase/updateSocialMediaById/UpdateSocialMediaByIdController";
import { isAdmin } from "../middlewares/isAdmin";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const socialMediaRoutes = Router();

const createSocialMediaController = new CreateSocialMediaController();
const findSocialMediaByIdController = new FindSocialMediaByIdController();
const findSocialMediaByNameController = new FindSocialMediaByNameController();
const findSocialMediaController = new FindSocialMediaController();
const updateSocialMediaController = new UpdateSocialMediaByIdController();
const deleteSocialMediaByIdController = new DeleteSocialMediaByIdController();

socialMediaRoutes.post("/", isAuthenticated, isAdmin, createSocialMediaController.handle);
socialMediaRoutes.get("/filter", isAuthenticated, findSocialMediaByNameController.handle);
socialMediaRoutes.get("/:id", isAuthenticated, findSocialMediaByIdController.handle);
socialMediaRoutes.get("/", isAuthenticated, findSocialMediaController.handle);
socialMediaRoutes.put("/:id", isAuthenticated, isAdmin, updateSocialMediaController.handle);
socialMediaRoutes.delete("/:id", isAuthenticated, isAdmin, deleteSocialMediaByIdController.handle);

export { socialMediaRoutes }