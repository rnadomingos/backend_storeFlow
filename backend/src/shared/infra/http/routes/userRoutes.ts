import { AuthenticateController } from "@modules/user/userCase/authenticateUser/AuthenticateController";
import { LogoutController } from "@modules/user/userCase/authenticateUser/LogoutController";
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
const authenticateController = new AuthenticateController()
const logoutController = new LogoutController()

userRoutes.post("/new", createUserController.handle);
userRoutes.get("/get-store/:user_dms", getStoreUserController.handle)
userRoutes.put("/update/:id", updateUserController.handle)
userRoutes.get("/list", isAuthenticated, listUseController.handle)
userRoutes.post("/login", authenticateController.handle)
userRoutes.post("/logout", logoutController.handle)


export { userRoutes }