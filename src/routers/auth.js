import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.js";
import { registerUserSchema } from "../validation/auth.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { registerUserController } from "../controllers/auth.js";

const router=Router();
router.post("/register", validateBody(registerUserSchema), ctrlWrapper(registerUserController),);

export default router;
