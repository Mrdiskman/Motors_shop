import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import commentUpdateService from "../../services/comments/commentUpdate.service";
const commentUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const updateComment = await commentUpdateService(id, newData);
    return res.status(200).json({ updateComment });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default commentUpdateController;
