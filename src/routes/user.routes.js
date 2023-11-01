import { Router } from "express";
import * as UserController from "../controller/user.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import * as schemas from "../schemas/user.schema.js";

const UserRouter = Router();
const path = "/user"
UserRouter.get(path,
// auth,
UserController.getUser
);

UserRouter.put(path,
    // auth,
    validateSchema(schemas.updateUserSchema),
    UserController.updateUser
); 


export default UserRouter;