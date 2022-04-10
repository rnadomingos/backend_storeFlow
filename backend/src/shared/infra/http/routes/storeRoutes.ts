import { Router } from "express";
import { createStoreController, listStoreController } from "../../../../modules/store/useCase";


const storeRoutes = Router();



storeRoutes.post("/new", (request, response) => {
  return createStoreController.handle(request, response)
});
storeRoutes.get("/", (request, response) => {
  return listStoreController.handle(request, response)
});


export { storeRoutes }