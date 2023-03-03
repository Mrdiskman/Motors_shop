import { hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users";
import { IUserUpdate } from "../../interfaces/users";

const updateUserService = async (id: string, newData: IUserUpdate) => {
  const usersRepository = AppDataSource.getRepository(User);
  let abbreviationString = "";

  if (newData.name) {
    if (newData.name.split(" ").length > 1) {
      const arr = newData.name.split(" ");
      abbreviationString = arr[0][0] + arr[1][0];
      newData.abbreviation = abbreviationString;
    } else {
      abbreviationString = newData.name[0];
      newData.abbreviation = abbreviationString;
    }
  }
  const newUser = await usersRepository.update(id, { ...newData });
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
