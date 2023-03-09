import { IAnnouce } from "@/interfaces/announce";
import { IProps } from "@/interfaces/generaInterfaces";
import { createContext, useState } from "react";

export const AnnounceContext = createContext<IAnnouce>({} as IAnnouce);
const AnnounceContextProvider = ({ children }: IProps) => {
  const [announceId, setAnnounceId] = useState("");
  return (
    <AnnounceContext.Provider
      value={{
        announceId,
        setAnnounceId,
      }}
    >
      {children}
    </AnnounceContext.Provider>
  );
};

export default AnnounceContextProvider;