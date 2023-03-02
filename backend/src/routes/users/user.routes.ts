import { Router } from "express";
import listUserController from "../../controllers/users/listUser.controller";
import userRegisterController from "../../controllers/users/registerUser.controllers";
import updateUserController from "../../controllers/users/updateUser.controller";
import userDeleteController from "../../controllers/users/userDelete.controller";
import loginUserController from "../../controllers/users/userLogin.controller";
import { authUser } from "../../middlewares/users/authUser.middleware";
import cpfAlredyExistMiddleware from "../../middlewares/users/cpfAlredyExist.middleware";
import emailAlredyExistMiddleware from "../../middlewares/users/emailAlredyExist.middleware";
const routes = Router();

routes.post("/users", emailAlredyExistMiddleware, cpfAlredyExistMiddleware, userRegisterController);
routes.post("/users/login", loginUserController)

routes.get("/user", authUser, listUserController)

routes.patch("/user/update", authUser, updateUserController)
routes.delete("/user/delete", authUser, userDeleteController)

export default routes;
