
import { CreateProspectionController } from "@modules/prospection/useCase/createProspection/CreateProspectionController";
import { DeleteProspectionByIdController } from "@modules/prospection/useCase/deleteProspectionById/DeleteProspectionByIdController";
import { DisableEnableProspectionByIdController } from "@modules/prospection/useCase/disableEnableProspesctionById/disableEnableProspectionByIdController";
import { FindAllProspectionController } from "@modules/prospection/useCase/findAllProspection/FindAllProspectionController";
import { FindProspectionByIdController } from "@modules/prospection/useCase/findProspectionById/FindProspectionByIdController";
import { FindProspectionByNameController } from "@modules/prospection/useCase/findProspectionByName/FindProspectionByNameController";
import { UpdateProspectionController } from "@modules/prospection/useCase/updateProspectionById/UpdateProspectionController";
import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const prospectionRoutes = Router();

const createProspectionController = new CreateProspectionController();
const findAllProspectionController = new FindAllProspectionController();
const findProspectionByIdController = new FindProspectionByIdController();
const findProspectionByNameController = new FindProspectionByNameController();
const updateProspectionController = new UpdateProspectionController();
const disableProspectionEnableByIdController = new DisableEnableProspectionByIdController();
const deleteProspectionByIdController = new DeleteProspectionByIdController();

prospectionRoutes.post("/new", isAuthenticated, createProspectionController.handle);
prospectionRoutes.get("/list", isAuthenticated, findAllProspectionController.handle);
prospectionRoutes.get("/get-id/:id", isAuthenticated, findProspectionByIdController.handle);
prospectionRoutes.get("/get-name/:name", isAuthenticated, findProspectionByNameController.handle);
prospectionRoutes.put("/update/:id", isAuthenticated, updateProspectionController.handle);
prospectionRoutes.put("/update-status/:id", isAuthenticated, disableProspectionEnableByIdController.handle);
prospectionRoutes.delete("/delete/:id", isAuthenticated, deleteProspectionByIdController.handle);

export { prospectionRoutes }
