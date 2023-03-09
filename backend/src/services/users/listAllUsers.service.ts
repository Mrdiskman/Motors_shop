import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users";

const listAllUsersService = async () => {
  const usersRepository = AppDataSource.getRepository(User);

  const users = usersRepository.find({
    relations: {
      address: true,
    },
  });

  return users;
};

export default listAllUsersService;
