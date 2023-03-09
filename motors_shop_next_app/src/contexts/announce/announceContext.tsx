import { IAnnouce } from "@/interfaces/announce";
import { IProps } from "@/interfaces/generaInterfaces";
import { api } from "services/api";
import { createContext, useEffect, useState } from "react";

type user = {
  name: string;
  abbreviation: string;
  descripition: string;
};
type IComments = {
  id: string;
  text: string;
  created_at: string;
  user: user;
};

type announcement = {
  id: string;
  model: string;
  type: string;
  default_img: string;
  images: string[];
  title: string;
  description: string;
  announcer: string;
  km: number;
  year: number;
  price: number;
  user: user;
  comments: IComments[];
};

export const AnnounceContext = createContext<IAnnouce>({} as IAnnouce);
const AnnounceContextProvider = ({ children }: IProps) => {
  const [announceData, setAnnounceData] = useState<null | announcement>(null);

  const [announceId, setAnnounceId] = useState("");
  useEffect(() => {}, [announceId]);

  async function announcerData() {
    const result = api
      .get(`/announcements/${announceId}`)

      .then((res: any) => {
        setAnnounceData(res.data);
      })
      .catch((err: any) => console.log(err));
  }
  useEffect(() => {
    announcerData();
  }, [announceId]);

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
