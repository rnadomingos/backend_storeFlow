import { CreateUserController } from "@modules/user/userCase/createUser/CreateUserController";
import { Router } from "express";

const userRoutes = Router()

const createUserController = new CreateUserController()

userRoutes.post("/new", createUserController.handle);

export { userRoutes }