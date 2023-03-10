import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import loginUserService from "../../services/users/userLogin.service";

const loginUserController = async (req: Request, res: Response) => {
  try {
    const loginData = req.body;
    const token = await loginUserService(loginData);

    return res.status(200).send({ token });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default loginUserController;
