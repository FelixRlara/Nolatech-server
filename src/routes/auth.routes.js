import { Router } from "express";
import { validateSchema } from "../middlewares/validator.middleware.js";

import * as schemas from "..//schemas/auth.schema.js";
import * as AuthControlller from "../controller/auth.controller.js";

const AuthRouter = Router();

AuthRouter.post(
  '/register',
  validateSchema(schemas.registerSchema),
  AuthControlller.register
);

AuthRouter.post(
  '/login',
  validateSchema(schemas.loginSchema),
  AuthControlller.login
);

export default AuthRouter;