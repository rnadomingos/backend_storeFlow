import { CreateUserController } from "@modules/user/userCase/createUser/CreateUserController";
import { GetStoreUserController } from "@modules/user/userCase/getStoreByUser/GetStoreUserController";
import { ListUseController } from "@modules/user/userCase/listUser/ListUserCotroller";
import { UpdateUserController } from "@modules/user/userCase/updateUser/UpdateUserController";
import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const userRoutes = Router()

const createUserController = new CreateUserController()
const getStoreUserController = new GetStoreUserController()
const updateUserController = new UpdateUserController()
const listUseController = new ListUseController()


userRoutes.post("/new", createUserController.handle);
userRoutes.get("/get-store/:user_dms", getStoreUserController.handle)
userRoutes.put("/update/:id", updateUserController.handle)
userRoutes.get("/list", isAuthenticated, listUseController.handle)



export { userRoutes }