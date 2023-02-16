import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Comment } from "../../entities/comment.entity";
import { User } from "../../entities/users";

const commentCreateService = async (text: string, userId: string) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const userExists = users.find((user) => user.id === userId);

  if (!userExists) {
    throw new AppError(404, "User not found.");
  }

  const newComment = commentRepository.create({
    text,
  });
  await commentRepository.save(newComment);

  return newComment;
};

export default commentCreateService;
