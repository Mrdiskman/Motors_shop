import { Dispatch, SetStateAction } from "react";

export interface IAnnouce {
  setAnnounceId: React.Dispatch<React.SetStateAction<string>>;
  announceId: string;
}
