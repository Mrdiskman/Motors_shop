import { Router } from "express";
import commentCreateController from "../../controllers/comments/commentCreate.controller";
import { authUser } from "../../middlewares/users/authUser.middleware";
import cpfAlredyExistMiddleware from "../../middlewares/users/cpfAlredyExist.middleware";
import emailAlredyExistMiddleware from "../../middlewares/users/emailAlredyExist.middleware";
const commentRoutes = Router();

commentRoutes.post("/comments", commentCreateController);

export default commentRoutes;
