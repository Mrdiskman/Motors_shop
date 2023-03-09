import { IUser } from "@/pages/announceDetail/[id]";

export interface IAnnouce {
  setSellerData: React.Dispatch<React.SetStateAction<IUser | null>> 
  setAnnounceId: React.Dispatch<React.SetStateAction<string>>;
  announceId: string;
  sellerData: IUser | null;
}
