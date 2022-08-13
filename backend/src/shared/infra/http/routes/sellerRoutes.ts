import { Router } from "express";
import { CreateSellerController } from "@modules/seller/useCase/createSeller/CreateSellerController";
import { DeleteSellerByController } from "@modules/seller/useCase/deleteSeller/DeleteSellerByController";
import { FindSellerByUserDmsController } from "@modules/seller/useCase/findSellerByUserDMS/FindSellerByUserDmsController";
import { FindStoreSellerController } from "@modules/seller/useCase/findStoreBySeller/FindStoreSellerController";
import { ListSellerController } from "@modules/seller/useCase/listSeller/ListSellerController";
import { UpdateSellerController } from "@modules/seller/useCase/updateSeller/UpdateSellerController";
import { isAdmin } from "../middlewares/isAdmin";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { FindSellerByIdController } from "@modules/seller/useCase/findSellerById/FindSellerByIdController";


const sellerRoutes = Router();

const createSellerController = new CreateSellerController();
const findStoreSellerController = new FindStoreSellerController();
const listSellerController = new ListSellerController();
const findSellerByUserDmsController = new FindSellerByUserDmsController();
const updateSellerController = new UpdateSellerController();
const deleteSellerByController = new DeleteSellerByController();
const findSellerByIdController = new FindSellerByIdController();

sellerRoutes.post("/", isAuthenticated, isAdmin, createSellerController.handle);
sellerRoutes.get("/", isAuthenticated, listSellerController.handle);
sellerRoutes.get("/:user_dms/store", isAuthenticated, findStoreSellerController.handle);
sellerRoutes.get("/:user_dms/seller", isAuthenticated, findSellerByUserDmsController.handle);
sellerRoutes.get("/:id", isAuthenticated, findSellerByIdController.handle);
sellerRoutes.put("/:id", isAuthenticated, isAdmin, updateSellerController.handle);
sellerRoutes.delete("/:id", isAuthenticated, isAdmin, deleteSellerByController.handle);


export { sellerRoutes }