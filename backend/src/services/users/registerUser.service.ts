import { IUser, IUserCreate } from "../../interfaces/users";
import bcrypt from "bcrypt";
import { User } from "../../entities/users";
import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/address";

const userRegisterService = async ({
  name,
  email,
  password,
  cpf,
  dateOfBirth,
  phone,
  descripition,
  seller,
  address: { cep, state, number, city, complement },
}: IUserCreate): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);
  let abbreviationString = "";

  if (name.split(" ").length > 1) {
    const arr = name.split(" ");
    abbreviationString = arr[0][0] + arr[1][0];
  } else {
    abbreviationString = name[0];
  }
  const createdAddress = addressRepository.create({
    cep,
    state,
    number,
    city,
    complement,
  });

  await addressRepository.save(createdAddress);

  const hashPassword = bcrypt.hashSync(password, 10);

  const user = userRepository.create({
    name,
    email,
    password: hashPassword,
    cpf,
    dateOfBirth,
    phone,
    descripition,
    seller,
    abbreviation: abbreviationString,
    address: { ...createdAddress },
  });
  await userRepository.save(user);

  return user;
};

export default userRegisterService;
