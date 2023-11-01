import express from "express";
import morgan from "morgan";
import passport from "passport";
import { config } from "./config.js";
import jwtMiddleware from "./middlewares/jwt.middleware.js";
import setupAppRoutes from "./routes/index.js";
import cors from "cors"

const app = express();

app.use(morgan(config.mode));
app.use(express.json());
app.use(cors())

//---->Setup Passport for authentication
app.use(passport.initialize());
jwtMiddleware(passport);

//---->Setup routes
setupAppRoutes(app);
export default app;