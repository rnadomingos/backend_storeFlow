import { CreateUserController } from "@modules/user/userCase/createUser/CreateUserController";
import { GetStoreUserController } from "@modules/user/userCase/getStoreByUser/GetStoreUserController";
import { Router } from "express";

const userRoutes = Router()

const createUserController = new CreateUserController()
const getStoreUserController = new GetStoreUserController()

userRoutes.post("/new", createUserController.handle);
userRoutes.get("/get-store/:user_dms", getStoreUserController.handle)

export { userRoutes }