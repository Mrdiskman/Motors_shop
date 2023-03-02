import { hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users";
import { IUserUpdate } from "../../interfaces/users";

const updateUserService = async (id: string, newData: IUserUpdate) => {
  const usersRepository = AppDataSource.getRepository(User);
  console.log("oi");
  const newUser = await usersRepository.update(id, { ...newData });
  console.log(newUser);
  const newUserReq = await usersRepository.findOneBy({ id });

  const updateRes = {
    name: newUserReq!.name,
    email: newUserReq!.email,
    phone: newUserReq!.phone,
    cpf: newUserReq!.cpf,
    dateOfBirth: newUserReq!.dateOfBirth,
    descripition: newUserReq!.descripition,
  };
  return updateRes;
};

export default updateUserService;
