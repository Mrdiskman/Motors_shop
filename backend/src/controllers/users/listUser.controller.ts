import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listUserService from "../../services/users/listUser.service";

const listUserController = async (req: Request, res: Response) => {
  try {
    const id = req.idUser
    const user = await listUserService(id);
    const {password, ...rest} = user!
    return res.status(200).send(rest);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default listUserController;
