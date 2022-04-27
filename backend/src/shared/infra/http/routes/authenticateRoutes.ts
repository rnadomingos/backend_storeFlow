import { AuthenticateController } from "@modules/user/userCase/authenticateUser/AuthenticateController";
import { LogoutController } from "@modules/user/userCase/authenticateUser/LogoutController";
import { ResetPasswordController } from "@modules/user/userCase/resetPassword/ResetPasswordController";
import { SendForgotPasswordMailController } from "@modules/user/userCase/sendForgotPasswordMail/SendForgotPasswordMailController";
import { Router } from "express";

const authenticateRoutes = Router()

const authenticateController = new AuthenticateController()
const logoutController = new LogoutController()
const sendForgotPasswordMailController = new SendForgotPasswordMailController()
const resetPasswordController = new ResetPasswordController()

authenticateRoutes.post("/login", authenticateController.handle)
authenticateRoutes.post("/logout", logoutController.handle)
authenticateRoutes.post("/password/forgot", sendForgotPasswordMailController.handle)
authenticateRoutes.post("/password/reset", resetPasswordController.handle)

export { authenticateRoutes }