import { CreateUserController } from "@modules/user/userCase/createUser/CreateUserController";
import { FindUserByIdController } from "@modules/user/userCase/findUserById/FindUserByIdController";
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
const findUserByIdController = new FindUserByIdController()

userRoutes.post("/new", createUserController.handle);
userRoutes.get("/get-store/:user_dms", isAuthenticated, getStoreUserController.handle)
userRoutes.get("/:id", isAuthenticated, findUserByIdController.handle)
userRoutes.put("/update/:id", isAuthenticated, updateUserController.handle)
userRoutes.get("/list", isAuthenticated, listUseController.handle)



export { userRoutes }