import { AppError, handleError } from "../../errors/appError";
import { Request, Response } from "express";
import forgetPasswordService from "../../services/users/forgetPassword.service";

const forgetPasswordController = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body
    const newPassword = forgetPasswordService(email, password)
    return res.status(200).send("Sucess!");
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default forgetPasswordController;
