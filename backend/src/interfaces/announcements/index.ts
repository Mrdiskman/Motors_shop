import { IUser } from "../users";

export interface IAnnouncementRequest {
    model: string
    type: string;
    description?: string;
    km: number;
    year: number;  
    price: number;
    user: IUser;
}


export interface IAnnouncementUpdate {
    model?: string
    type?: string;
    description?: string;
    km?: number;
    year?: number;  
    price?: number;
    user?: IUser; 
}