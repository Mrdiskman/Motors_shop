import { Router } from "express";
import userRegisterController from "../../controllers/users/registerUser.controllers";
const routes = Router();

routes.post("/users", userRegisterController);

export default routes;
