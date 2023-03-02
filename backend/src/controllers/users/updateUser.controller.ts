import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import updateUserService from "../../services/users/updateUser.service";
const updateUserController = async (req:Request, res:Response) =>{
    try{
        const id = req.idUser
        const newData = req.body
        const updateUser = await updateUserService(id, newData)
        return res.status(200).json({message: "User updated", ...updateUser})
    }
    catch(err){
        if(err instanceof AppError){
            handleError(err, res)
        }
    }
}

export default updateUserController