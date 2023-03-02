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

  const createdAddress = addressRepository.create({
    cep,
    complement,
    number,
    city,
    state,
  });
  await addressRepository.save(createdAddress);

  const user: IUser = new User();
  (user.name = name),
    (user.email = email),
    (user.password = bcrypt.hashSync(password, 10)),
    (user.cpf = cpf),
    (user.phone = phone),
    (user.dateOfBirth = dateOfBirth),
    (user.descripition = descripition),
    (user.seller = seller),
    (user.address = createdAddress),
    await userRepository.save(user);
  return user;
};

export default userRegisterService;
