import { IUserLogin } from "../../interfaces/users";
import bcrypt from "bcrypt";
import { User } from "../../entities/users";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import jwt from "jsonwebtoken";

const loginUserService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const userFound = await userRepository.findOne({
    where: {
      email: email,
    },
    select: ["password", "id"],
  });

  if (!userFound) {
    throw new AppError(403, "Wrong Email or Password");
  }

  if (!bcrypt.compareSync(password, userFound.password)) {
    throw new AppError(403, "Wrong Email or Password");
  }
  const token = jwt.sign({ id: userFound.id }, String(process.env.JWT_SECRET), {
    expiresIn: "1d",
  });
  return token;
};

export default loginUserService;
