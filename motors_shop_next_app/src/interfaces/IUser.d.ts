import { IAddress_POST, IUser_POST } from "./IUser_POST";

export interface IUser extends Omit<IUser_POST, "address" | "password"> {
  id: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  address: IAddress;
}

export interface IAddress extends IAddress_POST {
  id: string;
}
