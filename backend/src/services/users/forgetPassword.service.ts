import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";
export const sendResetCodeService = async (email: string) => {
  const usersRepository = AppDataSource.getRepository(User);
  const user = await usersRepository.findOne({ where: { email } });
  const newCode = crypto.randomBytes(3).toString("hex").toUpperCase();

  user!.resetCode = newCode;
  await usersRepository.save({ ...user });

  const sendEmail = () => {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODE_MAILER_EMAIL,
        pass: process.env.NODE_MAILER_CODE,
      },
    });
    const mailOptions = {
      from: process.env.NODE_MAILER_EMAIL,
      to: email,
      subject: "Codigo De Recuperação de Senha",
      text: `Segue o codigo de Verificação: \n ${newCode}`,
    };
    transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        return err;
      }
      return info.response;
    });
  };
  sendEmail();
};

export const verifyCode = async (email: string, code: string) => {
  const user = await AppDataSource.getRepository(User).findOneBy({ email });
  if (user!.resetCode !== code) {
    throw new AppError(400,"Invalid Code");
  }
};

export const resetPassword = async (email: string, password: string) => {
  const user = await AppDataSource.getRepository(User).findOneBy({ email });
  const hashPassword = bcrypt.hashSync(password, 10);
  user!.password = hashPassword;
  await AppDataSource.getRepository(User).save({ ...user });
};