import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users";
import { AppError } from "../../errors/appError";

const forgetPasswordService = async (email:string, newPassword:string) => {
    const usersRepository = AppDataSource.getRepository(User);
    const user = await usersRepository.findOneBy({ email });
    if(!user){
        throw new AppError(404, "Not Found")
    }
    user.password = newPassword;
    const updatedUser = await usersRepository.update(user.id, {...user} );

    //const userRes = await usersRepository.findOneBy({ email });
    return updatedUser //userRes
}   

export default forgetPasswordService