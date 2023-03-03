import { Router } from "express";
import commentCreateController from "../../controllers/comments/commentCreate.controller";
import commentListAllController from "../../controllers/comments/commentListAll.controller";
const commentRoutes = Router();

commentRoutes.post("/comments", commentCreateController);
commentRoutes.get("/comments", commentListAllController);

export default commentRoutes;
