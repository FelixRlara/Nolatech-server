import { auth } from "../middlewares/auth.middleware.js";
import AuthRouter from "./auth.routes.js";
import UserRouter from "./user.routes.js";

const defaultPath = "/api"
const AppRouter = app => {

    app.get('/', (req, res) => {
        res.status(200).send({ message: "[🤖]: Welcome to Nolatech Test API. Register or Login to test Authentication."});
    });
    
    app.use(`${defaultPath}/auth`, AuthRouter);
    app.use(`${defaultPath}`, UserRouter);
}

export default AppRouter