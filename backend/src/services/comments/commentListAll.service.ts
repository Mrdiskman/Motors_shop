import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comments/comment.entity";

const commentListAllService = async () => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const comments = commentRepository.find();

  return comments;
};

export default commentListAllService;
