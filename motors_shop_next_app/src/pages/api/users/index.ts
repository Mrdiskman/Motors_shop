import { Address } from "../../../entities/address.entity";
import { User } from "../../../entities/user.entity";
import type { NextApiRequest, NextApiResponse } from "next";
import { AppDataSource } from "../../../data-source";

type Data = {
  name: string;
};
type IUserCreate = {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  dateOfBirth: string;
  descripition: string;
  seller: boolean;
  abbreviation: string;
  address: IAddress;
};
type IAddress = {
  cep: string;
  state: string;
  number: string;
  city: string;
  complement: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      name,
      email,
      password,
      cpf,
      dateOfBirth,
      phone,
      descripition,
      seller,
      address: { cep, state, number, city, complement },
    } = req.body;
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

    const hashPassword = password;

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

    return res.status(201).json(user);
  }
  res.status(200).json({ name: "John Doe" });
}
