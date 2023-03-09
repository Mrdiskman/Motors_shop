import { Router } from "express";
import forgetPasswordController from "../../controllers/users/forgetPassword";
import listAllUsersController from "../../controllers/users/listAllUsers.controller";
import listUserController from "../../controllers/users/listUser.controller";
import listUserIdController from "../../controllers/users/listUserId.controller";
import userRegisterController from "../../controllers/users/registerUser.controllers";
import updateUserController from "../../controllers/users/updateUser.controller";
import userDeleteController from "../../controllers/users/userDelete.controller";
import loginUserController from "../../controllers/users/userLogin.controller";
import { authUser } from "../../middlewares/users/authUser.middleware";
import cpfAlredyExistMiddleware from "../../middlewares/users/cpfAlredyExist.middleware";
import emailAlredyExistMiddleware from "../../middlewares/users/emailAlredyExist.middleware";
import userNotFoundMiddleware from "../../middlewares/users/userNotFound.middleware";
const routes = Router();

routes.post(
  "/users",
  emailAlredyExistMiddleware,
  cpfAlredyExistMiddleware,
  userRegisterController
);
routes.post("/users/login", loginUserController);
routes.post("/users/reset", userNotFoundMiddleware, forgetPasswordController);

routes.get("/user", authUser, listUserController);
routes.get("/user/:id", authUser, listUserIdController);
routes.get("/users", listAllUsersController);

routes.patch("/users/update", authUser, updateUserController);
routes.delete("/users/delete", authUser, userDeleteController);

export default routes;
