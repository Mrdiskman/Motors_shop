import { User } from "../../entities/users";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

const listUserIdService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      announcements: true,
    },
  });
  if (!user) {
    throw new AppError(404, "User Not Found");
  }
  return user;
};

export default listUserIdService;
