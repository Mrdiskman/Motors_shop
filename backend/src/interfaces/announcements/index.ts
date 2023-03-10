import { IUser } from "../users";

export interface IAnnouncement {
  model: string;
  type: string;
  description: string;
  km: number;
  year: number;
  price: number;
  user: any;
  default_img: string;
  images: string[];
}

export interface IAnnouncementCreate {
  model: string;
  type: string;
  description?: string;
  km: number;
  year: number;
  price: number;
  user?: string;
  default_img: string;
  images: string[];
}

export interface IAnnouncementUpdate {
  model?: string;
  type?: string;
  description?: string;
  km?: number;
  year?: number;
  price?: number;
}
