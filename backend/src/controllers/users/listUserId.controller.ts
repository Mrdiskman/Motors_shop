import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listUserIdService from "../../services/users/listUserId.service";

const listUserIdController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await listUserIdService(userId);
    const { password, ...rest } = user!;
    return res.status(200).send(rest);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default listUserIdController;
