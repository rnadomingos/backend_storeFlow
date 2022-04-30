import { CreateSocialMediaController } from "@modules/socialMedia/useCase/createSocialMedia/CreateSocialMediaController";
import { FindSocialMediaByIdController } from "@modules/socialMedia/useCase/findSocialMediaById/FindSocialMediaByIdController";
import { FindSocialMediaByNameController } from "@modules/socialMedia/useCase/findSocialMediaByName/FindSocialMediaByNameController";
import { Router } from "express";


const socialMediaRoutes = Router();

const createSocialMediaController = new CreateSocialMediaController();
const findSocialMediaByIdController = new FindSocialMediaByIdController();
const findSocialMediaByNameController = new FindSocialMediaByNameController();

socialMediaRoutes.post("/new", createSocialMediaController.handle);
socialMediaRoutes.get("/get-id/:id", findSocialMediaByIdController.handle);
socialMediaRoutes.get("/get-name/:name", findSocialMediaByNameController.handle);

export { socialMediaRoutes }