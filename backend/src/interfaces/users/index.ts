import { IAddress, IAddressUpdate } from "../address";

export interface IUser {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  dateOfBirth: string;
  descripition: string;
  abbreviation: string;
  seller: boolean;
  register?: Date;
  address: IAddress;
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  dateOfBirth: string;
  descripition: string;
  seller: boolean;
  address: IAddress;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  dateOfBirth?: string;
  descripition?: string;
}
