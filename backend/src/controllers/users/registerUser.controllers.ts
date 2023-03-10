import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userRegisterService from "../../services/users/registerUser.service";

const userRegisterController = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const newUser = await userRegisterService(userData);
    const { password, ...rest } = newUser;
    return res.status(201).send(rest);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userRegisterController;
