import { User } from "@/entities/user.entity";
import type { NextApiRequest, NextApiResponse } from "next";
import { AppDataSource } from "../../../data-source";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  if (req.method === "GET") {
    const userRepository = AppDataSource.getRepository(User);
    let user;
    if (typeof id === "string") {
      user = await userRepository.findOneBy({ id });
    }
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    return res.status(200).json(user);
  }
  res.status(200).json({ name: "John Doe" });
}
