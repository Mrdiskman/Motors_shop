import { IUser, IUserCreate } from "../../interfaces/users";
import bcrypt from "bcrypt";
import { User } from "../../entities/users";
import { AppDataSource } from "../../data-source";

const listUserService = async (id:string) => {

  const userRepository = AppDataSource.getRepository(User);
  const user = userRepository.findOneBy({id})
   
  return user;
};

export default listUserService;
