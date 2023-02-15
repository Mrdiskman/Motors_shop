
export interface IUser{
    name:string,
    email:string,
    password:string,
    cpf:string,
    phone:string,
    dateOfBirth:string,
    descripition:string,
    seller:boolean
    register?:Date
}

export interface IUserCreate{
    name:string,
    email:string,
    password:string,
    cpf:string,
    phone:string,
    dateOfBirth:string,
    descripition:string,
    seller:boolean
}

export interface IUserLogin{
    email: string,
    password:string
}

export interface IUserUpdate{
    name?: string,
    email?: string,
    password?: string,
    number:string, 
}