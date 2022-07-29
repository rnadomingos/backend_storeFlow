
import { CreateProspectionController } from "@modules/prospection/useCase/createProspection/CreateProspectionController";
import { DeleteProspectionIdController } from "@modules/prospection/useCase/deleteProspection/DeleteProspectionByIdController";
import { FindProspectionByIdController } from "@modules/prospection/useCase/findProspectionById/FindProspectionByIdController";
import { FindProspectionByNameController } from "@modules/prospection/useCase/findProspectionByName/FindProspectionByNameController";
import { ListProspectionController } from "@modules/prospection/useCase/listProspection/ListProspectionController";
import { UpdateProspectionController } from "@modules/prospection/useCase/updateProspectionById/UpdateProspectionController";
import { Router } from "express";
import { isAdmin } from "../middlewares/isAdmin";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const prospectionRoutes = Router();

const createProspectionController = new CreateProspectionController();
const listProspectionController = new ListProspectionController();
const findProspectionByIdController = new FindProspectionByIdController();
const findProspectionByNameController = new FindProspectionByNameController();
const updateProspectionController = new UpdateProspectionController();
const deleteProspectionController = new DeleteProspectionIdController();

prospectionRoutes.post("/", isAuthenticated, isAdmin, createProspectionController.handle);
prospectionRoutes.get("/", isAuthenticated, listProspectionController.handle);
prospectionRoutes.get("/filter", isAuthenticated, findProspectionByNameController.handle);
prospectionRoutes.get("/:id", isAuthenticated, findProspectionByIdController.handle)
prospectionRoutes.put("/:id", isAuthenticated, isAdmin, updateProspectionController.handle)
prospectionRoutes.delete("/:id", isAuthenticated, isAdmin, deleteProspectionController.handle);

export { prospectionRoutes }
