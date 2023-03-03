import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listAllUsersService from "../../services/users/listAllUsers.service";

const listAllUsersController = async (req: Request, res: Response) => {
  const users = await listAllUsersService();
  return res.send(instanceToPlain(users));
};

export default listAllUsersController;
