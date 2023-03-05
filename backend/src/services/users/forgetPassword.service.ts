import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users";

const updatePasswordService = async (email: string, newPassword: string) => {
  const usersRepository = AppDataSource.getRepository(User);
  const user = await usersRepository.findOne({ where: { email } });

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  user.password = newPassword;
  return usersRepository.save(user);
};

export default updatePasswordService;
