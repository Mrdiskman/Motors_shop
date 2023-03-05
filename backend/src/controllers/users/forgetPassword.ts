import { AppError, handleError } from "../../errors/appError";
import { Request, Response } from "express";
import updatePasswordService from "../../services/users/forgetPassword.service";

const forgetPasswordController = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body
    const newPassword = updatePasswordService(email, password)
    return res.status(200).send(newPassword);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default forgetPasswordController;
