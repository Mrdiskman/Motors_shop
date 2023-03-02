import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import commentListMineService from "../../services/comments/commentListMine.service";

const commentListMineController = async (req: Request, res: Response) => {
  /* const comments = await commentListMineService({userId: req.id});

  return res.send(instanceToPlain(comments)); */
};

export default commentListMineController;
