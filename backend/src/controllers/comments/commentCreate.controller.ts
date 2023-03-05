import { Request, Response } from "express";
import commentCreateService from "../../services/comments/commentCreate.service";

const commentCreateController = async (req: Request, res: Response) => {
  const { text, annoucement } = req.body;
  const userId = req.idUser;
  const newComment = await commentCreateService(text, userId, annoucement);

  return res.status(201).send(newComment);
};

export default commentCreateController;
