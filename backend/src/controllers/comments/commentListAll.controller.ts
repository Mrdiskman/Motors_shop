import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import commentListAllService from "../../services/comments/commentListAll.service";
import commentListMineService from "../../services/comments/commentListMine.service";

const commentListAllController = async (req: Request, res: Response) => {
  const comments = await commentListAllService();

  return res.send(instanceToPlain(comments));
};

export default commentListAllController;
