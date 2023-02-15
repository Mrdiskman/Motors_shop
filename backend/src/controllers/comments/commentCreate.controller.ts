import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import commentCreateService from "../../services/comments/commentCreate.service";

const commentCreateController = async (req: Request, res: Response) => {
  const { text } = req.body;
  const user = req.user;

  const newComment = await commentCreateService(text, user.id);

  return res.status(201).send(instanceToPlain(newComment));
};

export default commentCreateController;
