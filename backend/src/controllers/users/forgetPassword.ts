import { AppError, handleError } from "../../errors/appError";
import { Request, Response } from "express";
import {resetPassword, sendResetCodeService, verifyCode} from "../../services/users/forgetPassword.service";

const forgetPasswordController = async (req: Request, res: Response) => {
  try {
    const { email, password, code } = req.body;
    if(password){
      const validateCode = await resetPassword(email, password)
      return res.status(200).send({ message: "Sucess!" })
    }

    if(code){
      const validateCode = await verifyCode(email, code)
      return res.status(200).send({ message: "Ok" })
    }

    if (email) {
      const newPassword = await sendResetCodeService(email);
      return res.status(200).send({ message: "Check Your Email!" })
    }
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default forgetPasswordController;