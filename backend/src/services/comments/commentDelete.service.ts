import { AppDataSource } from "../../data-source";
import "dotenv/config";
import { AppError } from "../../errors/appError";
import { Comment } from "../../entities/comments/comment.entity";

const commentDeleteService = async (commentId: string) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const findComment = await commentRepository.findOneBy({ id: commentId });
  if (!findComment) {
    throw new AppError(404, "Comment not found.");
  }

  await commentRepository.delete(commentId);
};

export default commentDeleteService;
