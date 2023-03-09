import { Router } from "express";
import commentCreateController from "../../controllers/comments/commentCreate.controller";
import commentDeleteController from "../../controllers/comments/commentDelete.controller";
import commentListAllController from "../../controllers/comments/commentListAll.controller";
import commentUpdateController from "../../controllers/comments/commentUpdate.controller";
import { authUser } from "../../middlewares/users/authUser.middleware";
const commentRoutes = Router();

commentRoutes.post("/comments", authUser, commentCreateController);
commentRoutes.patch("/comments/:id", authUser, commentUpdateController);
commentRoutes.delete("/comments/:id", authUser, commentDeleteController);
commentRoutes.get("/comments", commentListAllController);

export default commentRoutes;
