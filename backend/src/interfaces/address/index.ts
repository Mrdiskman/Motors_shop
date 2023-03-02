export interface IAddress {
  cep: string;
  state: string;
  city: string;
  number: string;
  complement: string;
}
export interface IAddressUpdate {
  cep?: string;
  state?: string;
  city?: string;
  number?: string;
  complement?: string;
}
