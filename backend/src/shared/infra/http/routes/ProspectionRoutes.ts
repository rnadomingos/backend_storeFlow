
import { CreateProspectionController } from "@modules/prospection/useCase/createProspection/CreateProspectionController";
import { DeleteProspectionByIdController } from "@modules/prospection/useCase/deleteProspectionById/DeleteProspectionByIdController";
import { DisableEnableProspectionByIdController } from "@modules/prospection/useCase/disableEnableProspesctionById/disableEnableProspectionByIdController";
import { FindAllProspectionController } from "@modules/prospection/useCase/findAllProspection/FindAllProspectionController";
import { FindProspectionByIdController } from "@modules/prospection/useCase/findProspectionById/FindProspectionByIdController";
import { FindProspectionByNameController } from "@modules/prospection/useCase/findProspectionByName/FindProspectionByNameController";
import { UpdateProspectionByIdController } from "@modules/prospection/useCase/updateProspectionById/UpdateProspectionByIdController";
import { Router } from "express";

const prospectionRoutes = Router();

const createProspectionController = new CreateProspectionController();
const findAllProspectionController = new FindAllProspectionController();
const findProspectionByIdController = new FindProspectionByIdController();
const findProspectionByNameController = new FindProspectionByNameController();
const updateProspectionByIdController = new UpdateProspectionByIdController();
const disableProspectionEnableByIdController = new DisableEnableProspectionByIdController();
const deleteProspectionByIdController = new DeleteProspectionByIdController();

prospectionRoutes.post("/new", createProspectionController.handle);
prospectionRoutes.get("/list", findAllProspectionController.handle);
prospectionRoutes.get("/get-id/:id", findProspectionByIdController.handle);
prospectionRoutes.get("/get-name/:name", findProspectionByNameController.handle);
prospectionRoutes.patch("/update/:id", updateProspectionByIdController.handle);
prospectionRoutes.patch("/update-status/:id", disableProspectionEnableByIdController.handle);
prospectionRoutes.delete("/delete/:id", deleteProspectionByIdController.handle);

export { prospectionRoutes }
