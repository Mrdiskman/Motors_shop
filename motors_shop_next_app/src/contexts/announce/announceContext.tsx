import { IAnnouce } from "@/interfaces/announce";
import { IProps } from "@/interfaces/generaInterfaces";
import { IUser } from "@/pages/announceDetail/[id]";
import { createContext, useState } from "react";

export const AnnounceContext = createContext<IAnnouce>({} as IAnnouce);
const AnnounceContextProvider = ({ children }: IProps) => {
  const [announceId, setAnnounceId] = useState("");
  const [sellerData, setSellerData] = useState<IUser | null>(null);
  return (
    <AnnounceContext.Provider
      value={{
        sellerData,
        announceId,
        setAnnounceId,
        setSellerData,
      }}
    >
      {children}
    </AnnounceContext.Provider>
  );
};

export default AnnounceContextProvider;
