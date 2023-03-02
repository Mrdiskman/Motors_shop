import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users";
import { AppError, handleError } from "../../errors/appError";

export const cpfAlredyExistMiddleware = async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const data = req.body
        const userRepository = AppDataSource.getRepository(User)
        const cpfAlredyExist = await userRepository.findOneBy({cpf:data.cpf})

        if(cpfAlredyExist){
            throw new AppError(409, "This CPF Alredy Exists")
        }
        next() 
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default cpfAlredyExistMiddleware