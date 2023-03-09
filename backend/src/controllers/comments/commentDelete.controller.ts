import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import commentDeleteService from "../../services/comments/commentDelete.service";

const commentDeleteController = async (req: Request, res: Response) => {
  const commentId = req.params.id;
  const deletedComment = await commentDeleteService(commentId);

  return res.status(200).send(instanceToPlain(deletedComment));
};

export default commentDeleteController;
