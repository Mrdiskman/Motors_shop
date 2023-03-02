import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import commentCreateService from "../../services/comments/commentCreate.service";

const commentCreateController = async (req: Request, res: Response) => {
  const { text, user, announcement } = req.body;

  const newComment = await commentCreateService(text, user, announcement);

  return res.status(201).send(newComment);
};

export default commentCreateController;
