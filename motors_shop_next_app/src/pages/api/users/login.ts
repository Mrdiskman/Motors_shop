import { User } from "@/entities/user.entity";
import type { NextApiRequest, NextApiResponse } from "next";
import { AppDataSource } from "../../../data-source";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const userRepository = AppDataSource.getRepository(User);
    const userFound = await userRepository.findOneBy({ email });

    if (!userFound) {
      return res.status(403).json({ message: "Wrong Email or Password" });
    }

    if (password != userFound.password) {
      return res.status(403).json({ message: "Wrong Email or Password" });
    }
    const token = jwt.sign(
      { id: userFound!.id },
      String(process.env.JWT_SECRET),
      { expiresIn: "1d" }
    );

    return res.status(200).json({ token: token });
  }
  res.status(200).json({ name: "John Doe" });
}
