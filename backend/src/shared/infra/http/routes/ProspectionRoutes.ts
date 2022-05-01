
import { CreateProspectionController } from "@modules/prospection/useCase/createProspection/CreateProspectionController";
import { FindAllProspectionController } from "@modules/prospection/useCase/findAllProspection/FindAllProspectionController";
import { Router } from "express";

const prospectionRoutes = Router();

const createProspectionController = new CreateProspectionController();
const findAllProspectionController = new FindAllProspectionController();

prospectionRoutes.post("/new", createProspectionController.handle);
prospectionRoutes.get("/list", findAllProspectionController.handle);

export { prospectionRoutes }
