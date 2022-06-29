import { Router } from "express";
import { CreateSocialMediaController } from "@modules/socialMedia/useCase/createSocialMedia/CreateSocialMediaController";
import { DeleteSocialMediaByIdController } from "@modules/socialMedia/useCase/deleteSocialMediaById/DeleteSocialMediaByIdController";
import { DisableEnableSocialMediaByIdController } from "@modules/socialMedia/useCase/disableEnableSocialMedia/DisableEnableSocialMediaByIdController";
import { FindAllSocialMediaController } from "@modules/socialMedia/useCase/findAllSocialMedia/FindAllSocialMediaController";
import { FindSocialMediaByIdController } from "@modules/socialMedia/useCase/findSocialMediaById/FindSocialMediaByIdController";
import { FindSocialMediaByNameController } from "@modules/socialMedia/useCase/findSocialMediaByName/FindSocialMediaByNameController";
import { UpdateSocialMediaByIdController } from "@modules/socialMedia/useCase/updateSocialMediaById/UpdateSocialMediaByIdController";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const socialMediaRoutes = Router();

const createSocialMediaController = new CreateSocialMediaController();
const findSocialMediaByIdController = new FindSocialMediaByIdController();
const findSocialMediaByNameController = new FindSocialMediaByNameController();
const findAllSocialMediaController = new FindAllSocialMediaController();
const updateSocialMediaController = new UpdateSocialMediaByIdController();
const deleteSocialMediaByIdController = new DeleteSocialMediaByIdController();
const disableEnableSocialMediaByIdController = new DisableEnableSocialMediaByIdController();

socialMediaRoutes.post("/new", isAuthenticated, createSocialMediaController.handle);
socialMediaRoutes.get("/get-id/:id", isAuthenticated, findSocialMediaByIdController.handle);
socialMediaRoutes.get("/get-name/:name", isAuthenticated, findSocialMediaByNameController.handle);
socialMediaRoutes.get("/list", isAuthenticated, findAllSocialMediaController.handle);
socialMediaRoutes.patch("/update/:id", isAuthenticated, updateSocialMediaController.handle);
socialMediaRoutes.delete("/delete/:id", isAuthenticated, deleteSocialMediaByIdController.handle);
socialMediaRoutes.patch("/update-status/:id", isAuthenticated, disableEnableSocialMediaByIdController.handle);

export { socialMediaRoutes }