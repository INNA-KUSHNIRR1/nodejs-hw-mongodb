import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.js";
import { loginUserSchema, registerUserSchema, sendResetEmailSchema } from "../validation/auth.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import {
    loginUserController,
    logoutUserController,
    refreshUserSessionController,
    registerUserController,
    sendResetEmailController} from "../controllers/auth.js";


const router=Router();

router.post("/register", validateBody(registerUserSchema), ctrlWrapper(registerUserController),);
router.post("/login", validateBody(loginUserSchema), ctrlWrapper(loginUserController),);
router.post("/refresh", ctrlWrapper(refreshUserSessionController));
router.post("/logout", ctrlWrapper(logoutUserController));
router.post("/send-reset-email", validateBody(sendResetEmailSchema), ctrlWrapper(sendResetEmailController));
router.post("/reset-password", ctrlWrapper());


export default router;
