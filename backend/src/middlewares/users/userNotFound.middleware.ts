import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users";

const userNotFoundMiddleware = async(req:Request, res:Response, next:NextFunction) => {
      const {email} = req.body
      const userRepository = AppDataSource.getRepository(User)
      const emailExist = await userRepository.findOneBy({email:email})
      if(!emailExist){
        return res.status(404).json({message:"User Not Found"})
      }
      next()
} 

export default userNotFoundMiddleware