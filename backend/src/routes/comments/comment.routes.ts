import { Router } from "express";
import commentCreateController from "../../controllers/comments/commentCreate.controller";
import commentListAllController from "../../controllers/comments/commentListAll.controller";
import { authUser } from "../../middlewares/users/authUser.middleware";
const commentRoutes = Router();

commentRoutes.post("/comments", authUser, commentCreateController);
commentRoutes.get("/comments", commentListAllController);

export default commentRoutes;
