import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { AppError } from "../../errors/appError";

const commentListMineService = async (userId: string) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const comments = await commentRepository.find();

  const findComments = comments.find((comment) => comment.user.id === userId);
  if (!findComments) {
    throw new AppError(404, "Comments not found.");
  }

  return comments;
};

export default commentListMineService;
